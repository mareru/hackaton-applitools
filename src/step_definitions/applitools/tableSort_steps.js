import {Then, When, Given} from 'cucumber';
import LoginPage from "../../pages/applitools/LoginPage";
import DashboardPage from "../../pages/applitools/DashboardPage";
import {STATUS_PASSED} from "../../helpers/traditional/constants";

let result;

When(/^I sort Transaction table by Amount column$/, async function () {
    result = await DashboardPage.verifySortOfTransactionTable();
});
Then(/^Transaction table is sorted by Amount ascending and all data stayed intact$/, async function () {
    await expect(result).to.not.equal(null);
    await expect(result.getStatus()).to.equal(STATUS_PASSED);
});
Given(/^I open login page of "([^"]*)" app$/, async function (appVersion) {
    await LoginPage.openPage(appVersion);
});
