describe('template', function() {

	it('template', function() {
		
		//var exCon = protractor.ExpectedConditions;
		//var newPort = element(by.xpath('.//*[.="+ New Portfolio"]'));
		//var newPort = element(by.locator('add-new-portfolio')); //using custom locator

/*		browser.wait(exCon.visibilityOf(newPort), 10000);		
		newPort.click();*/
		
/*		browser.actions().mouseMove(newPort).click().perform();*/
		
/*		browser.executeScript("arguments[0].scrollIntoView();", newPort.getWebElement());
		newPort.click();*/
		
/*		browser.executeScript("arguments[0].click();", newPort.getWebElement());*/
		
/*		browser.sleep(3000);
		newPort.click();*/
		
/*		var newPort = element.all(by.xpath('.//*[.="+ New Portfolio"]')).filter(function (elm) {
		    return elm.isDisplayed().then(function (isDisplayed) {
		        return isDisplayed;
		    });
		}).first();*/
		
		/*browser.executeScript("arguments[0].scrollIntoView(false);", myElement.getWebElement());*/
		
/*		var newPort = element(by.xpath("//p[contains(text(),'New')]"));
		
		console.log('+++++++++++++++++++++++++++++++++++++++++++');
		console.log(newPort);
		
		var exCon = protractor.ExpectedConditions;
		
		browser.wait(exCon.visibilityOf(newPort), 30000);		
		
		newPort.click();*/
		
		var EC = protractor.ExpectedConditions;
		var prodlink = element(by.custLoc('add-new-portfolio'));
		browser.wait(EC.visibilityOf(prodlink), 30000, "prod link element is not visible").then(function() {
		   prodlink.click();
		});
		

		
		
/*		element(by.className("")).getText().then(function(text){
					console.log(text);
					expect(text).toContain("");
				});*/
		
		//browser.sleep(30000);

	});
	
});