Feature: Test herokuapp UI

  @test @playwright 
  Scenario: Playwright UI Test
    Given the user goes to Challenging DOM
    When the user clicks the success button and the first edit
    Then the user performed the actions correctly 
