class createTemplateActions{
    clickOnCreateFromTemplateIcon(){
        cy.findByTestId("card-template-list-button").first().click();
        return this;
    }

    clickOnCreateANewTemplateButton(){
        cy.findByTestId("create-new-template-card-button").click();
        return this;
    }

    typeTemplateTitle(templateTitle){
        cy.findByTestId("create-template-card-composer").type(templateTitle);
        return this;
    }

    clickOnAddButton(){
        cy.findByTestId("new-template-card-submit-button").click();
        return this;
    }
}
export default createTemplateActions;