import json
import os
from selenium.webdriver.common.by import By
from .base_page import BasePage

class Home(BasePage):

    def __init__(self, driver):
        super().__init__(driver)
        self.driver = driver
        self.challenging_dom_locator = (By.LINK_TEXT, 'Challenging DOM')

    def load_constants(self):
        current_directory = os.path.dirname(__file__)
        json_path = os.path.join(current_directory, '..', '..', '..', '..', 'testData', 'constants.json')
        with open(json_path, 'r') as file:
            return json.load(file)

    def go_to_heroku_home(self):
        self.constants = self.load_constants()
        self.navigate(self.constants['baseUrl'])

    def go_to_dom_challenge(self):
        self.do_click(self.driver.find_element(*self.challenging_dom_locator))
        self.wait_for_url_to_contain('challenging_dom')
