import {Then, When} from 'cucumber';
import LoginPage from "../../pages/traditional/LoginPage";

When(/^I land on the login page of "([^"]*)" app$/, function (appVersion) {
    LoginPage.openPage(appVersion);
});
Then(/^I see logo on the page$/, function () {
    LoginPage.logoExists();
});
Then(/^I can see title on the page$/, function () {
    LoginPage.titleExists();
});
Then(/^I can see Username field on the page$/, function () {
    LoginPage.usernameFieldExists();
});
Then(/^I can see Password field on the page$/, function () {
    LoginPage.passwordFieldExists();
});
Then(/^I can see login button on the page$/, function () {
    LoginPage.loginButtonExists();
});
Then(/^I can see Remember Me checkbox on the page$/, function () {
    LoginPage.rememberMeLabelExists();
    LoginPage.rememberMeCheckBoxExists();
});
Then(/^I can see social networks icons on the page$/, function () {
    LoginPage.linkedInIconExists();
    LoginPage.twitterIconExists();
    LoginPage.facebookIconExists();
});
Then(/^I can see Username label on the page$/, function () {
    LoginPage.usernameLabelExists();
});
Then(/^I can see Username icon on the page$/, function () {
    LoginPage.usernameIconExists();
});
Then(/^I can see Password label on the page$/, function () {
    LoginPage.passwordLabelExists();
});
Then(/^I can see Password icon on the page$/, function () {
    LoginPage.passwordIconExists();
});
