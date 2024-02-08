Feature: Sunrun Interview

  @playwright @sunrun
  Scenario: Sunrun Apply
    Given I apply to Sunrun
    When I fill out the workday form
    Then I get the job
