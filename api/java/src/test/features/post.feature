@posts
Feature: Post Item Management

  Scenario: Listing all Post Items
    Given the posts endpoint is available
    When I request all Post items
    Then all Post items should be displayed

  Scenario: Adding a New Post Item
    Given the posts endpoint is available
    When I add a new Post item with title "Testing" and body "Testing API example"
    Then the new Post item should be added successfully

  Scenario: Deleting a Post Item
    Given the posts endpoint is available
    When I delete the Post item with id 1
    Then the Post item should be deleted successfully
