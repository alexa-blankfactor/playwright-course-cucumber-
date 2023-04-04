class LoginPage{
    async navigateToLoginScreen(){
        await page.goto('https://www.saucedemo.com/')
    }
    async submitLoginFormWithParameters(username,password){
        await page.fill('#user-name', username)
        await page.fill('#password', password)
        await page.click('#login-button')
    }
    async submitLoginForm(){
        await page.fill('#user-name', 'standard_user')
        await page.fill('#password', 'secret_sauce')
        await page.click('#login-button')
    }
    async pause(){
        await  page.waitForTimeout(3000)
    }

}

module.exports={LoginPage}