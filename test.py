"""This module contains the test cases for the engine."""
import unittest
from engine import app

class TestEngine(unittest.TestCase):
    """Test cases for the engine."""
    def setUp(self):
        self.app = app.test_client()

    def test_scrape_rss(self):
        """Test the scrape_rss endpoint."""
        url = input("Please enter the URL to test: ")
        response = self.app.get(f'/scrape_rss?url={url}')
        self.assertEqual(response.status_code, 200)

if __name__ == '__main__':
    unittest.main()
