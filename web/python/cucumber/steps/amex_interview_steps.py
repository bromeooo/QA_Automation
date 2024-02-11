from behave import given, when, then
from behave.api.async_step import async_run_until_complete
from driver_playwright.amex_interview.job_post import JobPost
from driver_playwright.amex_interview.fill_job import FillJob

section_header = None  # Global variable declaration

@given('I open the job posting')
@async_run_until_complete
async def step_impl(context):
    job_post = JobPost(context.page, context.browser_context)
    ## new tab launched. new_page will be worked with. 
    new_page = await job_post.go_to_application()
    context.page = new_page

@when('I fill out the job application')
@async_run_until_complete
async def step_impl(context):
    global section_header  
    fill_job = FillJob(context.page)
    await fill_job.continue_no_account()
    section_header = await fill_job.fill_exp()

@then('I get the job')
def step_impl(context):
    global section_header 
    assert section_header == "Contact Information"
