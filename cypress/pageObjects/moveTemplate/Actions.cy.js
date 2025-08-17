class moveTemplateActions{

    clickOnTemplateCard(templateName){
        cy.findByTestId("list-card").contains(templateName).click();
        return this;
    }

    clickOnDropDownList(listName){
        cy.get(`button[title="${listName}"]`).click();
        return this;
    }

    clickOnList(){
        cy.findByTestId("move-card-popover-select-list-destination-select--indicators-container").click();
        return this;
    }

    chooseListOption(){
       return cy.get("[data-testid=move-card-popover-select-list-destination-select--option-1] li")
        .then(($newList) => {
            cy.wrap($newList).click();
            return cy.wrap($newList).invoke("text");
        });
    }

    clickMoveButton(){
        cy.findByTestId("move-card-popover-move-button").click();
        return this;
    }
}
export default moveTemplateActions;