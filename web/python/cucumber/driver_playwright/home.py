import json
import os
from .base_page import BasePage

class Home(BasePage):

    def __init__(self, page):
        super().__init__(page)
        self.page = page
        self.challenging_dom_locator = self.page.get_by_text('Challenging DOM')

    async def load_constants(self):
        current_directory = os.path.dirname(__file__)
        json_path = os.path.join(current_directory, '..', '..', '..', '..', 'testData', 'constants.json')
        with open(json_path, 'r') as file:
            return json.load(file)

    async def go_to_heroku_home(self):
        self.constants = await self.load_constants()
        await self.navigate(self.constants['baseUrl'])

    async def go_to_dom_challenge(self):
        await self.do_click(self.challenging_dom_locator)
        await self.wait_for_url_to_contain('challenging_dom')
