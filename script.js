function scrapeRSS() {
    const urlInput = document.getElementById('urlInput').value;
    fetch(`http://localhost:5000/scrape_rss?url=${encodeURIComponent(urlInput)}`)
        .then(response => response.json())
        .then(data => {
            const outputArea = document.getElementById('outputArea');
            outputArea.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => console.error('Error:', error));
}