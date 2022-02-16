const HomePage = require('../pages/home.page');
const Category = require('../components/dialogs/shopByCategory');
const SearchResultPage = require('../pages/searchResult.page');
const StorePage = require('../pages/store.page');
const expect = require("chai").expect;
const data = require("../data/uiTestData");
const allureReporter = require('@wdio/allure-reporter');

describe('Ebay Home Page test suite.', () => {
    it('Validate eBay home page launches successfully.', async () => {
        await HomePage.open();
        await HomePage.maximizeWindow();
        await (HomePage.signinLink).isExisting();
    });

    it('Validate eBay home page Tabs.', async () => {
        await (HomePage.ebayPlusTab).isExisting();
        await (HomePage.ebayDealsTab).isExisting();
        await (HomePage.findStoreTab).isExisting();
        await (HomePage.helpTab).isExisting();
    });

    it('Validate categories present in Shop by category.', async () => {
        await HomePage.searchBox.click();
        await (Category.Electronics).isExisting();
        await (Category.Motors).isExisting();
        await (Category.HomeAndGarden).isExisting();
        await (Category.ClothingShoesAndAccessories).isExisting();
        await (Category.Sports).isExisting();
        await (Category.HealthAndBeauty).isExisting();
        await (Category.Toys).isExisting();
        await (Category.BusinessAndIndustrial).isExisting();
        await (Category.OtherCategories).isExisting();
    });

    it('Validate find store.', async () => {
        await HomePage.findStoreTab.click();
        await StorePage.findStoreInputField.setValue(data.store_name);
        await StorePage.searchButton.click();
        const expectedMessage  = await StorePage.getFindStoreSearchMessage();
        await expect(expectedMessage).contains("1Store found")
    });

    it('Validate search functionality.', async () => {
        await HomePage.searchBox.setValue(data.product);
        await HomePage.searchSubmitButton.click();
        const count  = await SearchResultPage.getSearchResultCount();
        await expect(count).contains(data.product)
    });
});
