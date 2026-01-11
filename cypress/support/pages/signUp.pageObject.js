import PageObject from '../PageObject';

class SignUpPageObject extends PageObject {
  url = '/#/register';

  get usernameInput() {
    return cy.getByDataCy('username-sign-up');
  }

  get emailInput() {
    return cy.getByDataCy('email-sign-up');
  }

  get passwordInput() {
    return cy.getByDataCy('password-sign-up');
  }

  get signUpBtn() {
    return cy.getByDataCy('sign-up-btn');
  }

  get swalBtn() {
    return cy.get('.swal-button');
  }

  typeUserName(username) {
    this.usernameInput
      .type(username);
  }

  typeEmail(email) {
    this.emailInput
      .type(email);
  }

  typePassword(password) {
    this.passwordInput
      .type(password);
  }

  clickSignUpBtn() {
    this.signUpBtn
      .click();
  }

  clickSwalBtn() {
    this.swalBtn
      .click();
  }
}

export default SignUpPageObject;
