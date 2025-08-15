class sharedActions{

    openUrl(url){
        cy.visit(url)
        cy.wait(5000)
        return this;
    }

}
export default sharedActions;