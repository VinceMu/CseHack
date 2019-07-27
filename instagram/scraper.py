# Scraper for instagram 
# search for posts based on tags

import requests


# main scraper method for all social media platforms
def scraper(location="", topic="", limit="", time=""):
    """
    Parameters:
    location : str
        filter by location
    topic : str
        filter by a topic/search term
    limit : int
        number of results to query
    time : timestamp?
        oldest record to go to
    """
    # currently can only filter by tags... 
    if not topic:
        return search_tags(location)
    return search_tags(topic)

# search instagram based on a tag and optionally a location
def search_tags(tag=""):
    captions = []
    if not tag:
        return captions

    url = 'https://www.instagram.com/explore/tags/'+tag+'/?__a=1'
    r = requests.get(url=url)
    if r.status_code is not 200:
        raise Exception('Bad request. Error code: ' + r.status_code)
    
    data = r.json()
    try: 
        for media in data['graphql']['hashtag']['edge_hashtag_to_media']['edges']:
            for caption in media['node']['edge_media_to_caption']['edges']:
                captions.append(caption['node']['text'])
    except Exception as e:
        print (e)

    return captions

search_tags('weather')