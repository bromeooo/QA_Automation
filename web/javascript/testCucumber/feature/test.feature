Feature: Test herokuapp UI

  @playwright
  Scenario: Playwright UI Test-JavaScript
    Given the user goes to Challenging DOM with playwright 
    When the user clicks the success button and the first edit with playwright
    Then the user performed the actions correctly with playwright

  @selenium
  Scenario: Selenium UI Test-JavaScript
    Given the user goes to Challenging DOM with selenium
    When the user clicks the success button and the first edit with selenium
    Then the user performed the actions correctly with selenium
