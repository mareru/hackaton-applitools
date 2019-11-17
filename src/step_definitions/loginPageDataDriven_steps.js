import {Then, When} from 'cucumber';
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";

When(/^I enter username$/, function () {
    LoginPage.inputUsername(testdata.login.username);
});
When(/^I enter password$/, function () {
    LoginPage.inputPassword(testdata.login.password);
});
Then(/^I should be logged in to the application "([^"]*)"$/, function (appVersion) {
    DashboardPage.verify(appVersion);
});
When(/^I do not enter password$/, function () {
    LoginPage.inputPassword("");
});
Then(/^An error is thrown for the missing password$/, function () {
    LoginPage.alertMessageForPassIsDisplayed();
});
When(/^I do not enter username$/, function () {
    LoginPage.inputUsername("");
});
Then(/^An error is thrown for the missing username$/, function () {
    LoginPage.alertMessageForUsernameIsDisplayed();
});
Then(/^An error is thrown for the missing username and password$/, function () {
    LoginPage.alertMessageForUsernameAndPassIsDisplayed();
});
When(/^I click login button$/, function () {
    LoginPage.login();
});
