
const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const option = new chrome.Options();
const driver = new Builder()
  .forBrowser("chrome")
  .setChromeOptions(option)
  .build();
  
  async function openFacebook(){
    driver.get("https://www.facebook.com/");
}

export { openFacebook };