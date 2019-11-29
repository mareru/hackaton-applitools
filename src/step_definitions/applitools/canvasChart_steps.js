import {When, Then} from 'cucumber';
import CanvasChartPage from "../../pages/applitools/CanvasChartPage";
import {STATUS_PASSED} from "../../helpers/traditional/constants";

let result;

When(/^I Compare expenses for \\2017 till \\2019$/, async function () {
    result = await CanvasChartPage.verifyChart();
});
Then(/^I can see chart with the data$/, async function () {
    await expect(result).to.not.equal(null);
    await expect(result.getStatus()).to.equal(STATUS_PASSED);
});
