const { Builder, By, until } = require('selenium-webdriver');

(async function testQuerySubmission() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:5173/submit');
        await driver.findElement(By.tagName('textarea')).sendKeys('Test Query from Selenium');
        await driver.findElement(By.css('button[type="submit"]')).click();
        await driver.wait(until.elementLocated(By.css('.bg-blue-50')), 5000);
        console.log('Query submission test passed.');
    } catch (e) {
        console.error(e);
    } finally {
        await driver.quit();
    }
})();
