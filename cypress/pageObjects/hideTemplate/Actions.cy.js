class hideTemplateActions{
    rightClickOnTemplateCard(){
        cy.findByTestId("list-card").rightclick();
        return this;
    }

    selectHideOption(){
        cy.findByTestId("quick-card-editor-archive").click();
        return this;
    }

}
export default hideTemplateActions;