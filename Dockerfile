FROM tiangolo/uvicorn-gunicorn-fastapi:python3.8
RUN pip install hypercorn
RUN pip install jinja2
RUN pip install aiofiles
RUN pip install tweepy
RUN export consumer_key="f6gGPT4E4b9DSg0omngkXtjSG"
RUN export consumer_secret="v7N7pAbXQFnGuP2g1rMINO4lfvnLNNZRBy8UtMVos1memUT5Q4"
RUN export access_token_key="1281979059140825088-xSR6oRlH5683Z1z2tXKwEMfawd94tx"
RUN export access_token_secret="ZKpYb2eQUhZ6LQvxbJ0103EKAZW1LleE61MgYrTqAWhSL"
COPY . /gettweet
WORKDIR /gettweet
CMD ["python", "backend/ssr_server.py"]
# CMD ["python", "/backend/api_server.py"]

# CMD ["sleep", "40000"]
