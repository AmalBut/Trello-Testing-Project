class createBoardActions {

    clickOnCreateButtonInNavBar(){
        cy.findByTestId("header-create-menu-button").click();
        return this;
    }

    clickOnCreateBoardButton(){
        cy.findByTestId("header-create-board-button").click();
        return this;
    }

    typeBoardNameInBoardTitleInputField(boardName){
        cy.findByTestId("create-board-title-input").type(boardName);
        return this;
    }

    clickOnCreateButton(){
        cy.findByTestId("create-board-submit-button").click();
        return this;
    }

}
export default createBoardActions;