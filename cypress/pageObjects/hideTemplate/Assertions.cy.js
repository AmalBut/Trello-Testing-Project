import dataUtiles from "../../support/datautiles.cy";

const datautiles = new dataUtiles();

class hideTemplateAssertions{
    checkTemplateRemovedFromList(templateName,listName){
   // cy.findByTestId("CloseIcon").click();
    cy.contains("[data-testid=list-header]", listName)
      .siblings("[data-testid='list-cards']")
      .contains("li", templateName)
      .and('not.exist');
    return this;
    }

    checkTemplateIsNotDeleted(templateId){
     cy.intercept("PUT",`https://trello.com/1/cards/${templateId}`).as("hide");
        cy.wait("@hide");
        datautiles.getTemplate(templateId).then((resp)=>{
            expect(resp.status).to.eq(200);
        })
        return this;
    }
}
export default hideTemplateAssertions;