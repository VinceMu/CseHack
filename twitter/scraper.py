import tweepy
import json
import os
import re 

# https://developer.twitter.com/en/docs.html
# can use bounding box for location filtering 
# - POSTED from the webpage? 

def sign_in():
    """
    returns a reference to the authenticated api
    """
    auth = tweepy.OAuthHandler(os.environ.get("CONSUMER_KEY"), os.environ.get("CONSUMER_SECRET"))
    auth.set_access_token(os.environ.get("ACCESS_TOKEN"), os.environ.get("ACCESS_SECRET"))
    api = tweepy.API(auth)
    return api

def clean_text(text):
    patterns = [
        "((http(s)?(\:\/\/))+(www\.)?([\w\-\.\/])*(\.[a-zA-Z]{2,3}\/?))[^\s\b\n|]*[^.,;:\?\!\@\^\$ -]"
        , "#"
    ]
    for pattern in patterns:
        text = re.sub(pattern, "", text, flags=re.MULTILINE)
    return text

def scrape(location="", topic="", limit=""):
    """
    public_tweets = api.home_timeline()
    for tweet in public_tweets:
        print(tweet.text)
    """
    # API.search(q[, geocode][, lang][, locale][, result_type][, count][, until][, since_id][, max_id][, include_entities])
    tweets = []
    if not location and not topic:
        return tweets
    api = sign_in()
    query       = topic
    geocode     = "-33.865143, 151.209900"
    lang        = "EN"
    locale      = ""
    count       = 100
    
    search_results = api.search(topic,lang=lang,count=count)
    for tweet in search_results:
        text = clean_text(tweet.text)
        if len(text)>0:
            tweets.append(text)
    return tweets


tweets = scrape("","soccer")
for tweet in tweets:
    print(tweet)
