import tweepy
import json

# https://developer.twitter.com/en/docs.html

with open("credentials.json", "r") as file:
    creds = json.load(file)

auth = tweepy.OAuthHandler(creds["CONSUMER_KEY"], creds["CONSUMER_SECRET"])
auth.set_access_token(creds["ACCESS_TOKEN"], creds["ACCESS_SECRET"])

api = tweepy.API(auth)

public_tweets = api.home_timeline()
for tweet in public_tweets:
    print(tweet.text)