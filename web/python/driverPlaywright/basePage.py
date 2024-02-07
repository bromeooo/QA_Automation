from playwright.sync_api import Page

class BasePage:
    """
    BasePage class for common page actions.
    """

    def __init__(self, page: Page):
        self.page = page
        self.default_timeout = 30000  # Default timeout in milliseconds

    def do_click(self, selector, timeout=None):
        timeout = timeout or self.default_timeout
        element = self.page.wait_for_selector(selector, state="visible", timeout=timeout)
        element.hover()
        element.click()

    def send_keys(self, selector, text, timeout=None):
        timeout = timeout or self.default_timeout
        element = self.page.wait_for_selector(selector, state="visible", timeout=timeout)
        element.fill(text)

    def navigate(self, url):
        self.page.goto(url, wait_until='domcontentloaded')

    def wait_for_url_to_contain(self, text):
        self.page.wait_for_url(f"**/*{text}*", wait_until='domcontentloaded')
