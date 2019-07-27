import sentiment_analysis
import reddit.scraper
import instagram.scraper
import twitter.scraper

def scrapeSites(location, topic, limit):
    text = []
    # text.append(reddit.scraper.scrape(location, topic, limit))
    text.append(instagram.scraper.scraper(location, topic, limit))
    text.append(twitter.scraper.scraper(location, topic, limit))

    analyse(text)

def analyse(text):
    return sentiment_analysis.analysis.analyse(text)
