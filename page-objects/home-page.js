class HomePage{
    async assertUserLoggedIn(){
        await page.waitForSelector('.inventory_list')
    }
}

module.exports={HomePage}