function scrapeRSS() {
    const urlInput = document.getElementById('urlInput').value;
    const loadingContainer = document.getElementById('loadingContainer');
    const resultContainer = document.getElementById('resultContainer');

    loadingContainer.style.display = 'block';
    resultContainer.style.display = 'none';


    setTimeout(() => {
        const rssLink = 'https://example.com/rss';
        const loadingContainer = document.getElementById('loadingContainer');
        const resultContainer = document.getElementById('resultContainer');
        const resultContent = document.getElementById('resultContent');
        loadingContainer.style.display = 'none';
        resultContainer.style.display = 'block';
        resultContent.textContent = rssLink;
    }, 3000);
}

function copyToClipboard() {
    const rssLink = document.getElementById('resultContent').textContent;
    navigator.clipboard.writeText(rssLink);
    alert('RSS link copied to clipboard!');
}
