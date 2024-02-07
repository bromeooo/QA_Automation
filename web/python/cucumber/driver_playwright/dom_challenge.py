import re
from .base_page import BasePage


class DomChallenge(BasePage):
    def __init__(self, page):
        super().__init__(page)
        self.page = page
        self.green_success_button = self.page.locator('[class="button success"]')
        self.first_edit_button_locator = (
            self.page.get_by_text("Phaedrum0").locator("..").get_by_text("edit")
        )

    async def get_answer_value(self):
        # Evaluate the script in the context of the page
        script_content = await self.page.evaluate('''() => {
            const scripts = Array.from(document.getElementsByTagName('script'));
            const targetScript = scripts.find(s => s.textContent.includes('Answer:'));
            return targetScript ? targetScript.textContent : '';
        }''')

        # Use regular expression to extract the answer
        match = re.search('Answer:\s*(\d+)', script_content)
        answer = match.group(1) if match else 'Answer not found'
        return answer

    async def press_success_button(self):
        await self.do_click(self.green_success_button)

    async def press_and_validate_first_edit(self):
        await self.do_click(self.first_edit_button_locator)
        await self.wait_for_url_to_contain("edit")
        return self.page.url
