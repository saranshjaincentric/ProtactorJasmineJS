//Page object file - searchFieldPage.js

var logger = require('../Utils/logUtil.js');
var ObjRep = require('../pageLocators/validateSortOptionOR.json');
var testDat = require('../testData/validateSortOptionTD.json');

var searchFieldPage = function () {

    this.searchFieldfunc = function () {

        browser.sleep(2000);

        var elm = element(by.xpath(ObjRep.validateSortOption.srchBox));
        var keys = testDat.validateSortOptionTD.SearchCode;

        elm.click();

        for (var i = 0; i < keys.length; i++) {
            browser.actions().sendKeys(keys[i]).perform();
            browser.sleep(500);
        }

    };

};
module.exports = new searchFieldPage();