const Page = require('./page');

class SearchResultPage extends Page {
    get resultCount() {
        return $('.srp-controls__control.srp-controls__count');
    }

    getSearchResultCount() {
        return this.resultCount.getText();
    }
}
module.exports = new SearchResultPage();