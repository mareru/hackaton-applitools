import {Then, Given} from 'cucumber';
import LoginPage from "../../pages/traditional/LoginPage";
import DashboardPage from "../../pages/traditional/DashboardPage";

Given(/^I am logged in "([^"]*)" app with display ad images$/, function (appVersion) {
    LoginPage.openPage(appVersion, true);
    LoginPage.inputUsername(testdata.login.username);
    LoginPage.inputPassword(testdata.login.password);
    LoginPage.login();
    DashboardPage.verify(appVersion, true);
});
Then(/^I can see first ad image on the page$/, function () {
    DashboardPage.verifyFirstAdImageExist();
});
Then(/^I can see second ad image on the page$/, function () {
    DashboardPage.verifySecondAdImageExist();
});
