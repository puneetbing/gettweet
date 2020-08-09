from fastapi import FastAPI, Request, Form, Body
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.routing import Route, Mount
from starlette.responses import PlainTextResponse, RedirectResponse, JSONResponse
import asyncio
from hypercorn.config import Config
from hypercorn.asyncio import serve
from getContentDetails import get_content
from pydantic import BaseModel, Field
import json 
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum
origins = [
    "https://gettweet.in",
    "https://twitter.com",
    "http://localhost:3000"
]

class StatusUrl(BaseModel):
    status_url: str

async def not_found(request, exc):
    return JSONResponse(
        content={'error': 'Page not found'},
        status_code=404,
        headers={'content-type': 'application/json'}
    )

async def server_error(request, exc):
    return JSONResponse(
        content={'error': 'Server Error'},
        status_code=500,
        headers={'content-type': 'application/json'}
    )

exception_handlers = {
    404: not_found,
    500: server_error
}

gettweet = FastAPI(debug = False, exception_handlers=exception_handlers)

gettweet.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@gettweet.middleware("http")
async def add_csps(request: Request, call_next):
    response = await call_next(request)
    response.headers['content-security-policy'] = "script-src 'self' https://twitter.com https://code.jquery.com; form-action 'self'; frame-src 'self'"
    return response

@gettweet.post("/fetch")
async def fetch_tweet_contents(data: StatusUrl):
    try:
        status_id = int(data.status_url.split("/")[-1])
        response = get_content(status_id)
    except Exception as e:
        response =  {"error": str(e)}
    return response

def validate_header(request):
    if 'referer' not in request.headers or request.headers['referer'].find('https://twitter.com') != 0:
        raise Exception("[FATAL]: This link can only be opened through the extension getTweet")

@gettweet.get("/twdownload/{status_id}")
async def download_contents_from_extension(status_id: int, request: Request):
    try:
        validate_header(request)
        return get_content(status_id)
    except Exception as e:
        return {"error": str(e)}

config = Config()
config.bind = ["0.0.0.0:8000"]


handler = Mangum(app, enable_lifespan=False)

# if __name__ == "__main__":
#     asyncio.run(serve(gettweet, config))
    # uvicron.run(gettweet, host="0.0.0.0", port=8000)

