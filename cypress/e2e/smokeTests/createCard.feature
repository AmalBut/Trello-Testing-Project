Feature: Create Card functionality

    Scenario: Validate that the user can create a card
        Given The user navigated to board
        When Clicks on Add a card button
        And Types card title in card title input field
        And Click on Add card button
        Then The card should be created successfully
