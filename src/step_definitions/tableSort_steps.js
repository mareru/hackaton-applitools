import {When, Then} from 'cucumber';
import DashboardPage from "../pages/DashboardPage";

When(/^I click on Amount column header$/, function () {
    DashboardPage.clickAmountColumnHeader();
});
Then(/^Transaction table is sorted by Amount ascending$/, function () {
    DashboardPage.checkAmountColumnSortedAsc();
});
Then(/^Each row's data stayed intact$/, function () {
    DashboardPage.checkTransactionTableRows();
});
