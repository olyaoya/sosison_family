module.exports = {
    /*First test*/
    "Search Justin Biber songs": function (browser) {
        browser
            //access google site
            .url("https://www.google.com.ua")
            //enter "Justin Biber songs" in search field
            .setValue("[id=\"lst-ib\"]", "Justin Biber songs")
            //click search button
            .click(".lsb[type=\"submit\"]")
    }
};