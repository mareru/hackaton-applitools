import {Then, When} from 'cucumber';
import LoginPage from "../../pages/applitools/LoginPage";

When(/^I land on the login page of "([^"]*)" app with Applitools$/, async function (appVersion) {
    await LoginPage.openPage(appVersion);
});
Then(/^All UI elements exist on the page$/, async function () {
 await LoginPage.verifyUIElementsExist();
});
