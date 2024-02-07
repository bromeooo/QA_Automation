import os
from pathlib import Path
from playwright.sync_api import sync_playwright
from selenium import webdriver
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager
from behave import before, use_step_matcher
from selenium.webdriver.firefox.service import Service as FirefoxService
from webdriver_manager.firefox import GeckoDriverManager

DEFAULT_TIMEOUT = 120000
use_step_matcher("re")

# Set default timeout for all scenarios
def before_all(context):
    print('hi')
    context.default_timeout = DEFAULT_TIMEOUT

# Playwright hook
@before(u'@playwright')
def before_playwright_scenario(context):
    # Clear old traces
    trace_dir = Path('./testArtifacts/trace')
    if trace_dir.exists():
        for file in trace_dir.iterdir():
            file.unlink()

    playwright = sync_playwright().start()
    context.browser = playwright.chromium.launch(headless=False)
    context.context = context.browser.new_context(
        default_navigation_timeout=30000,
        default_timeout=30000,
    )
    context.page = context.context.new_page()
    context.context.tracing.start(screenshots=True, snapshots=True)

    print('Launching Playwright Chromium Browser')

# Selenium hook
@before(u'@selenium')
def before_selenium_scenario(context):
    # Define your Selenium WebDriver settings here
    context.driver = webdriver.Chrome(service=ChromeService(ChromeDriverManager().install()))
    # Alternatively, for Firefox:
    # context.driver = webdriver.Firefox(service=FirefoxService(GeckoDriverManager().install()))

    print('Launching Selenium WebDriver')
