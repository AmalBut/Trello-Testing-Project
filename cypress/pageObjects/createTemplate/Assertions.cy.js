class createTemplateAssertions{

    checkTemplateIsVisibleOnBoard(templateTitle){
        cy.findByTestId("list-card-wrapper").should("be.visible").and("contain",templateTitle).and("contain","This card is a template.");
        return this;
    }

    checkTemplatePopUpIsOpened(templateTitle){
        cy.findByTestId("card-back-name").should("be.visible").and("contain",templateTitle);
        return this;
    }
}
export default createTemplateAssertions;