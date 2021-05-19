class ContactUs_Page{
    get firstName() { return $("[name='first_name']");}
    get lastName() { return $("[name='last_name']");}
    get comment() { return $("textarea");}
    get email() { return $("[name='email']");}
    get submitButton() { return $("[type='submit']"); }
    get successfulSubmissionHeader() { return $("#contact_reply h1"); }
    get unsuccessfulSubmissionHeader() { return $("body"); }


setFirstName(firstName){
    return this.firstName.setValue(firstName);
}

setLastName(lastName){
    return this.lastName.setValue(lastName);
}

setEmail(email){
    return this.email.setValue(email);
}

setComment(comment){
    return this.comment.setValue(comment);
}

clickSubmitButton(){
    return this.submitButton.click();
}

submitAllInfoViaContactUsForm(firstName,lastName,email,comment){
    if(firstName){
        this.firstName.setValue(firstName);
    }
    if(lastName){
        this.lastName.setValue(lastName);
    }
    if(email){
        this.email.setValue(email);
    }
    if(comment){
        this.comment.setValue(comment);
    }
    this.submitButton.click();
    this.confirmSuccessfulSubmission();
}


confirmSuccessfulSubmission(){
    var validateSubmissionHeader = browser.waitUntil(function(){
        var successfulSubmissionHeader = "#contact_reply h1";
        return browser.getText(successfulSubmissionHeader) == 'Thank You for your Message!';
    }, 3000)
    expect(validateSubmissionHeader, 'Successful Submission Message does not Exist').to.be.true;
}

confirmUnsuccessfulSubmission(){
    var unsuccessfulSubmissionHeader = 'body';
    var validateSubmissionHeader = browser.waitUntil(function(){
        return browser.getText(unsuccessfulSubmissionHeader) == 'Error: all fields are required';
    }, 3000)
    expect(browser.getText(unsuccessfulSubmissionHeader)).to.include('Error: all fields are required');
}
}

module.exports = new ContactUs_Page();