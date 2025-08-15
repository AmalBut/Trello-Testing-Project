Feature: Update Template functionality

    Scenario: Validate that the user can update template name
        Given The user navigated to board
        And Clicks on the template card
        And Clicks on the template name
        And Changes the template name and clicks enter
        And Closes the template card
        Then The template name should be updated on the board