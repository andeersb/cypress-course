describe('Various Examples', () =>{
    beforeEach(() =>{
        cy.visit('/examples')
    })
    it('mlti-page testing', () =>{
        cy.getDataTest('nav-item-examples').click()
        cy.location("pathname").should("equal", "/examples")
        cy.getDataTest('nav-item-why-cypress').click()
        cy.location("pathname").should("equal", "/") 
        cy.getDataTest('nav-item-overview').click()
        cy.location("pathname").should("equal", "/overview") 
        cy.getDataTest('nav-item-fundamentals').click()
        cy.location("pathname").should("equal", "/fundamentals") 
        cy.getDataTest('nav-item-forms').click()
        cy.location("pathname").should("equal", "/forms")
        cy.getDataTest('nav-item-component').click()
        cy.location("pathname").should("equal", "/component")
        cy.getDataTest('nav-item-best-practices').click()
        cy.location("pathname").should("equal", "/best-practices")
        
     
    })

}) 