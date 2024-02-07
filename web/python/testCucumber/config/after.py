from behave import after
import re

# Playwright hook
@after(u'@playwright')
def after_playwright_scenario(context, scenario):
    if hasattr(context, "context"):
        # Sanitize scenario name to use in directory name
        scenario_name = re.sub(r'[^a-zA-Z0-9]', '_', scenario.name)
        context.context.tracing.stop(path=f'./testArtifacts/trace/{scenario_name}')

    if hasattr(context, "browser"):
        context.browser.close()

# Selenium hook
@after(u'@selenium')
def after_selenium_scenario(context, scenario):
    if hasattr(context, "driver"):
        context.driver.quit()
