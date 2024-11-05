Feature: Flex Interview

  @playwright @flex
  Scenario: Flex Apply
    Given I apply to flex
    When I fill out the flex application
    Then I get the job at flex
