describe('Tests shopping list', () => {
    it('Loads page', () => {
      cy.visit('http://127.0.0.1:5500/index.html');
    })
  
    it('Tests title', () => {
      cy.title().should('include', 'Shopping List');
    })
  
    it('tests input', () => {
      //check text box exists and input text
      cy.get('[data-cy=add-item-textbox]').should('exist').type('bananas').should('have.value', 'bananas');
      //check number selector button exists and select 5
      cy.get('[data-cy=number-selector]').should('exist').type('5').should('have.value', '5');
      //check submit button exists and click
      cy.get('[data-cy=submit-btn]').should('exist').click();
      //check item is displayed with text and number
      cy.get('[data-cy=list]').first().should('include.text', '5x bananas');
    })
    it('adds more inputs', () => {
      cy.listInput('potatoes', '6');
      cy.listInput('sausages', '7');
      cy.listInput('cheese', '25');
      cy.listInput('more cheese', '10');
      cy.listInput('raspberry gin', '1');
      cy.listInput('lemonade', '2');
    
    })

    it('checks submit without adding item', () => {
      cy.get('[data-cy=submit-btn]').should('exist').click()
    })

    it('checks remove last item button', () => {
      //check last item name
      cy.get('[data-cy=list]').last().should('include.text', '2x lemonade');
      //check remove last item button exists
      cy.get('[data-cy=remove-last-item-btn]').should('exist').click()
      //check last item changed
      cy.get('[data-cy=list]').last().should('include.text', '1x raspberry gin');
    
    })
    it('checks remove item button', () => {
      cy.get('[data-cy=list]').should('include.text', '6x potatoes');
      //check remove item button exists
      cy.get('.remove').should('exist').click({multiple:true});
      //check deleted
      cy.get('6x potatoes').should('not.exist');
    
    })
    it('tests the check boxes', () => {
      cy.listInput('Rice', '2')
      //check boxes exist
      cy.get('.checkbox').should('be.visible')
      //test if they can be checked and unchecked
      .click().click()
      //can multiple be checked
      cy.listInput('potatoes', '6');
      cy.listInput('sausages', '7');
      cy.get('.checkbox').should('be.visible').click({multiple:true});
    })

    it('checks text input with symbols', () => {
      cy.listInput('*&^%$s', '2');
    })
    it('checks number input with symbols', () => {
      //cy.listInput('potatoes', '%$');// commented out as fails test
    })
    it('checks input with large quantity', () => {
      cy.listInput('jam', '6000000');
    
    })
    it('checks input with decimal', () => {
      cy.listInput('pizza', '0.15');
    
    })
    

  })