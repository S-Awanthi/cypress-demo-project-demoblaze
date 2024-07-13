class AddToCartPage {

    constructor() {
        this.addToCartButton = '.col-sm-12 > .btn';
    }

    visitHome(){
        cy.contains('Home').click();
        cy.wait(2000);
    }

    addtoCart() {
        cy.get(this.addToCartButton)
            .focus() // Focus on the button
            .invoke('attr', 'style', 'border-color: black; border-width: 3pt')
            .click();

        cy.on('window:alert', function (text) { //Verify
            expect(text).to.contain('Product added');
            // cy.get('button').contains('OK').click();
        })

        cy.wait(2000);
    }
}

export default AddToCartPage;
