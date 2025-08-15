Feature: Create template functionality

    Scenario: Validate that user can create a new template
        Given The user navigated to board
        When Clicks on Create from template icon
        And Clicks on Create a new template button
        And Types template title
        And Clicks on Add button
        Then The template should be visible on the board
        And The template pop up should be opened