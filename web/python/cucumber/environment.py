from behave import fixture, use_fixture, use_step_matcher
from pathlib import Path
from playwright.async_api import async_playwright
from behave.api.async_step import async_run_until_complete
from selenium import webdriver
import chromedriver_autoinstaller
import pdb

use_step_matcher("re")

# Set default timeout for all scenarios
def before_all(context):
    pass

@fixture
def selenium_webdriver(context):
    # -- SETUP-FIXTURE PART:
    context.driver = webdriver.Chrome()
    context.driver.set_page_load_timeout(30)
    context.driver.maximize_window()
    yield context.driver
    context.driver.quit()

# create playwright chromium fixture
@fixture
async def playwright_browser_chrome(context):
    start = await async_playwright().start()
    browser = await start.chromium.launch(
        headless=False,
        slow_mo=1000,
        channel="chrome",
    )
    context.browser_context = await browser.new_context()
    await context.browser_context.tracing.start(screenshots=True, snapshots=True)
    context.page = await context.browser_context.new_page() 
    context.page.set_default_timeout(30000)
    return context.page

# Playwright hook - Before scenario
@async_run_until_complete
async def before_scenario(context, scenario):
    if "playwright" in scenario.tags:
        # Clear old traces
        trace_dir = Path("./testArtifacts/trace")
        if trace_dir.exists():
            for file in trace_dir.iterdir():
                file.unlink()

        # Apply the playwright_browser_chrome fixture to the scenario
        await use_fixture(playwright_browser_chrome, context)

# Playwright hook - After scenario
@async_run_until_complete
async def after_scenario(context, scenario):
    if "playwright" in scenario.tags:
        if hasattr(context, "page"):
            await context.page.close()
        if hasattr(context, "browser_context"):
            await context.browser_context.tracing.stop(path=str(Path("./test_artifacts/trace") / f"{scenario.name}.trace"))  # Save the trace as a .trace file
            await context.browser_context.close()  # Close the browser context

# Selenium before hook
def before_scenario(context, scenario):
    if "selenium" in scenario.tags:
        use_fixture(selenium_webdriver, context)

# Selenium after hook
def after_scenario(context, scenario):
    if "selenium" in scenario.tags and hasattr(context, 'selenium_driver'):
        context.selenium_driver.quit()

# After all scenarios
def after_all(context):
    print("Executing after all scenarios")
