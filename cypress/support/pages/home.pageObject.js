import PageObject from '../PageObject';

class HomePageObject extends PageObject {
  url = '/#/';

  get homeLink() {
    return cy.getByDataCy('home');
  }

  get profileLink() {
    return cy.getByDataCy('username-link');
  }

  get settingsLink() {
    return cy.getByDataCy('settings');
  }

  get signInNavigation() {
    return cy.getByDataCy('header-sign-in-btn');
  }

  get signUpInNavigation() {
    return cy.getByDataCy('header-sign-up-btn');
  }

  get articleLink() {
    return cy.getByDataCy('new-article-link');
  }

  get followBtn() {
    return cy.getByDataCy('follow-user-btn')
      .first();
  }

  get feedBtn() {
    return cy.getByDataCy('global-feed-btn');
  }

  get newTitleInBanner() {
    return cy.getByDataCy('banner-title');
  }

  get bodyUnderBanner() {
    return cy.getByDataCy('article-page-body');
  }

  get previewTitle() {
    return cy.getByDataCy('preview-title');
  }

  get previewDescription() {
    return cy.getByDataCy('preview-description');
  }

  get author() {
    return cy.getByDataCy('author-link');
  }

  get yourFeedBtn() {
    return cy.getByDataCy('your-feed-btn');
  }

  assertHeaderContainUsername(username) {
    this.profileLink
      .should('contain', username);
  }

  assertLoggingOut() {
    this.profileLink
      .should('not.exist');
  }

  checkProfileLinkForLogout() {
    this.profileLink
      .should('not.exist');
  }

  clickHomeLink() {
    this.homeLink
      .click();
  }

  clickSettingsLink() {
    this.settingsLink
      .click();
  }

  clickSignInNav() {
    this.signInNavigation
      .click();
  }

  clickArticleBtn() {
    this.articleLink
      .click();
  }

  clickGlobalFeedBtn() {
    this.feedBtn
      .click();
  }

  clickProfileLink() {
    this.profileLink
      .click();
  }

  clickFollowBtn() {
    this.followBtn
      .click();
  }

  clickAuthor() {
    this.author
      .click();
  };

  clickInDeletionOfArticle() {
    cy.getByDataCy('delete-article-btn')
      .first()
      .click();
  }

  clickInEditionOfArticle() {
    cy.getByDataCy('edit-article-btn')
      .first()
      .click();
  }

  clickYourFeedBtn() {
    this.yourFeedBtn
      .click();
  }

  assertFollowedUser() {
    this.followBtn
      .should('have.class', 'btn btn-sm pull-xs-right btn-primary');
  }

  assertUnfollowedUser() {
    this.followBtn
      .should('have.class', 'btn btn-sm pull-xs-right btn-outline-primary');
  }

  assertNewArticle(title, description) {
    this.newTitleInBanner
      .should('contain.text', title);
    this.bodyUnderBanner
      .should('contain.text', description);
  }

  assertTitleInBanner(title) {
    this.newTitleInBanner
      .should('contain.text', title);
  }

  assertBodyUnderBanner(body) {
    this.bodyUnderBanner
      .should('contain.text', body);
  }

  assertDeletedArticle(title, description) {
    cy.contains('[data-cy="preview-title"]', title)
      .should('not.exist');
    cy.contains('[data-cy="preview-description"]', description)
      .should('not.exist');
  }
}

export default HomePageObject;
