from selenium.webdriver.remote.webdriver import WebDriver
from selenium.webdriver.remote.webelement import WebElement
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import TimeoutException

class BasePage:
    """
    BasePage class for common page actions using Selenium.
    """

    def __init__(self, driver: WebDriver, default_timeout: int = 30):
        self.driver = driver
        self.default_timeout = default_timeout  # Default timeout in seconds

    def do_click(self, element: WebElement, timeout=None):
        timeout = timeout or self.default_timeout
        WebDriverWait(self.driver, timeout).until(EC.visibility_of(element))
        ActionChains(self.driver).move_to_element(element).click().perform()

    def send_keys(self, element: WebElement, text, timeout=None):
        timeout = timeout or self.default_timeout
        WebDriverWait(self.driver, timeout).until(EC.visibility_of(element))
        element.clear()
        element.send_keys(text)

    def navigate(self, url):
        self.driver.get(url)

    def wait_for_url_to_contain(self, text, timeout=None):
        timeout = timeout or self.default_timeout
        try:
            WebDriverWait(self.driver, timeout).until(EC.url_contains(text))
        except TimeoutException:
            raise Exception(f"URL did not contain the text '{text}' within {timeout} seconds")

