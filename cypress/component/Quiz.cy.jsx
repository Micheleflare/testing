import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/components/Quiz'; /
describe('Quiz Component', () => {
  it('should render the Quiz component', () => {
    mount(<Quiz />);
    cy.get('[data-cy="quiz"]').should('exist'); 
  });

  it('should start the quiz on start button click', () => {
    mount(<Quiz />);
    cy.get('[data-cy="start-button"]').click();
    cy.get('[data-cy="question"]').should('exist'); 
  });


});
