import LoginPage from "../support/pages/loginPage";

const loginPage = new LoginPage();

let username = 'test'; 
let password = 'test';
let invalidUname = 'Tester';
let invalidPword = 'Tester123';

beforeEach(() => {
    loginPage.visit();
})

afterEach(() => {
    loginPage.verifyFailedLogin();
    cy.wait(2000);
})

describe('Login with Invalid credentials', () => {

    it('should not login with INVALID Username', () => {
        loginPage.fillUsername(invalidUname);
        loginPage.fillPassword(password);
        loginPage.submit();
        loginPage.verifyFailedLogin();
    })

    it('should not login with INVALID Password', () => {
        loginPage.fillUsername(username);
        loginPage.fillPassword(invalidPword);
        loginPage.submit();
        loginPage.verifyFailedLogin();
    })

    it('should not login with INVALID username & Password', () => {
        loginPage.fillUsername(invalidUname);
        loginPage.fillPassword(invalidPword);
        loginPage.submit();
        loginPage.verifyFailedLogin();
    })
})
