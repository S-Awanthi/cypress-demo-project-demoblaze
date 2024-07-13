import LoginPage from "../support/pages/loginPage";
import LogoutPage from "../support/pages/logoutPage";

const loginPage = new LoginPage();
const logoutPage = new LogoutPage();

let username = 'test2';
let password = 'test2';

describe('should login with valid credentials', () => {
    it('should login and then logout successfully', () => {
        loginPage.visit();
        loginPage.fillUsername(username);
        loginPage.fillPassword(password);
        loginPage.submit();
        loginPage.verifySuccessLogin(username);
    
        logoutPage.clickLogout();
        logoutPage.verifySuccessLogout();
    })    
})
