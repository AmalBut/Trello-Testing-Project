class createBoardAssertions {

    checkBoardNameIsContain(boardName){
        cy.wait(5000)
        cy.findByTestId("board-name-display").should("contain",boardName)
        return this;
    }
}
export default createBoardAssertions;