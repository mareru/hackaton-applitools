import {Then, Given} from 'cucumber';
import LoginPage from "../../pages/applitools/LoginPage";
import {STATUS_PASSED} from "../../helpers/traditional/constants";

Given(/^I open login page of "([^"]*)" app with display ad images$/, async function (appVersion) {
    await LoginPage.openPage(appVersion, true);
});
Then(/^I can see ad images displayed on the page$/, async function () {
    const result = await LoginPage.verifyDisplayOfAdImages();
    await expect(result).to.not.equal(null);
    await expect(result.getStatus()).to.equal(STATUS_PASSED);
});
