from behave import fixture, use_fixture, use_step_matcher
from pathlib import Path
from playwright.async_api import async_playwright
from behave.api.async_step import async_run_until_complete
from selenium import webdriver
import chromedriver_autoinstaller
from asyncio import get_event_loop
import pdb

use_step_matcher("re")

# Set default timeout for all scenarios
def before_all(context):
    pass

@fixture
def selenium_webdriver(context):
    chromedriver_autoinstaller.install()  # Ensure chromedriver is installed and updated
    context.driver = webdriver.Chrome()
    context.driver.set_page_load_timeout(30)
    context.driver.maximize_window()
    yield context.driver
    context.driver.quit()

# Create playwright chromium fixture
@fixture
async def playwright_browser_chrome(context):
    start = await async_playwright().start()
    browser = await start.chromium.launch(
        headless=False,
        slow_mo=500,
        channel="chrome",
    )
    context.browser_context = await browser.new_context()
    await context.browser_context.tracing.start(screenshots=True, snapshots=True)
    context.page = await context.browser_context.new_page()
    context.page.set_default_timeout(30000)
    # No need to return context.page, it's already set in context

# Async hook for Playwright
@async_run_until_complete
async def before_scenario_playwright(context, scenario):
    trace_dir = Path("./testArtifacts/trace")
    if trace_dir.exists():
        for file in trace_dir.iterdir():
            file.unlink()
    await use_fixture(playwright_browser_chrome, context)

@async_run_until_complete
async def after_scenario_playwright(context, scenario):
    if hasattr(context, "page"):
        await context.page.close()
    if hasattr(context, "browser_context"):
        await context.browser_context.tracing.stop(path=str(Path("./test_artifacts/trace") / f"{scenario.name}.trace"))
        await context.browser_context.close()

# Sync hook for Selenium
def before_scenario_selenium(context, scenario):
    use_fixture(selenium_webdriver, context)

def after_scenario_selenium(context, scenario):
    if hasattr(context, 'driver'):
        context.driver.quit()

def before_scenario(context, scenario):
    loop = get_event_loop()
    if "playwright" in scenario.tags:
        before_scenario_playwright(context, scenario)
        print("Playwright Chromium Launched")
    if "selenium" in scenario.tags:
        before_scenario_selenium(context, scenario)
        print("Selenium Chrome Driver Launched")

def after_scenario(context, scenario):
    loop = get_event_loop()
    if "playwright" in scenario.tags:
        after_scenario_playwright(context, scenario)
    if "selenium" in scenario.tags:
        after_scenario_selenium(context, scenario)
