describe('Subscribe to newsletter', function () {

    var logger = require('../Utils/logUtil.js');
    var loginPage = require('../pageObjects/loginPage.js');
    var ObjRep = require('../pageLocators/validateSubNewsletterOR.json');
    var testDat = require('../testData/validateSubNewsletterTD.json');
    var ranNumGen = require('../Utils/randomNumberGenUtil.js');

    var rand = ranNumGen.ranNumGen();

    var uniqueEmails = "test_user"+rand+testDat.validateSubNewsletterTD.emailDomain; // generating unique test emails for every test run

    beforeEach(function () {

        logger.log('info', '[- test started -]********************************************');

    });

    afterEach(function () {

        logger.log('info', '[- test completed -]********************************************');

    });

    it('Validate Subscribe to newsletter feature', function () {

        loginPage.loginToAPP(); //optional

        element(by.xpath(ObjRep.validateSubNewsletter.enterEmail)).sendKeys(uniqueEmails);
        element(by.xpath(ObjRep.validateSubNewsletter.confirm)).click();

        browser.sleep(2000);

        element(by.xpath(ObjRep.validateSubNewsletter.success)).getText().then(function (resultText) {
            expect(resultText).toEqual(testDat.validateSubNewsletterTD.validationMsg);
            logger.log('info', '--- validated the succesful msg for subscription ---');
        });

    });

});