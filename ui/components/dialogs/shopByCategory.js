class ShopByCategoryComponent {
    get Electronics() {
        return $('a[href^="https://www.ebay.com.au/b/Electronics"]');
    }

    get Motors() {
        return $('a[href^="https://www.ebay.com.au/b/Motors"]');
    }

    get HomeAndGarden() {
        return $('a[href^="https://www.ebay.com.au/b/Home-Garden"]');
    }

    get ClothingShoesAndAccessories() {
        return $('a[href^="https://www.ebay.com.au/b/Clothing-Shoes-Accessories"]');
    }

    get Sports() {
        return $('a[href^="https://www.ebay.com.au/b/Sporting-Goods"]');
    }

    get HealthAndBeauty() {
        return $('a[href^="https://www.ebay.com.au/b/Health-Beauty"]');
    }

    get Toys() {
        return $('a[href^="https://www.ebay.com.au/b/Toys-Hobbies"]');
    }

    get BusinessAndIndustrial() {
        return $('a[href^="https://www.ebay.com.au/b/Business-Industrial"]');
    }

    get OtherCategories() {
        return $('a[href^="https://www.ebay.com.au/b/Others"]');
    }
}
module.exports = new ShopByCategoryComponent();