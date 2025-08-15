class updateTemplateAssertions{
    checkTemplateNameIsUpdated(newTemplateName){
        cy.contains('[data-testid="trello-card"]',"This card is a template.").should("contain",newTemplateName);
        return this;
    }
}
export default updateTemplateAssertions;