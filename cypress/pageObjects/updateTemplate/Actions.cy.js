class updateTemplateActions{

    clickOnTemplateCard(templateName){
        cy.findByTestId("list-card").contains(templateName).click();
        return this;
    }

    clickOnTemplateTitle(){
        cy.findByTestId("card-back-title-input").click();
        return this;
    }

    changeTemplateName(newTemplateName){
        cy.findByTestId("card-back-title-input").clear().type(newTemplateName+"{enter}");
        return this;
    }

    closeTemplateCard(){
        cy.findByTestId("CloseIcon").click();
        return this;
    }

}
export default updateTemplateActions;