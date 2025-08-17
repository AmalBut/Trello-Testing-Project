/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtiles from "../../../support/datautiles.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import moveTemplateActions from "../../../pageObjects/moveTemplate/Actions.cy";
import moveTemplateAssertions from "../../../pageObjects/moveTemplate/Assertions.cy";

const datautiles = new dataUtiles();
const sharedAction = new sharedActions();
const moveTemplateAction = new moveTemplateActions();
const moveTemplateAssertion = new moveTemplateAssertions();
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

When('Clicks on the template card',()=>{
    moveTemplateAction.clickOnTemplateCard(templateName);
})

When('Clicks on drop down list with current list name',()=>{
    cy.intercept("POST",`https://trello.com/1/cards/${templateId}/markAsViewed`).as("openTemp");
    cy.wait("@openTemp");
    moveTemplateAction.clickOnDropDownList(listName);
})

When('Clicks on List',()=>{
    moveTemplateAction.clickOnList(listName);
})

When('Chooses a list to move the template to',()=>{
    moveTemplateAction.chooseListOption().then((newListName )=> {
         newList = newListName; 
        });
})

When('Clicks Move button',()=>{
    moveTemplateAction.clickMoveButton();
})

Then('The drop down list should have the new list name',()=>{
    moveTemplateAssertion.checkDropDownListSelection(newList);
})

Then('The template card should be moved to the new list',()=>{
    moveTemplateAssertion.checkTemplateIsMovedToNewList(newList,templateName);
})

after(()=>{
    datautiles.deleteBoard(boardId);
})