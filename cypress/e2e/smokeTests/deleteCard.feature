Feature: Delete Card functionality

    Scenario: Validate that the user can delete an existing card
        Given The user navigated to card
        When Clicks on Actions icon
        And Clicks on "Archive" option
        And Clicks on "Delete" option
        And Clicks on Delete confimation button
        Then The card should be closed
        Then The card should be removed from the board successfully