Feature: Linqto Interview

  @playwright @linqto
  Scenario: linqto Apply
    Given I apply to linqto
    When I fill out the linqto application
    Then I get the job at linqto
