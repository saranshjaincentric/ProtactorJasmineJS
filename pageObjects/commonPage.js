//Page object file - portfolioDetailsPage.js

var commonPage = function(){
	
	this.getPageURL = function(){

		return browser.getCurrentUrl();
		
	};
	
	this.getPageTitle = function(){

		return browser.getTitle();
		
	};

};
module.exports = new commonPage();