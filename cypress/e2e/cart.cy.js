import LoginPage from "../support/pages/loginPage";
import CartPage from "../support/pages/cartPage";

const loginPage = new LoginPage();
const cartPage = new CartPage();

let username = 'test2';
let password = 'test2';

before('should login with valid credentials', () => {
        loginPage.visit();
        loginPage.fillUsername(username);
        loginPage.fillPassword(password);
        loginPage.submit();              
})

it('should view cart page', () => {    
    cartPage.visitCart();
    cartPage.verifyVisitCart();
 });
