require('dotenv').config();
module.exports = class Page {
    open() {
        return browser.url(process.env.WEBDRIVER_URL);
    }

    maximizeWindow() {
        return browser.maximizeWindow();
    }
}
