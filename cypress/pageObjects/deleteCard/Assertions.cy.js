import dataUtiles from "../../support/datautiles.cy";
const datautiles = new dataUtiles();

class deleteCardAssertions{
    checkCardClosed(){
        cy.findByTestId("card-back-name").should("not.be.exist");
        return this;
    }

    checkTemplateRemovedFromList(cardName,listName){
        cy.contains("[data-testid=list-header]", listName)
        .siblings("[data-testid='list-cards']")
        .contains("li", cardName)
        .and('not.exist');
        return this;
    }

    checkCardIsDeleted(cardId){
        cy.intercept("DELETE",`https://trello.com/1/cards/${cardId}`).as("deleted");
        cy.wait("@deleted");
        datautiles.getCard(cardId).then((resp)=>{
            expect(resp.status).to.eq(404);
        })
        return this;
    }
}
export default deleteCardAssertions;