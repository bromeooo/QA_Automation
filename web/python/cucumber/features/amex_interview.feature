Feature: Amex Interview

  @playwright @amex
  Scenario: Playwright Amex Interview
    Given I open the job posting
    When I fill out the job application
    Then I get the job

