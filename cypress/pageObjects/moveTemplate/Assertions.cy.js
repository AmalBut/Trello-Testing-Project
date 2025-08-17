class moveTemplateAssertions {
  checkDropDownListSelection(newList) {
    cy.findByTestId("card-back-name")
      .find("[data-testid='DownIcon']")
      .parents("button")
      .invoke("text")
      .should("eq", newList);
    return this;
  }

  checkTemplateIsMovedToNewList(newList, templateName) {
    cy.findByTestId("CloseIcon").click();
    cy.contains("[data-testid=list-header]", newList)
      .siblings("[data-testid='list-cards']")
      .contains("li", templateName)
      .should('exist')
      .and('be.visible');
    return this;
    }
}
export default moveTemplateAssertions;
