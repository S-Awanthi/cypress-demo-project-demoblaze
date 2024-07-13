class LogoutPage {

    constructor() {
        this.navLogin = '#login2';        
        this.logoutButton = '#logout2';
    }

    clickLogout() {    
        cy.get(this.logoutButton).click();    }

    verifySuccessLogout() {
        cy.url().should('include', '/index.html');
        cy.wait(2000);
        cy.get(this.navLogin).should('be.visible');    }
}

export default LogoutPage;
