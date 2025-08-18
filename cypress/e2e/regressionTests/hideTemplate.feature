Feature: Hide Template functionality

    Scenario: Validate that the user can hide a template from list
        Given The user navigated to board
        When Right clicks on template card
        And Selects Hide from list option
        Then The template should be removed from the list
        And The template should not be deleted
