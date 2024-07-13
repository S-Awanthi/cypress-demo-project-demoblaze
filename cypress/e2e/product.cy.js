import LoginPage from "../support/pages/loginPage";
import ProductPage from "../support/pages/productPage";

const productPage = new ProductPage();
const loginPage = new LoginPage();

let username = 'test2';
let password = 'test2';

before('should login with valid credentials', () => {
    loginPage.visit();
    loginPage.fillUsername(username);
    loginPage.fillPassword(password);
    loginPage.submit();
})

afterEach(() => {
    productPage.verifyViewProduct();
})

describe('View and open individual product page', () => {

    it('should view listed items & then open product page', () => {
        productPage.viewPhones();
        productPage.clickProductById(3);
        productPage.visitHome();

        productPage.viewLaptops();
        productPage.clickProductById(4);
        productPage.visitHome();

        productPage.viewMonitors();
        productPage.clickProductById(2);
    });
})
