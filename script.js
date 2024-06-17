function scrapeRSS() {
    const urlInput = document.getElementById('urlInput').value;
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:5000/scrape_rss?url=' + encodeURIComponent(urlInput), true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const rssOutput = document.getElementById('rssOutput');
            rssOutput.value = JSON.stringify(response.rss_links, null, 2);
        } else {
            console.log('Error:', xhr.status, xhr.statusText);
        }
    };
    xhr.send();
}

function displayRSSLinks(response) {
    const rssOutput = document.getElementById('rssOutput');
    rssOutput.innerHTML = '';  // Clear previous content
    if ('rss_links' in response && response['rss_links'].length > 0) {
        response['rss_links'].forEach(function (link) {
            const linkElement = document.createElement('p');
            linkElement.textContent = link['title'] + ': ' + link['link'];
            rssOutput.appendChild(linkElement);
        });
    } else {
        rssOutput.textContent = 'No RSS links found.';
    }
}
