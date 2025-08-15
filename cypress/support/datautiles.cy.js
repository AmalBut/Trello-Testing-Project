import { APIKey,APIToken } from "../support/constants.cy";
class dataUtiles {

    createBoard = (boardName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
    }

    deleteBoard = (boardId)=>{
        return cy.request("DELETE",`https://api.trello.com/1/boards/${boardId}?key=${APIKey}&token=${APIToken}`)
    }
    
    getList = (boardId)=>{
        return cy.request(`https://api.trello.com/1/boards/${boardId}/lists?key=${APIKey}&token=${APIToken}`)
    }

    createCard = (listId,cardName)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?idList=${listId}&name=${cardName}&key=${APIKey}&token=${APIToken}`)
    }

    getCard = (cardId)=>{
        return cy.request({url:`https://api.trello.com/1/cards/${cardId}?key=${APIKey}&token=${APIToken}`, failOnStatusCode: false})
    }

    createTemplate = (listId,templateName)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?idList=${listId}&isTemplate=true&name=${templateName}&key=${APIKey}&token=${APIToken}`)
    }
}
export default dataUtiles;