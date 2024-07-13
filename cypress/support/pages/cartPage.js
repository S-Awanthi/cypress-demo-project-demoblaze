class CartPage {

    constructor() {
        this.cartPageLink = '#cartur';
        this.cartTotal = '#totalp';
    }

    visitCart() {
        cy.get(this.cartPageLink).click();
    }

    verifyVisitCart() {
        cy.url().should('equal', 'https://www.demoblaze.com/cart.html');
        cy.contains('Place Order').should('be.visible');
        cy.wait(5000);
        //Only if cart is not empty
        //cy.get(this.cartTotal).should('be.visible');
    }
}

export default CartPage;
