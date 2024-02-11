from driver_playwright.base_page import BasePage

class JobPost(BasePage):
    def __init__(self, page, context):
        super().__init__(page)
        self.page = page
        self.context = context 
        self.apply_now = self.page.get_by_text('Apply Now')

    async def go_to_application(self):
        await self.navigate('https://aexp.eightfold.ai/careers/job/20631578?')
        await self.do_click(self.apply_now)
        ## now 2 tags
        await self.page.wait_for_timeout(1000)
        # Get the newly opened page
        all_pages = self.context.pages
        new_page = all_pages[-1] if all_pages else None
        return new_page
