class LoginPage {

    constructor() {
        this.navLogin = '#login2';
        this.unameField = '#loginusername';
        this.passwordField = '#loginpassword';
        this.loginButton = '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary';
        this.logoutButton = '#logout2';
        this.usernameDisplay = '#nameofuser';
    }

    visit() {
        cy.visit('https://www.demoblaze.com/index.html');
        cy.get(this.navLogin).click();
        cy.wait(1000);    }

    fillUsername(username) {
        cy.get(this.unameField).type(username);    }

    fillPassword(password) {
        cy.get(this.passwordField).type(password);    }

    submit() {
        cy.get(this.loginButton).click();    }

    verifySuccessLogin(username) {
        cy.url().should('include', '/index.html');
        cy.wait(2000);
        cy.get(this.usernameDisplay).should('be.visible');
        cy.get(this.usernameDisplay).should('have.text', `Welcome ${username}`);     
        cy.get(this.logoutButton).should('be.visible');   }

    verifyFailedLogin(){
        cy.on('window:alert', function (text) {
            expect(text).equal('Wrong password.')
        })
        cy.get(this.logoutButton).should('not.be.visible');
        cy.get(this.usernameDisplay).should('not.be.visible')     }
}

export default LoginPage;
