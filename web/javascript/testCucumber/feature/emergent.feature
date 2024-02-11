Feature: emergent test

  @playwright @emergent
  Scenario: Sunrun Apply
    Given I go to the qa challenge
    When I fill out the contact form
    Then the contact form is submitted 
