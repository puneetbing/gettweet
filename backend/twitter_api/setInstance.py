import tweepy
import os

consumer_key=os.environ.get('consumer_key')
consumer_secret=os.environ.get('consumer_secret')
access_token_key=os.environ.get('access_token_key')
access_token_secret=os.environ.get('access_token_secret')

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token_key, access_token_secret)

api_instance = tweepy.API(auth)
