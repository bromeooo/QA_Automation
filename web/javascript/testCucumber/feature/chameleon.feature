Feature: Chameleon Interview

  @playwright @chameleon
  Scenario: Chameleon Apply
    Given I apply to Chameleon
    When I fill the application to Chameleon
    Then I get the job at Chameleon
