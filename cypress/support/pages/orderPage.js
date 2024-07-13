class OrderPage {

    constructor() {
        this.cartPageLink = '#cartur';
        this.orderTotal = '#totalm';
        this.name = '#name';
        this.country = '#country';
        this.city = '#city';
        this.cardNo = '#card';        
        this.month = '#month';
        this.year = '#year'; 
        this.purchaseButton = '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary';
        this.cancelButton = '#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary';
        this.successMsg = '.sweet-alert > h2';
        this.userData = '.lead';
        this.okButton = '.confirm';
    }

    visitPlaceOrderPage() {
        cy.contains('Place Order').click();
    }

    verifyPlaceOrderPage(){
        cy.get(this.orderTotal).should('be.visible');
        cy.get(this.purchaseButton).should('be.visible');
        cy.get(this.cancelButton).should('be.visible');
    }

    fillName(name){         cy.get(this.name).type(name);    }
    fillCountry(country){        cy.get(this.country).type(country);    }
    fillCity(city){        cy.get(this.city).type(city);    }
    fillCreditCard(creditCardNo){        cy.get(this.cardNo).type(creditCardNo);    }
    fillMonth(month){        cy.get(this.month).type(month);    }
    fillYear(year){        cy.get(this.year).type(year);    }

    confirmPlaceOrder(){        cy.get(this.purchaseButton).click();    }

    verifyPlaceOrder(){
        cy.get(this.successMsg).should('have.text', 'Thank you for your purchase!');
        cy.get(this.userData).should('be.visible');
        cy.wait(3000);
        cy.get(this.okButton).click();
    }
    
    cancelPlaceOrder(){        
        cy.get(this.cancelButton).click();
    }
    
}

export default OrderPage;
