Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type("Walmyr")
      cy.get('#lastName').type('filho')
      cy.get('#email').type('juares.franciscodacruz@gmail.com')
      cy.get('#open-text-area').type('testes')
      cy.contains('button', 'Enviar').click()

      
})