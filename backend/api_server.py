from fastapi import FastAPI, Request, Form, Body
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.routing import Route, Mount
from starlette.responses import PlainTextResponse, RedirectResponse
import asyncio
from hypercorn.config import Config
from hypercorn.asyncio import serve
from getContentDetails import get_content
from pydantic import BaseModel, Field
import json 
from fastapi.middleware.cors import CORSMiddleware
origins = [
    "https://puneet.hiver.space:8000",
    "https://twitter.com",
    "http://localhost:3000"
]

class StatusUrl(BaseModel):
    status_url: str

BASE_URL = 'gettweet.in'


async def not_found(request, exc):
    return HTMLResponse(content={'error': 'Page not found'}, status_code=exc.status_code)

async def server_error(request, exc):
    return HTMLResponse(content=HTML_500_PAGE, status_code=exc.status_code)

exception_handlers = {
    404: not_found,
    500: server_error
}

gettweet = FastAPI(debug = True, routes=routes, exception_handlers=exception_handlers)

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
        response = get_content(status_id)
    except Exception as e:
        response =  {"error": str(e)}
    return landing.TemplateResponse("download.html", {"request": request, "response": response})

config = Config()
config.bind = ["0.0.0.0:8000"]
config.ca_certs = '../local_certs/_.hiverhq_gd_bundle.crt'
config.certfile = '../local_certs/_.hiverhq.crt'
config.keyfile = '../local_certs/_.hiverhq.key'
config.debug = True


if __name__ == "__main__":
    asyncio.run(serve(gettweet, config))
    # uvicron.run(gettweet, host="0.0.0.0", port=8000)

