from behave import given, when, then, use_step_matcher
from driver_selenium.home import Home 
from driver_selenium.dom_challenge import DomChallenge 
import assertpy

use_step_matcher("re")
challenge_text_init = None
final_url = None

@given('the user goes to Challenging DOM with selenium')
def step_impl(context):
    try:
        home = Home(context.driver)
        home.go_to_heroku_home()
        home.go_to_dom_challenge()
    except Exception as e:
        print(f"Error: {e}")

@when('the user clicks the success button and the first edit with selenium')
def step_impl(context):
    global challenge_text_init, final_url
    dom_challenge = DomChallenge(context.driver)
    challenge_text_init = dom_challenge.get_answer_value()
    dom_challenge.press_success_button()
    final_url = dom_challenge.press_and_validate_first_edit()

@then('the user performed the actions correctly with selenium')
def step_impl(context):
    dom_challenge = DomChallenge(context.driver)
    challenge_text_final = dom_challenge.get_answer_value()

    # Assertion to check that the initial and final challenge texts are different
    assertpy.assert_that(challenge_text_init, description='The challenge text should change after the actions').is_not_equal_to(challenge_text_final)

    # Assertion to check that the final URL contains "edit"
    assertpy.assert_that(final_url, description='The final URL should contain "edit"').contains('edit')
