const Page = require('./page');

class StorePage extends Page {
    get findStoreInputField() {
        return $('.textbox__control');
    }

    get searchButton() {
        return $('.search-text');
    }

    get findStoreResultMessage() {
        return $('.sns-results-title');
    }

    getFindStoreSearchMessage(){
        return this.findStoreResultMessage.getText();
    }
}
module.exports = new StorePage();
