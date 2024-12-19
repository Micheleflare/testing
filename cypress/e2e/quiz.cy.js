describe('Tech Quiz End-to-End Test', () => {
    it('should allow the user to complete the quiz', () => {
      cy.visit('/');
      cy.get('[data-cy="start-button"]').click();
      
      for (let i = 0; i < 10; i++) {
        cy.get('[data-cy="answer-button"]').first().click(); 
        if (i < 9) cy.get('[data-cy="next-button"]').click();
      }
      
      cy.get('[data-cy="score"]').should('exist'); 
      cy.get('[data-cy="restart-button"]').should('exist'); 
    });
  
    
  });
  