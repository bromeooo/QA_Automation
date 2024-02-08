import re
from .base_page import BasePage

class DomChallenge(BasePage):
    def __init__(self, driver):
        super().__init__(driver)
        self.driver = driver
        self.green_success_button = (By.CSS_SELECTOR, '[class="button success"]')
        self.first_edit_button_locator = (By.XPATH, "//td[contains(text(),'Phaedrum0')]/following-sibling::td/a[contains(text(),'edit')]")

    def get_answer_value(self):
        # Evaluate the script in the context of the page
        script_content = self.driver.execute_script(
            "const scripts = Array.from(document.getElementsByTagName('script'));"
            "const targetScript = scripts.find(s => s.textContent.includes('Answer:'));"
            "return targetScript ? targetScript.textContent : '';"
        )

        # Use regular expression to extract the answer
        match = re.search('Answer:\s*(\d+)', script_content)
        answer = match.group(1) if match else 'Answer not found'
        return answer

    def press_success_button(self):
        self.do_click(self.driver.find_element(*self.green_success_button))

    def press_and_validate_first_edit(self):
        self.do_click(self.driver.find_element(*self.first_edit_button_locator))
        self.wait_for_url_to_contain("edit")
        return self.driver.current_url
