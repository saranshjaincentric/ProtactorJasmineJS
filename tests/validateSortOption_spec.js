describe('On search results page, verify any one sorting option', function () {

    var logger = require('../Utils/logUtil.js');
    var searchFieldPage = require('../pageObjects/searchFieldPage.js');
    var loginPage = require('../pageObjects/loginPage.js');
    var ObjRep = require('../pageLocators/validateSortOptionOR.json');
    var testDat = require('../testData/validateSortOptionTD.json');

    var SelectWrapper = require('../Utils/selectWrapperUtil.js');
    var mySelect = new SelectWrapper(by.xpath(ObjRep.validateSortOption.srchType));

    beforeEach(function () {

        logger.log('info', '[- test started -]********************************************');

    });

    afterEach(function () {

        logger.log('info', '[- test completed -]********************************************');

    });

    it('Verify any one sorting option', function () {

        loginPage.loginToAPP(); //optional

        searchFieldPage.searchFieldfunc();

        element(by.xpath(ObjRep.validateSortOption.srchSubmit)).click().then(function () {
            logger.log('info', '--- succesfully submitted the search query ---');
            mySelect.selectByValue(testDat.validateSortOptionTD.selectValue1);
            logger.log('info', '--- succesfully selected the search order as: ' + testDat.validateSortOptionTD.selectLabel1+' ---');
            browser.sleep(5000);
        }); 

    });

});