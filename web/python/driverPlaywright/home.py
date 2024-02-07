import json
import os
from .basePage import BasePage

class Home(BasePage):

    def __init__(self, page):
        super().__init__(page)
        self.challenging_dom_locator = 'text=Challenging DOM'
        self.constants = self.load_constants()

    @staticmethod
    def load_constants():
        # Assuming constants.json is in the testData folder at the root of your project
        current_directory = os.path.dirname(__file__)
        json_path = os.path.join(current_directory, '..', '..', 'testData', 'constants.json')
        with open(json_path, 'r') as file:
            return json.load(file)

    def go_to_heroku_home(self):
        self.navigate(self.constants['BASE_URL'])

    def go_to_dom_challenge(self):
        self.do_click(self.challenging_dom_locator)
        self.wait_for_url_to_contain('challenging_dom')
