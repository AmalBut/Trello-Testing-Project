/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import createBoardActions from "../../../pageObjects/createBoard/Actions.cy";
import createBoardAssertions from "../../../pageObjects/createBoard/Assertions.cy";

const createBoardAction = new createBoardActions();
const createBoardAssertion = new createBoardAssertions();

const boardTitle = "First Board cy";

Given("The user login to trello website",()=>{
    cy.loginToTrello()
})

When("Clicks on create button in navbar",()=>{
    createBoardAction.clickOnCreateButtonInNavBar()
})

When("Choose create board option",()=>{
    createBoardAction.clickOnCreateBoardButton()
})

When("Types board name in board title field",()=>{
    createBoardAction.typeBoardNameInBoardTitleInputField(boardTitle)
})

When("Clicks on create button",()=>{
    createBoardAction.clickOnCreateButton()
})

Then("The board should be created successfully",()=>{
    createBoardAssertion.checkBoardNameIsContain(boardTitle)
})