const {By, Builder, WebElementCondition, until} = require('selenium-webdriver');
const assert = require("assert");

(async function webTest() {
    let driver;

    try{
        driver = await new Builder().forBrowser("chrome").build();
        await driver.get('https://harpycloudsolutions.com/')

        let title = await driver.getTitle();
        console.log('*******Home page title*****' + title);
        assert.equal("Harpy Cloud Solutions - IT Training Hub | Harpy Cloud Solutions", title);

        await driver.manage().setTimeouts({implicit: 500});
        await driver.manage().window().maximize();

        let url = await driver.getCurrentUrl();
        console.log('************Current URL******' + url);

        await driver.navigate().to('https://harpycloudsolutions.com/contact')

    }
    catch(e){
        console.log(e)
    }
    finally{
        await driver.quit();
    }
}())