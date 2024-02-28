Feature: tapcheck Interview

  @playwright @tapcheck
  Scenario: tapcheck Apply
    Given I apply to tapcheck
    When I fill out the tapcheck application
    Then I get the job at tapcheck
