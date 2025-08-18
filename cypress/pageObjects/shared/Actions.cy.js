class sharedActions{

    openUrl(url){
        cy.visit(url);
        cy.once('uncaught:exception', () => false);
        cy.wait(6000);
        return this;
    }

}
export default sharedActions;