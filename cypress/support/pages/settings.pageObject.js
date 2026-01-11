import PageObject from '../PageObject';

class SettingsPageObject extends PageObject {
  get usernameInSettings() {
    return cy.getByDataCy('update-username');
  }

  get bioInSettings() {
    return cy.getByDataCy('update-bio');
  }

  get emailInSettings() {
    return cy.getByDataCy('update-email');
  }

  get passwordInSettings() {
    return cy.getByDataCy('update-password');
  }

  get updateSettingsBtn() {
    return cy.getByDataCy('update-settings');
  }

  get logoutBtn() {
    return cy.getByDataCy('logout');
  }

  get swalBtn() {
    return cy.get('.swal-button');
  }

  typeUserName(username) {
    return this.usernameInSettings
      .clear()
      .type(username);
  }

  typeBio(bio) {
    this.bioInSettings
      .clear()
      .type(bio);
  }

  typeEmail(email) {
    this.emailInSettings
      .clear()
      .type(email);
  }

  typePassword(password) {
    this.passwordInSettings
      .clear()
      .type(password);
  }

  clickUpdateSettingsBtn() {
    this.updateSettingsBtn
      .click();
  }

  clickLogoutBtn() {
    this.logoutBtn
      .click();
  }

  clickSwalBtn() {
    this.swalBtn
      .click();
  }

  assertUpdatedBio(bio) {
    this.bioInSettings
      .should('contain.value', bio);
  }

  assertUpdatedEmail(email) {
    this.emailInSettings
      .should('contain.value', email);
  }
}

export default SettingsPageObject;
