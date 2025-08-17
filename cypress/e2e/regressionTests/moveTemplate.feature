Feature: Move template functionality

    Scenario: Validate that user can move template to any list
        Given The user navigated to board
        When Clicks on the template card
        And Clicks on drop down list with current list name
        And Clicks on List 
        And Chooses a list to move the template to
        And Clicks Move button
        Then The drop down list should have the new list name
        And The template card should be moved to the new list

