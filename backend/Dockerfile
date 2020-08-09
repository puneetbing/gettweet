FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8
RUN pip install hypercorn
RUN pip install jinja2
RUN pip install aiofiles
RUN pip install tweepy
RUN pip install mangum
COPY . /gettweet/backend
WORKDIR /gettweet
# CMD ["python", "backend/ssr_server.py"]
CMD ["python", "backend/api_server.py"]

# CMD ["sleep", "40000"]
