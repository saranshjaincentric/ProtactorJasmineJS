describe('Filling contact us form', function () {

    var logger = require('../Utils/logUtil.js');
    var loginPage = require('../pageObjects/loginPage.js');
    var ObjRep = require('../pageLocators/validateFillingContactUsFormOR.json');
    var testDat = require('../testData/validateFillingContactUsFormTD.json');
    var SelectWrapper = require('../Utils/selectWrapperUtil.js');
    var mySelect = new SelectWrapper(by.xpath(ObjRep.validateFillContForm.sel));

    beforeEach(function () {

        logger.log('info', '[- test started -]********************************************');

    });

    afterEach(function () {

        logger.log('info', '[- test completed -]********************************************');

    });

    it('Validate filling contact-us form and submit', function () {

        loginPage.loginToAPP(); //optional

        element(by.xpath(ObjRep.validateFillContForm.clickLink)).click().then(function () {

            logger.log('info', '--- clicked on contact-us link ---');
            browser.sleep(2000);

            mySelect.selectByValue(testDat.validateFillingContactUsFormTD.selectValue);
            element(by.xpath(ObjRep.validateFillContForm.email)).sendKeys(testDat.validateFillingContactUsFormTD.emailAdd);
            element(by.xpath(ObjRep.validateFillContForm.msg)).sendKeys(testDat.validateFillingContactUsFormTD.msgTxt);
            browser.sleep(2000);
          
            element(by.xpath(ObjRep.validateFillContForm.submit)).click().then(function () {
                logger.log('info', '--- submitted the message to customer care ---');
            });  
            
            element(by.xpath(ObjRep.validateFillContForm.success)).getText().then(function (resultText) {
                expect(resultText).toEqual(testDat.validateFillingContactUsFormTD.validationMsg2);
                logger.log('info', '--- validated the succesful msg for msg sent to team ---');
            });

            browser.sleep(2000);
        });


    });

});