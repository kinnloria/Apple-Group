var href
var fart = {}

module.exports = {
    before: browser => {
        fart = browser.page.applePageObjects()
        fart.navigate()
    },
    'Search test': browser => {
        fart
        .search(fart, "boogerfart")
        .search(fart, "iPhone")
        .search(fart, "CODE")
    },
    'Apple Sign in Test': browser => {
        fart
        .click('@clickBag')
        .click('@clickSignIn')
        .setValue('@email', 'chaseqa007@gmail.com')
        .setValue('@password', 'Jaromandchase007')
        .click('@signInButton')
    },
    
    'Site Map Test': browser => {
        fart.useXpath()
        for (i = 1; i < 51; i++) { //354 if you wanna do all of them; this just tests the first 50
            fart.testLink(fart, i)
        }
    }
}