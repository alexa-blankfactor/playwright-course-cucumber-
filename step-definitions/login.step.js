const {Given,When,Then,defineStep}= require('@cucumber/cucumber')
const {LoginPage} =require('../page-objects/login-page')
const {HomePage} =require('../page-objects/home-page')

const loginPage= new LoginPage()
const homePage = new HomePage()

Given('I visit a login page',async function () {
    await loginPage.navigateToLoginScreen()
})

When('I fill the login form with valid credencials', async function (){
    await loginPage.submitLoginForm()
})

Then('I should see the home page',async function(){
    await homePage.assertUserLoggedIn()
})

When('I fill the login form with {string} and {string}',async function(username,password){
    await loginPage.submitLoginFormWithParameters(username,password)

})

Then('I wait for 3 seconds',async function(){
    loginPage.pause()
})