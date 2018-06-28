//*****  configuration file  *****  


function allure_report_deploy() {

}

exports.config = {

		//params to use in scripts
		params: {
			login: {
				url: 'http://ihsmarkit.com/index.php',
				user: 'test',
				password: 'test'
			}
		},

		directConnect: true,  

		capabilities: {
			'browserName': 'chrome', //can use 'firefox' or 'chrome'
			
/*       				chromeOptions: {
							args: ["--headless", "--disable-gpu", "--window-size=800x600"]
				},  */  
 
		},

		//multiCapabilities // parallel runs across multi-browsers

		// Framework to use is Jasmine.
		framework: 'jasmine2',

		suites: {

/* 			functional: [
				'../tests/',
				'../tests/'
				], */

			functional: [
				//'../tests/validateProductCheckout_spec.js',
				//'../tests/validateFillingContactUsForm_spec.js',
				//'../tests/validateEmailVerification_spec.js',
				'../tests/validateSubNewsletter_spec.js',
				//'../tests/validateSortOption_spec.js',
			],
			
			smoke: ['../smoke_tests/*_spec.js'],
			regression: ['../regression_tests/*_spec.js'],
			all : ['../*/*_spec.js'],
			selected : ['../tests/validateLoginToRPA_spec.js'],

		},

		jasmineNodeOpts: {
			defaultTimeoutInterval: 60000
		},

		onPrepare: function() {

			//allure_report_clean();
			//allure_log_clean();
			
			//browser.ignoreSynchronization=true;

			// --- allure - reporter ---			
			var AllureReporter = require('jasmine-allure-reporter');
			jasmine.getEnv().addReporter(new AllureReporter({
				allureReport: {
					resultsDir: '../snapshots/allure-results'
				}
			}));
			jasmine.getEnv().afterEach(function(done){
				browser.takeScreenshot().then(function (png) {
					allure.createAttachment('Screenshot', function () {
						return new Buffer(png, 'base64')
					}, 'image/png')();
					done();
				})
			});
			// --- allure - reporter ---			

			//browser.manage().timeouts().setScriptTimeout(60000); // script timeout

			//browser.manage().timeouts().implicitlyWait(30000); // implicit wait

		},

		onComplete: function () {
			//allure_report_deploy();
			//send_mail();
		},

};