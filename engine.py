"""This script scrapes RSS links from a given URL and prints them out."""

import json
from flask import Flask, request
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route('/scrape_rss')
def scrape_rss():
    """Scrapes RSS links from a given URL and returns them as JSON."""
    target_url = request.args.get('url')
    headers = {
        'User-Agent': (
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) '
            'AppleWebKit/537.36 (KHTML, like Gecko) '
            'Chrome/91.0.4472.114 Safari/537.36'
        )
    }

    response = requests.get(target_url, headers=headers, timeout=100)

    soup = BeautifulSoup(response.text, 'html.parser')

    rss_links = []
    for rss_link in soup.find_all('link', {'type': ['application/rss+xml',
                                                    'application/atom+xml']}):
        if 'href' in rss_link.attrs:
            rss_links.append({
                'title': rss_link.get('title', ''),
                'link': rss_link['href']
            })

    return json.dumps({'total_links': len(rss_links), 'links': rss_links})

if __name__ == "__main__":
    app.run(debug=True)
