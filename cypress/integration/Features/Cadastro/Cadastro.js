import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

//#region Given (Pré-Condições)
Given('que o usuário esteja na tela {string}', function (string) {
    cy.visit(Cypress.config().baseUrl)
});

Given('que o usuário tenha acionado a opção {string}', function (string) {
    cy.get('[value= \''+ string + '\']').click()
 });

Given('que os campos do cadastro obrigatórios tenham sido preenchidos', function () {
   cy.fixture('objects').as('objects').then((objects) =>{        
      cy.fixture('data').as('data').then((data) =>{ 
        cy.get(objects.Nome).type(data.Nome)
        cy.get(objects.Sobrenome).type(data.Sobrenome)
        cy.get(objects.Feminino).check()
   
       })
    })
      
});
  
Given('que todos os campos do cadastro tenham sido preenchidos', function () {
    cy.fixture('objects').as('objects').then((objects) =>{        
        cy.fixture('data').as('data').then((data) =>{ 
          cy.get(objects.Nome).type(data.Nome)
          cy.get(objects.Sobrenome).type(data.Sobrenome)
          cy.get(objects.Feminino).check()
          cy.get(objects.Carne).check()
          cy.get(objects.Escolaridade).select(data.Escolaridade)          
          cy.get(objects.Esportes).select(data.Esportes)
          cy.get(objects.Sugestoes).type(data.Sugestoes)
        })
    
    })
});

Given('que um cadastro já tenha sido realizado', function () {
    Given('que todos os campos do cadastro tenham sido preenchidos')
    When('a opção Cadastrar for acionada')
});

Given('que o campo {string} {string} preenchido', function (string, string2) {

    cy.fixture('objects').as('objects').then((objects) =>{
        cy.fixture('data').as('data').then((data) =>{ 
            if(string == "Nome") string2 == 'tenha sido' ? cy.get(objects.Nome).type(data.Nome) : cy.get(objects.Nome).clear        
            if(string == "Sobrenome") string2 == 'tenha sido' ? cy.get(objects.Sobrenome).type(data.Sobrenome) : cy.get(objects.Sobrenome).clear        
        })
    })
});

Given('a opção {string} {string} selecionada', function (string, string2) {
    cy.fixture('objects').as('objects').then((objects) =>{
        cy.fixture('data').as('data').then((data) =>{ 
            if(string == "Sexo") string2 == 'tenha sido' ? cy.get(objects.Feminino).check() : cy.get(objects.Feminino).clear
        })
    })
});

Given('que as opções {string} e {string} tenham sido selecionadas no campo {string}', function (string, string2, string3) {
    cy.fixture('objects').as('objects').then((objects) =>{        
        cy.fixture('data').as('data').then((data) =>{
            cy.get(objects.Esportes).clear
            cy.get(objects.Esportes).select([string, string2])
        })    
    })
});

Given('que as opções {string} {string} {string} {string} tenham sido selecionadas no campo {string}', function (string, string2, string3, string4, string5) {
    cy.fixture('objects').as('objects').then((objects) =>{        
        cy.fixture('data').as('data').then((data) =>{
            cy.get(objects.Esportes).clear
            cy.get(objects.Esportes).select([string, string2, string3, string4])
        })    
    })
});


Given('que as opções {string} {string} tenham sido marcadas no campo {string}', function (string, string2, string3) {
    cy.fixture('objects').as('objects').then((objects) =>{        
        cy.fixture('data').as('data').then((data) =>{
            //Linmpa a seleção
            if(string == 'Carne') cy.get(objects.Carne).check()
            if(string == 'Frango') cy.get(objects.Frango).check()
            if(string == 'Pizza') cy.get(objects.Pizza).check()
            if(string == 'Vegetariano') cy.get(objects.Vegetariano).check()
            if(string2 == 'Carne') cy.get(objects.Carne).check()
            if(string2 == 'Frango') cy.get(objects.Frango).check()
            if(string2 == 'Pizza') cy.get(objects.Pizza).check()
            if(string2 == 'Vegetariano') cy.get(objects.Vegetariano).check()
        
        })    
    })
});

Given('que exista a {string} com a linha {string}}', function (string, string2) {
        cy.get('[id="elementosForm:tableUsuarios"]').should('have.text', string2)
});

Given('que o campo {string} dessa linha {string} da tabela esteja marcado', function (string, string2) {

    let posicao 
    if(string2 == 'Francisco') posicao = 1
    if(string2 == 'Maria') posicao = 2
    if(string2 == 'Usuario A') posicao = 3
    if(string2 == 'Doutorado') posicao = 4
    if(string2 == 'Usuario B') posicao = 5

    if(string == 'Checkbox') cy.get('[id="elementosForm:tableUsuarios"] > tbody > tr:nth-child('+ posicao +') > td:nth-child(4) input[type=checkbox]').check()
    if(string == 'Radio') cy.get('[id="elementosForm:tableUsuarios"] > tbody > tr:nth-child('+ posicao +') > td:nth-child(5) input[type=radio]').check()       

});

Given('que o campo {string} dessa linha {string} da tabela esteja preenchido', function (string, string2) {

    let posicao 
    if(string2 == 'Francisco') posicao = 1
    if(string2 == 'Maria') posicao = 2
    if(string2 == 'Usuario A') posicao = 3
    if(string2 == 'Doutorado') posicao = 4
    if(string2 == 'Usuario B') posicao = 5

    if(string == 'Input') cy.get('[id="elementosForm:tableUsuarios"] > tbody > tr:nth-child('+ posicao +') input[type=text]').type('Teste')
});

//#endregion

//#region When (Ação Relizada)
When('a opção {string} for acionada', function (string) {
    cy.get('[value= \''+ string + '\']').click()
});

When('a opção {string} da linha {string} for acionada', function (string, string2) {
    let posicao 
    if(string2 == 'Francisco') posicao = 1
    if(string2 == 'Maria') posicao = 2
    if(string2 == 'Usuario A') posicao = 3
    if(string2 == 'Doutorado') posicao = 4
    if(string2 == 'Usuario B') posicao = 5
    cy.get('[id="elementosForm:tableUsuarios"] > tbody > tr:nth-child('+ posicao +')  input[type=button]').click()
});
//#endregion

//#region Then (Resultado)
Then('o texto da opção é alterado para {string}', function (string) {
    cy.get('[id=buttonSimple]').should('have.value', string)
});

Then('o texto da opção permanece como {string}', function (string) {  
    cy.get('[id=buttonSimple]').should('have.value', string)
});

Then('o tipo do campo Resultado é alterado para {string}', function (string) {
    cy.wait(500)
    if (string == 'campo de texto') cy.get('[id=resultado]').find('input')
});

Then('o texto {string} é exibido no campo Resultado', function (string) {
    cy.fixture('objects').as('objects').then((objects) =>{
        cy.get(objects.Resultado + ' > span').should('have.text', string)
    })
});

Then('os dados cadastrados são exibidos com o status no campo {string}', function (string) {
    cy.fixture('objects').as('objects').then((objects) =>{        
        cy.fixture('data').as('data').then((data) =>{ 
          cy.get(objects.Resultado).should('contain', data.Nome)
          cy.get(objects.Resultado).should('contain', data.Sobrenome)
          cy.get(objects.Resultado).should('contain', data.Sexo)
        })
    })
});

Then('as opções {string}, {string}, {string} e {string} cadastradas no campo {string} são exibidas no cadastro', function (string, string2, string3, string4, string5) {
    cy.fixture('objects').as('objects').then((objects) =>{   
          cy.get(objects.Resultado).should('contain', string)
          cy.get(objects.Resultado).should('contain', string2)
          cy.get(objects.Resultado).should('contain', string3)
          cy.get(objects.Resultado).should('contain', string4)
    })
});

Then('todos os dados cadastrados são exibidos com o status no campo {string}', function (string) {
    cy.fixture('objects').as('objects').then((objects) =>{        
        cy.fixture('data').as('data').then((data) =>{ 
          cy.get(objects.Resultado).should('contain', data.Nome)
          cy.get(objects.Resultado).should('contain', data.Sobrenome)
          cy.get(objects.Resultado).should('contain', data.Sexo)                  
          cy.get(objects.Resultado).should('contain', data.Comidas)
          cy.get(objects.Resultado).should('contain',data.Esportes)
          cy.get(objects.Resultado).should('contain',data.Sugestoes)
          cy.get(objects.Resultado).should('contain', data.Escolaridade)
        })
    })
});

Then('uma mensagem é apresentada informando que o campo {string} é obrigatório', function (string) {
    cy.on('window:alert', (str) => {
        expect(str).to.equal('O ' + string + ' é obrigatório!')
    })
});

Then('a mensagem {string} é exibida', function (string) {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(string)
     })
});

Then('o cadastro não é realizado', function () {
    cy.fixture('objects').as('objects').then((objects) =>{
        cy.get(objects.Resultado).should('have.text', 'Status: Nao cadastrado')
    })
});

//#endregion