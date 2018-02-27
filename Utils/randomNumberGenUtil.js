//Util file - randomNumberGenUtil.js
var path = require('path');

var randomNumberGenUtil = function() {

	this.ranNumGen = function(){

		var rand = Math.round((Math.random()*1000000)); //generating random code for uniqueness
		return rand;
		
	};

}

module.exports = new randomNumberGenUtil();