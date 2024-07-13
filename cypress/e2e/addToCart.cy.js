import LoginPage from "../support/pages/loginPage";
import ProductPage from "../support/pages/productPage";
import AddToCartPage from "../support/pages/addToCartPage";

const productPage = new ProductPage();
const loginPage = new LoginPage();
const addToCartPage = new AddToCartPage();

let username = 'test2';
let password = 'test2';

before('should login with valid credentials', () => {
        loginPage.visit();
        loginPage.fillUsername(username);
        loginPage.fillPassword(password);
        loginPage.submit();             
})

describe('Add individual product to cart', () => {        
    
        it('should add items', () => {
            productPage.viewPhones(); 
            productPage.clickProductById(6); 
            addToCartPage.addtoCart();
            addToCartPage.visitHome();  
            
            productPage.viewLaptops(); 
            productPage.clickProductById(4); 
            addToCartPage.addtoCart(); 
            addToCartPage.visitHome(); 
            
            productPage.viewMonitors(); 
            productPage.clickProductById(1); 
            addToCartPage.addtoCart();
            addToCartPage.visitHome();
        });    
})
