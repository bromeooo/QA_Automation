from behave import given , when, then, use_step_matcher
from behave.api.async_step import async_run_until_complete
from driver_playwright.home import Home 
from driver_playwright.dom_challenge import DomChallenge
import assertpy
import pdb

use_step_matcher("re")
challenge_text_init = None
final_url = None

@given('the user goes to Challenging DOM with playwright')
@async_run_until_complete
async def step_impl(context):
    global challenge_text_init
    home = Home(context.page)
    await home.go_to_heroku_home()
    await home.go_to_dom_challenge()

@when('the user clicks the success button and the first edit with playwright')
@async_run_until_complete
async def step_impl(context):
    global challenge_text_init, final_url
    # pdb.set_trace() ## future breakpoint
    dom_challenge = DomChallenge(context.page)
    challenge_text_init = await dom_challenge.get_answer_value()
    await dom_challenge.press_success_button()
    final_url = await dom_challenge.press_and_validate_first_edit()

@then('the user performed the actions correctly with playwright')
@async_run_until_complete
async def step_impl(context):
    dom_challenge = DomChallenge(context.page)
    challenge_text_final = await dom_challenge.get_answer_value()

    # Assertion to check that the initial and final challenge texts are different
    assertpy.assert_that(challenge_text_init, description='The challenge text should change after the actions').is_not_equal_to(challenge_text_final)

    # Assertion to check that the final URL contains "edit"
    assertpy.assert_that(final_url, description='The final URL should contain "edit"').contains('edit')


