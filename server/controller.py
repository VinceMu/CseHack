import sentiment_analysis
import reddit
import instagram

def scrapeSites(location, topic, limit):
    text = []
    text.append(reddit.scraper(location, topic, limit))
    text.append(instagram.scraper(location, topic, limit))
    analyse(text)

def analyse(text):
    return analysis.analyse(text)
