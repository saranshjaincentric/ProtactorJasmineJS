describe('Select a product and add to cart', function() {

	var logger = require('../Utils/logUtil.js');
 	var loginPage = require('../pageObjects/loginPage.js');
	var ObjRep = require('../pageLocators/validateProductCheckoutOR.json');

	
	beforeEach(function(){

		logger.log('info', '[- test started -]********************************************');

	});
	
	afterEach(function(){

		logger.log('info','[- test completed -]********************************************');
		
	});
	
	it('Validate that the product is selected and succesfully added to cart', function() {

		loginPage.loginToAPP(); //optional

		element(by.xpath(ObjRep.validateProductCheckout.clickProd)).click().then(function () {

			logger.log('info', '--- clicked on product ---');
			browser.sleep(5000);
			//browser.switchTo().frame(0);
		});


		element(by.xpath(ObjRep.validateProductCheckout.addProdBtn)).click().then(function () {

			logger.log('info', '--- Added product to cart---');
			browser.sleep(5000);

		});

		
	});	
	
});