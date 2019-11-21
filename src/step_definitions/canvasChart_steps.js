import {When, Then, Given} from 'cucumber';
import DashboardPage from "../pages/DashboardPage";
import CanvasChartPage from "../pages/CanvasChartPage";

When(/^I click Compare Expenses button$/, function () {
    DashboardPage.clickCompareExpensesButton();
});
Given(/^I land on chart page of "([^"]*)" app$/, function (appVersion) {
    DashboardPage.clickCompareExpensesButton();
    CanvasChartPage.verify(appVersion);
});
When(/^I click Show data for next year button$/, function () {
    CanvasChartPage.clickShowDataForNextYearButton();
});
Then(/^I can see chart with data for (\d+) and (\d+)$/, function (year1, year2) {
    // NOTE:
    // I couldn't implement this validation step because webdriver.io as e2e testing framework
    // doesn't provide mechanism in order to manipulate data inside canvas HTML tag element
});
Then(/^I can see chart with data for (\d+)$/, function (year) {
    // NOTE:
    // I couldn't implement this validation step because webdriver.io as e2e testing framework
    // doesn't provide mechanism in order to manipulate data inside canvas HTML tag element
});
