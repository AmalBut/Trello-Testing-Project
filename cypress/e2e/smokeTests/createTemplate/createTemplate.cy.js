/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtiles from "../../../support/datautiles.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import createTemplateActions from "../../../pageObjects/createTemplate/Actions.cy";
import createTemplateAssertions from "../../../pageObjects/createTemplate/Assertions.cy";

const datautiles = new dataUtiles();
const sharedAction = new sharedActions();
const createTemplateAction = new createTemplateActions();
const createTemplateAssertion = new createTemplateAssertions();
const templateTitle = "Amal Template";

let boardId , boardUrl; 

before(()=>{
    datautiles.createBoard("AmalBoard").then((boardResp)=>{
        boardUrl = boardResp.body.url;
        boardId = boardResp.body.id;
    })

    cy.loginToTrello();
})

Given('The user navigated to board',()=>{
    sharedAction.openUrl(boardUrl);
})

When('Clicks on Create from template icon',()=>{
    createTemplateAction.clickOnCreateFromTemplateIcon();
})

When('Clicks on Create a new template button',()=>{
    createTemplateAction.clickOnCreateANewTemplateButton();
})

When('Types template title',()=>{
    createTemplateAction.typeTemplateTitle(templateTitle);
})

When('Clicks on Add button',()=>{
    createTemplateAction.clickOnAddButton();
})

Then('The template should be visible on the board',()=>{
    createTemplateAssertion.checkTemplateIsVisibleOnBoard(templateTitle);
})

Then('The template pop up should be opened',()=>{
    createTemplateAssertion.checkTemplatePopUpIsOpened(templateTitle);
})

after(()=>{
    datautiles.deleteBoard(boardId);
})