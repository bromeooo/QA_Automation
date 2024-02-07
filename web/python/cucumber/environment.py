from behave import fixture, use_fixture, use_step_matcher
import os
from pathlib import Path
from playwright.async_api import async_playwright
from behave.api.async_step import async_run_until_complete

DEFAULT_TIMEOUT = 120000
use_step_matcher("re")

# Set default timeout for all scenarios
def before_all(context):
    context.default_timeout = DEFAULT_TIMEOUT

# create playwright chromium fixture
@fixture
async def playwright_browser_chrome(context):
    start = await async_playwright().start()
    browser = await start.chromium.launch(
        headless=False,
        slow_mo=1000,
        channel="chrome",
    )
    context.browser_context = await browser.new_context()  # Create a new browser context
    await context.browser_context.tracing.start(screenshots=True, snapshots=True)  # Start tracing in the new context
    context.page = await context.browser_context.new_page()  # Create a new page in the context
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

# After all scenarios
def after_all(context):
    print("Executing after all scenarios")
