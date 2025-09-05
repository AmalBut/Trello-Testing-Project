/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtiles from "../../../support/datautiles.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import hideTemplateActions from "../../../pageObjects/hideTemplate/Actions.cy";
import hideTemplateAssertions from "../../../pageObjects/hideTemplate/Assertions.cy";

const datautiles = new dataUtiles();
const sharedAction = new sharedActions();
const hideTemplateAction = new hideTemplateActions();
const hideTemplateAssertion = new hideTemplateAssertions();
const templateName = "My template";

let boardId , boardUrl, listId, templateId, listName, newList; 

before(()=>{
   datautiles.createBoard("AmalBoard").then((boardResp)=>{
        boardUrl = boardResp.body.url;
        boardId = boardResp.body.id;
   
        datautiles.getList(boardId).then((listResp)=>{
            listId = listResp.body[0].id;
            listName = listResp.body[0].name; 

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

When('Right clicks on template card',()=>{
    hideTemplateAction.rightClickOnTemplateCard();
})

When('Selects Hide from list option',()=>{
    hideTemplateAction.selectHideOption();
})

Then('The template should be removed from the list',()=>{
    hideTemplateAssertion.checkTemplateRemovedFromList(templateName,listName);
})
Then('The template should not be deleted',()=>{
    hideTemplateAssertion.checkTemplateIsNotDeleted(templateId);
})

after(()=>{
    datautiles.deleteBoard(boardId);
})