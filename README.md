# Teste Automatizado com Cypress: Verificação de Arquivo PDF

Este repositório contém testes automatizados utilizando Cypress e JavaScript para verificar funcionalidades relacionadas ao download de arquivos PDF e garantir que não há falhas nos testes exibidos.

## Pré-requisitos

Antes de executar os testes, certifique-se de ter os seguintes itens instalados:

- [Node.js](https://nodejs.org/) (versão 12 ou superior)  
- [Cypress](https://www.cypress.io/) (versão 10 ou superior) 


## Casos de Teste

## 1. Acessar o Site e Baixar o Arquivo PDF
- **Objetivo**: Garantir que o arquivo PDF pode ser baixado corretamente.
  1. Acessar a URL: [https://the-internet.herokuapp.com/download].
  2. Capturar uma captura de tela do site para validação futura.
  3. Baixar o arquivo `testing.pdf`.
  4. Verificar se o arquivo foi baixado com sucesso no diretório `cypress/downloads/`.

## 2. Verificar o ID do Resumo do Arquivo
- **Objetivo**: Validar a presença do ID do resumo no arquivo baixado.
  1. Acessar a página de download.
  2. Clicar no link para baixar o arquivo PDF.
  3. Validar a existência do ID no conteúdo do arquivo (a ser implementado).

## 3. Verificar que Não Há Falhas nos Testes Exibidos
- **Objetivo**: Garantir que a interface da aplicação não exibe falhas.
  1. Acessar a URL da página.
  2. Logar o sucesso da verificação.


## Evidências de Teste

As Evidências se encontram dentro da pasta screenshot com os seguintes nomes:

EVI_API_TEST_herokuapp_01.png, 
EVI_API_TEST_herokuapp_02.png