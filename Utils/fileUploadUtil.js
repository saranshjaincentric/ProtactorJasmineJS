//Util file - fileUploadUtil.js
var path = require('path');

var fileUploadUtil = function() {

	this.uploadFile = function(fileName){

		// set file detector
		var remote = require('../node_modules/protractor/node_modules/selenium-webdriver/remote');
		browser.setFileDetector(new remote.FileDetector());


		var fileToUpload = '../filesUpload/'+fileName;
		var absolutePath = path.resolve(__dirname, fileToUpload);

		var fileElem = element(by.css('input[type="file"]'));

		// Unhide file input
		browser.executeScript("arguments[0].style.visibility = 'visible'; arguments[0].style.height = '1px'; arguments[0].style.width = '1px';  arguments[0].style.opacity = 1", fileElem.getWebElement());

		fileElem.sendKeys(absolutePath);

		browser.driver.sleep(1000); //wait a while

	};

}

module.exports = new fileUploadUtil();