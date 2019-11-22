import {Then, When} from 'cucumber';
import LoginPage from "../../pages/applitools/LoginPage";

When(/^I land on the login page of "([^"]*)" app with Applitools$/, function (appVersion) {
    LoginPage.openPage(appVersion);
});
Then(/^All UI elements exist on the page$/, function () {
 LoginPage.verifyUIElementsExist();
});
