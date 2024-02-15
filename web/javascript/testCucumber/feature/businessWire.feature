Feature: Business Wire Interview

  @playwright @business-wire
  Scenario: Apply-To-Bussines-Wire
    Given I go to the Business Wire careers page
    When I apply to the SDET position
    Then I get the business wire job
