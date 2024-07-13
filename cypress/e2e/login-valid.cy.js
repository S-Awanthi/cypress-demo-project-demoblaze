import LoginPage from "../support/pages/loginPage";

const loginPage = new LoginPage();

let username = 'test'; 
let password = 'test';

it('should Login with VALID credentials', () => {  
  loginPage.visit();
  loginPage.fillUsername(username);
  loginPage.fillPassword(password);
  loginPage.submit();
  loginPage.verifySuccessLogin(username);
})
