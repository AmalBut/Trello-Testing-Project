class deleteCardActions {
    clickOnActionsIcon(){
        cy.findByTestId("card-back-actions-button").click();
        return this;
    }

    clickOnOption(option){
        if(option === "Archive"){
            cy.findByTestId("card-back-archive-button").click()
        }
        else if(option === "Delete"){
            cy.findByTestId("card-back-delete-card-button").click()
        }
        else{
            throw new Error("Invalid option !!!");
        }
        return this;
    }

    clickConfirmDelete(){
        cy.findByTestId("popover-confirm-button").click();
        return this;
    }
}
export default deleteCardActions;