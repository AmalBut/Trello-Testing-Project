/// <reference types ="cypress" />

import { Given , When , Then } from "cypress-cucumber-preprocessor/steps";
import dataUtiles from "../../../support/datautiles.cy";
import createCardAssertions from "../../../pageObjects/createCard/Assertions.cy";
import deleteCardActions from "../../../pageObjects/deleteCard/Actions.cy";
import sharedActions from "../../../pageObjects/shared/Actions.cy";
import deleteCardAssertions from "../../../pageObjects/deleteCard/Assertions.cy";

const datautiles = new dataUtiles();
const  sharedAction= new sharedActions();
const deleteCardAction = new deleteCardActions();
const deleteCardAssertion = new deleteCardAssertions();
const cardAssertion = new createCardAssertions();
const cardName = "Amal Card";

let boardId , boardUrl, listId, cardUrl, cardId, listName; 

before(()=>{
    datautiles.createBoard("AmalBoard").then((boardResp)=>{
        boardUrl = boardResp.body.url;
        boardId = boardResp.body.id;
   
        datautiles.getList(boardId).then((listResp)=>{
            listId = listResp.body[0].id;
            listName = listResp.body[0].name;

            datautiles.createCard(listId,cardName).then((cardResp)=>{
                cardUrl = cardResp.body.shortUrl;
                cardId = cardResp.body.id;
            })
        })
   
    })

    cy.loginToTrello();
})

Given('The user navigated to card',()=>{
    sharedAction.openUrl(cardUrl);
})

When('Clicks on Actions icon',()=>{
   deleteCardAction.clickOnActionsIcon();
})

When('Clicks on {string} option',(actionOption)=>{
    deleteCardAction.clickOnOption(actionOption);
})

When('Clicks on Delete confimation button',()=>{
    deleteCardAction.clickConfirmDelete();
})

Then('The card should be closed',()=>{
    deleteCardAssertion.checkCardClosed();
})

Then('The card should be deleted successfully',()=>{
    deleteCardAssertion.checkCardIsDeleted(cardId);
})

Then('The card should be removed from the list',()=>{
    deleteCardAssertion.checkTemplateRemovedFromList(cardName,listName);
})

after(()=>{
    datautiles.deleteBoard(boardId);
})
