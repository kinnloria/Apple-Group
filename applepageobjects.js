var appleCommands = {
    printFart: function() {
        console.log("fart lol")
        return this
    },
    clickEmployee: function(employeeName) {
        this.api.useXpath()
        this.click(`//li[text()="${employeeName}"]`)
        this.api.useCss()
        return this
    },
    testLink: function (browser, index) {
        var self = this
        this
            .api.url('https://www.apple.com/sitemap/')
        this
            .waitForElementVisible('html')
            .getAttribute('xpath', `(//a[@property="schema:sameAs"])[${index}]`, 'href', function (result) {
                console.log(result.value)
                href = result.value
                self
                    .click('xpath', `(//a[@property="schema:sameAs"])[${index}]`)
                    .verify.urlContains(href)
            })
            return this
    },
    search: function(browser,searchTerm) {
        this
            .click('@searchButton')
            .waitForElementPresent('@searchInput')
            .setValue('@searchInput', [searchTerm, browser.api.Keys.ENTER])
            //.waitForElementPresent('body')
            .useXpath()
            .verify.valueContains('//input[@id="site-search-mixedresults-query"]' , searchTerm)
            .navigate()
        return this
    }
}
module.exports = {
    url: 'https://www.apple.com/',
    commands: [appleCommands],
    elements: {
        homeButton: {
            selector: '//a[@id="ac-gn-firstfocus"]',
            locateStrategy: 'xpath'
        },
        macButton: {
            selector: '//a[@class="ac-gn-link ac-gn-link-mac"]',
            locateStrategy: 'xpath'
        },
        ipadButton: {
            selector: '//a[@class="ac-gn-link ac-gn-link-ipad"]',
            locateStrategy: 'xpath'
        },
        iphoneButton: {
            selector: '//a[@class="ac-gn-link ac-gn-link-iphone"]',
            locateStrategy: 'xpath'
        },
        watchButton: {
            selector: '//a[@class="ac-gn-link ac-gn-link-watch"]',
            locateStrategy: 'xpath'
        },
        tvButton: {
            selector: '//a[@class="ac-gn-item ac-gn-item-menu ac-gn-tv"]',
            locateStrategy: 'xpath'
        },
        musicButton: {
            selector: '//a[@class="ac-gn-item ac-gn-item-menu ac-gn-music"]',
            locateStrategy: 'xpath'
        },
        supportButton: {
            selector: '//a[@class="ac-gn-item ac-gn-item-menu ac-gn-support"]',
            locateStrategy: 'xpath'
        },
        searchButton: {
            selector: '//a[@class="ac-gn-link ac-gn-link-search"]',
            locateStrategy: 'xpath'
        },
        searchInput: {
            selector: '//input[@id="ac-gn-searchform-input"]',
            locateStrategy: 'xpath'
        },
        bagButton: {
            selector: '//a[@class="ac-gn-link ac-gn-link-bag"]',
            locateStrategy: 'xpath'
        },
        clickBag:{
            selector:'(//a[@class="ac-gn-link ac-gn-link-bag"])[2]',
            locateStrategy:'xpath'
        },
        clickSignIn:('a[data-analytics-activitymap-link-id="signIn"]'),

        email:{
            selector:('(//input[@aria-required="true"])[1]'),
            locateStrategy:'xpath'
        },
        password:{
            selector:('(//input[@aria-required="true"])[2]'),
            locateStrategy:'xpath'
        },
        signInButton: ('button[data-autom="signin-submit-button"]'),
    }
}