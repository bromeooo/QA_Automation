Feature: Deck of Cards Blackjack Game
  
    @cards
  Scenario: Dealing cards and checking for Blackjack
    Given the Deck of Cards API is up
    And a new shuffled deck is created
    When three cards are dealt to player one
    And three cards are dealt to player two
    Then check if any player has Blackjack
