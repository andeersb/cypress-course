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
    it ('intercepts', () =>{
        cy.intercept("POST", 'http://localhost:3000/examples', {
           fixture: 'example.json'
        })
        cy.getDataTest('post-button').click()
    })
    it.only('grudges list',() =>{
        cy.contains(/Add some Grudges/i)
        cy.getDataTest('grudge-list').within(()=>{
            cy.get('li').should('have.length', 0)
            })
        cy.getDataTest('grudge-input').within(() =>{
            cy.get('input').type('test grudge')
        })
        cy.getDataTest('grudge-button').click()
        cy.getDataTest('grudge-list').within(()=>{
            cy.get('li').should('have.length', 1)
        })
        cy.getDataTest('grudge-input').within(() =>{
            cy.get('input').type('test grudges')
        })
        cy.getDataTest('grudge-button').click()
        cy.getDataTest('grudge-list').within(()=>{
            cy.get('li').should('have.length', 2)
            cy.get('li').its(0).should('contains.text', 'test grudge')
            cy.get('li').its(1).should('contains.text', 'test grudges')
        })
        cy.getDataTest('grudge-list').within(()=>{
            cy.get('li').its(0).within(() =>{
                cy.getDataTest('delete').click()
            })
        
        })
        cy.getDataTest('grudge-list').within(()=>{
            cy.get('li').should('have.length', 1)
        })
        cy.getDataTest('delete').click()
        cy.getDataTest('grudge-list').within(()=>{
            cy.get('li').should('have.length', 0)
        })
    })

    
}) 