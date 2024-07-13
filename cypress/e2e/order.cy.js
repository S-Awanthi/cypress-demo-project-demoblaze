import LoginPage from "../support/pages/loginPage";
import CartPage from "../support/pages/cartPage";
import OrderPage from "../support/pages/orderPage";

const loginPage = new LoginPage();
const cartPage = new CartPage();
const orderPage = new OrderPage();

let username = 'test2';
let password = 'test2';

beforeEach('should login with valid credentials', () => {
        loginPage.visit();
        loginPage.fillUsername(username);
        loginPage.fillPassword(password);
        loginPage.submit();              
})

it('should place ordert', () => {
    cartPage.visitCart();
    cartPage.verifyVisitCart();
    orderPage.visitPlaceOrderPage();
    orderPage.fillName('Awanthi');
    orderPage.fillCountry('Sri Lanka');
    orderPage.fillCity('Tissa');
    orderPage.fillCreditCard('02154578');
    orderPage.fillMonth('February');
    orderPage.fillYear('2026');
//     orderPage.confirmPlaceOrder();

    //cancel order
    orderPage.cancelPlaceOrder();
 });
