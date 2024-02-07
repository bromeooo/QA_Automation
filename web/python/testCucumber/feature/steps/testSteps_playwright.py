from behave import given, when, then
from driverPlaywright.home import Home 
#from dom_challenge import DomChallenge  # Assuming you have a DomChallenge class in dom_challenge.py
import assertpy

challenge_text_init = None
final_url = None

@given('the user goes to Challenging DOM with playwright')
def step_impl(context):
    global challenge_text_init
    home = Home(context.page)
    home.go_to_heroku_home()
    home.go_to_dom_challenge()

@when('the user clicks the success button and the first edit with playwright')
def step_impl(context):
    global challenge_text_init, final_url
    dom_challenge = DomChallenge(context.page)
    challenge_text_init = dom_challenge.get_answer_value()
    dom_challenge.press_success_button()
    final_url = dom_challenge.press_and_validate_first_edit()

@then('the user performed the actions correctly with playwright')
def step_impl(context):
    dom_challenge = DomChallenge(context.page)
    challenge_text_final = dom_challenge.get_answer_value()

    # Assertion to check that the initial and final challenge texts are different
    assertpy.assert_that(challenge_text_init).is_not_equal_to(challenge_text_final, 'The challenge text should change after the actions')

    # Assertion to check that the final URL contains "edit"
    assertpy.assert_that(final_url).contains('edit', 'The final URL should contain "edit"')
