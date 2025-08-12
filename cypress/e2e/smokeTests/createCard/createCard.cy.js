/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtiles from "../../../support/datautiles.cy";
import createCardActions from "../../../pageObjects/createCard/Actions.cy";
import createCardAssertions from "../../../pageObjects/createCard/Assertions.cy";

const datautiles = new dataUtiles()
const cardAction = new createCardActions();
const cardAssertion = new createCardAssertions();
const cardName = "my card";

let boardId , boardUrl; 

before(()=>{
    datautiles.createBoard("RazanBoard").then((resp)=>{
        boardUrl = resp.body.url;
        boardId = resp.body.id
    })
    cy.loginToTrello()
})

Given('The user navigated to board',()=>{
    cardAction.openBoard(boardUrl)
})

When("Clicks on Add a card button",()=>{
    cardAction.clickOnAddACardButton();
})

When("Types card title in card title input field",()=>{
    cardAction.typeInCardTitleInputField(cardName)
})

When("Click on Add card button",()=>{
    cardAction.clickOnAddCardButton();
})

Then("The card should be created successfully",()=>{
    cardAssertion.checkListIsContainCard(cardName)
})

after(()=>{
    cy.wait(3000)
    datautiles.deleteBoard(boardId)
})