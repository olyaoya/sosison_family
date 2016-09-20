module.exports = {
    /*First test*/
    "Search Justin Biber songs": function (browser) {
        browser
            .url("https://www.google.com.ua")
            .setValue("[id=\"lst-ib\"]", "Justin Biber songs")
            .click(".lsb[type=\"submit\"]")
    }
};