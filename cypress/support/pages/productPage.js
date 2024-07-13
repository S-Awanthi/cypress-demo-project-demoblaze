class ProductPage {

    constructor() {
        this.productSelectorBase = ':nth-child'; // Base part of the selector
        this.productImage = '.item > img';
        this.productName = '.name';
        this.productPrice = '.price-container';
        this.productInfo = '#more-information';
        this.addToCartButton = '.col-sm-12 > .btn';
    }

    visitHome() {
        cy.contains('Home').click();
        cy.wait(3000);    }

    viewPhones() {
        cy.contains('Phones').click();
        cy.wait(2000);    }

    viewLaptops() {
        cy.contains('Laptops').click();
        cy.wait(2000);    }

    viewMonitors() {
        cy.contains('Monitor').click();
        cy.wait(2000);    }

    verifyViewProduct() {
        cy.get(this.productImage).should('be.visible');
        cy.get(this.productName).should('be.visible');
        cy.get(this.productPrice).should('be.visible');
        cy.get(this.productInfo).should('be.visible');
        cy.get(this.addToCartButton).should('be.visible');
        cy.wait(1000);    }

    clickProductById(id) {
        // Construct the full selector using the base part stored in the constructor
        const fullSelector = `${this.productSelectorBase}(${id}) > .card > .card-block > .card-title > .hrefch`;
        cy.get(fullSelector).click();
        cy.wait(3000);    }
}

export default ProductPage;
