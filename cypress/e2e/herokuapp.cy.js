/// <reference types="cypress" />

describe('UI PDF Reader Test', () => {
  
  it('Acessar o site e baixar o arquivo PDF', () => {
    cy.visit('https://the-internet.herokuapp.com/download');
    cy.screenshot('EVI_API_TEST_herokuapp_01');
    cy.contains('testing.pdf').click();
    cy.readFile('cypress/downloads/testing.pdf').should('exist');
  });

  it('Verificar o ID do resumo do arquivo', () => {
    cy.visit('https://the-internet.herokuapp.com/download');
    cy.contains('testing.pdf').click();
  });

    it('Garantir que não há falhas nos testes exibidos', () => {
      cy.visit('https://the-internet.herokuapp.com/download');
      cy.contains('Failed', { timeout: 10000 }).should('not.exist');
      cy.log('Nenhum teste falhado foi encontrado.');
    });
  });