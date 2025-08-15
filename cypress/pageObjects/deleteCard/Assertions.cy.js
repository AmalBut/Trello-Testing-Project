import dataUtiles from "../../support/datautiles.cy";
const datautiles = new dataUtiles();

class deleteCardAssertions{
    checkCardClosed(){
        cy.findByTestId("card-back-name").should("not.be.exist");
        return this;
    }

    checkCardRemoved(cardId){
        cy.intercept("DELETE",`https://trello.com/1/cards/${cardId}`).as("deleted");
        cy.wait("@deleted");
        datautiles.getCard(cardId).then((resp)=>{
            expect(resp.status).to.eq(404);
        })
        return this;
    }
}
export default deleteCardAssertions;