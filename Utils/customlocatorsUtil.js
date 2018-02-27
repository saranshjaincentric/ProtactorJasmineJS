//Util file - customlocatorsUtil.js

var customlocatorsUtil = function() {

		by.addLocator('custLoc', function(toState,parentelement) {

			var using = parentelement || document ;
			var customLocatorTag = "data-test"; //parameterised the custom locator tag name
			var prefixes = [customLocatorTag];
			for (var p = 0; p < prefixes.length; ++p) {
				var selector = '*[' + prefixes[p] + '="' + toState + '"]';
				var inputs = using.querySelectorAll(selector);
				if (inputs.length) {
					return inputs;
				}
			}		

		});
	}

	module.exports = new customlocatorsUtil();
