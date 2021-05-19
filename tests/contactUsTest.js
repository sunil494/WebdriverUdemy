const { expect } = require("chai");
var ContactUs_Page = require('../pageObjects/ContactUs_Page.js');

beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function() {

  it('Should be able to submit a successful submission via contact us form', function(done) {
	ContactUs_Page.submitAllInfoViaContactUsForm('Joe', 'Blogs', 'joe_blog123@outlook.com', 'Hello World!');
    });
  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {

	ContactUs_Page.setFirstName('Mike');
	ContactUs_Page.setLastName('Woods');
	ContactUs_Page.setEmail('Mike_Woods@mail.com');
	ContactUs_Page.clickSubmitButton();
	ContactUs_Page.confirmUnsuccessfulSubmission();

    });

  
  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {

	ContactUs_Page.setFirstName('Sarah');
	ContactUs_Page.setEmail('sarah_woods@mail.com');
	ContactUs_Page.clickSubmitButton();
	ContactUs_Page.confirmUnsuccessfulSubmission();

    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
	ContactUs_Page.setLastName('Jomes');
	ContactUs_Page.setEmail('sarah_woods@mail.com');
	ContactUs_Page.clickSubmitButton();
	ContactUs_Page.confirmUnsuccessfulSubmission();
    });
});