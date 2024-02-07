from playwright.sync_api import Page, ElementHandle, expect

class BasePage:
    """
    BasePage class for common page actions.
    """

    def __init__(self, page: Page):
        self.page = page
        self.default_timeout = 30000  # Default timeout in milliseconds

    async def do_click(self, element: ElementHandle, timeout=None):
        timeout = timeout or self.default_timeout
        await element.wait_for(state="visible")
        await element.hover()
        await element.click()

    async def send_keys(self, element: ElementHandle, text, timeout=None):
        timeout = timeout or self.default_timeout
        await element.wait_for(state="visible")
        await element.fill(text)

    async def navigate(self, url):
        await self.page.goto(url, wait_until='domcontentloaded')

    async def wait_for_url_to_contain(self, text):
        await self.page.wait_for_url(f"**/*{text}*", wait_until='domcontentloaded')
