from driver_playwright.base_page import BasePage
import pdb


class FillJob(BasePage):
    def __init__(self, page):
        super().__init__(page)
        self.page = page

        # sign in
        self.aknowledge = self.page.locator('[title="I Agree"]')
        self.no_account = self.page.locator('[value="Continue without an Account"]')
        self.account_email = self.page.locator(
            '[name="dialogTemplate-dialogForm-login-name1"]'
        )
        self.account_password = self.page.locator(
            '[name="dialogTemplate-dialogForm-login-password"]'
        )
        self.sign_in = self.page.locator('[value="Sign In"]').first

        # resume
        self.no_resume_click = self.page.locator(
            '[name="editTemplateMultipart-editForm-content-ftf-saveContinueCmdBottom"]'
        )

        # Contact Information
        self.job_notification_checkbox = (
            self.page.get_by_text("Job Notification")
            .locator("../..")
            .locator("[type='checkbox']")
        ) # this locator showcases the power of playwright 
        self.no_resume_click = self.page.locator(
            '[name="editTemplateMultipart-editForm-content-ftf-saveContinueCmdBottom"]'
        )
        self.first_name = self.page.locator(
            '[name="eet-ef-content-ftf-gp-j_id_id16pc9-page_2-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_FirstName"]'
        )
        self.last_name = self.page.locator(
            '[name="et-ef-content-ftf-gp-j_id_id16pc9-page_2-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_LastName"]'
        )
        self.street_address = self.page.locator(
            '[name="et-ef-content-ftf-gp-j_id_id16pc9-page_2-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_Address"]'
        )
        self.zip = self.page.locator(
            '[name="et-ef-content-ftf-gp-j_id_id16pc9-page_2-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_ZipCode"]'
        )
        self.city = self.page.locator(
            '[name="et-ef-content-ftf-gp-j_id_id16pc9-page_2-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_City"]'
        )
        self.phone = self.page.locator(
            '[name="et-ef-content-ftf-gp-j_id_id16pc9-page_2-cpi-cfrmsub-frm-dv_cs_candidate_personal_info_HomePhone"]'
        )


    async def continue_no_account(self):
        await self.page.set_viewport_size({"width": 1640, "height": 1480})
        await self.do_click(self.aknowledge)
        await self.send_keys(self.account_email, "btromero")
        await self.send_keys(self.account_password, "1qaz!QAZ")
        await self.do_click(self.sign_in)
        await self.page.wait_for_load_state("networkidle")

    # async def no_resume(self):
    #     await self.do_click(self.no_resume_click)

    async def fill_exp(self):

        
        # Click on the job notification checkbox or perform other actions as needed
        await self.do_click(self.job_notification_checkbox)
        await self.send_keys(self.first_name, "Brian")
        await self.send_keys(self.last_name, "Romero")
        await self.send_keys(self.street_address, "18 Not Real Street")
        await self.send_keys(self.city, "Chandler")
        await self.send_keys(self.zip, "85225")
        pdb.set_trace()

