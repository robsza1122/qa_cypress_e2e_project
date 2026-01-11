/// <reference types="cypress" />
/// <reference types="../support" />

import HomePageObject from '../support/pages/home.pageObject';
import ArticlePageObject from '../support/pages/Article.pageObject';
import SignUpPageObject from '../support/pages/signUp.pageObject';
import generateArticle from '../support/utils/generateArticle';
import generateUser from '../support/utils/generateUser';

const homeInPage = new HomePageObject();
const articleInPage = new ArticlePageObject();
const signUpPage = new SignUpPageObject();

describe('Follow/unfollow button', () => {
  beforeEach(() => {
    signUpPage.visit();
  });

  it('should provide an ability to follow the another user', () => {
    const { username, email, password } = generateUser();
    const { title, description, body, tags } = generateArticle();

    signUpPage.typeUserName(username);
    signUpPage.typeEmail(email);
    signUpPage.typePassword(password);
    signUpPage.clickSignUpBtn();
    signUpPage.clickSwalBtn();
    articleInPage.clickArticleBtn();
    articleInPage.typeTitle(title);
    articleInPage.typeDescription(description);
    articleInPage.typeBody(body);
    articleInPage.typeTags(tags);
    articleInPage.handleAddingArticle();
    homeInPage.clickHomeLink();
    homeInPage.clickYourFeedBtn();
    homeInPage.clickFollowBtn();
    homeInPage.assertFollowedUser();
  });

  it('should provide an ability to unfollow the another user', () => {
    const { username, email, password } = generateUser();
    const { title, description, body, tags } = generateArticle();

    signUpPage.typeUserName(username);
    signUpPage.typeEmail(email);
    signUpPage.typePassword(password);
    signUpPage.clickSignUpBtn();
    signUpPage.clickSwalBtn();
    articleInPage.clickArticleBtn();
    articleInPage.typeTitle(title);
    articleInPage.typeDescription(description);
    articleInPage.typeBody(body);
    articleInPage.typeTags(tags);
    articleInPage.handleAddingArticle();
    homeInPage.clickHomeLink();
    homeInPage.clickYourFeedBtn();
    homeInPage.clickFollowBtn();
    homeInPage.clickFollowBtn();
    homeInPage.assertUnfollowedUser();
  });
});
