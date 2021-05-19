const { expect } = require("chai");

describe('Test Checkbox Buttons Page', function() {
	browser.url("Dropdown-Checkboxes-RadioButtons/index.html");
		browser.setViewportSize({
			width: 1200,
			height: 800
		})

	it('Should be able to focus on checkbox button elements', function(done) {
        browser.click('//*[@id="checkboxes"]/label[1]/input');
        var radioButton1 = browser.hasFocus('//*[@id="checkboxes"]/label[1]/input');
        console.log('Checkbox button one has value of: ' + radioButton1);
        expect(radioButton1, 'The checkbox(one)should have focus!').to.be.true;
		
        
        var radioButton2 = browser.hasFocus('//*[@id="checkboxes"]/label[3]/input');
        console.log('Checkbox button one has value of: ' + radioButton2);
        expect(radioButton2, 'The checkbox(two)should have focus!').to.be.false;
	});
});