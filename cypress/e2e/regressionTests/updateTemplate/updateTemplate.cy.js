/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtiles from "../../../support/datautiles.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import updateTemplateActions from "../../../pageObjects/updateTemplate/Actions.cy";
import updateTemplateAssertions from "../../../pageObjects/updateTemplate/Assertions.cy";

const datautiles = new dataUtiles();
const sharedAction = new sharedActions();
const updateTemplateAction = new updateTemplateActions();
const updateTemplateAssertion = new updateTemplateAssertions();
const templateName = "My template";
const newTemplateName = "Amal template";


let boardId , boardUrl, listId, templateId; 

before(()=>{
   datautiles.createBoard("AmalBoard").then((boardResp)=>{
        boardUrl = boardResp.body.url;
        boardId = boardResp.body.id;
   
        datautiles.getList(boardId).then((listResp)=>{
            listId = listResp.body[0].id;

            datautiles.createTemplate(listId,templateName).then((cardResp)=>{
                templateId = cardResp.body.id;
            })
        })
   
    })
    cy.loginToTrello()
})

Given('The user navigated to board',()=>{
    sharedAction.openUrl(boardUrl);
})

When('Clicks on the template card',()=>{
    updateTemplateAction.clickOnTemplateCard(templateName);
})

When('Clicks on the template name',()=>{
    cy.intercept("POST",`https://trello.com/1/cards/${templateId}/markAsViewed`).as("openTemp");
    cy.wait("@openTemp");
    updateTemplateAction.clickOnTemplateTitle();
})

When('Changes the template name and clicks enter',()=>{
    updateTemplateAction.changeTemplateName(newTemplateName);
})

When('Closes the template card',()=>{
    updateTemplateAction.closeTemplateCard();
})

Then('The template name should be updated on the board',()=>{
    updateTemplateAssertion.checkTemplateNameIsUpdated(newTemplateName);
})

after(()=>{
    datautiles.deleteBoard(boardId);
})