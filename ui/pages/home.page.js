const Page = require('./page');

class HomePage extends Page {
    get signinLink() {
        return $('a[href^="https://signin.ebay.com.au"]');
    }

    get ebayPlusTab() {
        return $('img[alt="eBay Plus"]');
    }

    get ebayDealsTab() {
        return $('a[href="https://www.ebay.com.au/deals"]');
    }

    get findStoreTab(){
        return $('a[href^="https://www.ebay.com.au/b/Stores-HUB"]')
    }

    get helpTab() {
        return $('a[href="https://www.ebay.com.au/help/home"]');
    }

    get searchBox() {
        return $('input[type="text"]');
    }

    get searchSubmitButton() {
        return $('input[type="submit"]');
    }

    get shopByCategory() {
        return $('#gh-shop-a');
    }

    async clickonShopByCategory(){
        await this.shopByCategory.click();
    }

    open() {
        super.open();
    }

    maximizeWindow(){
        super.maximizeWindow();
    }
}
module.exports = new HomePage();