'use strict';
import {APP_VERSION_1, APP_VERSION_2, LOW_TIMEOUT} from "../helpers/constants";

class CanvasChartPage {

    get showDataForNextYearButton() {
        return $('#addDataset');
    }

    clickShowDataForNextYearButton() {
        this.showDataForNextYearButton.click();
    }

    verify(appVersion) {
        if (appVersion === APP_VERSION_1) {
            browser.waitForUrl(testdata.chart.urlV1, LOW_TIMEOUT, false);
        } else if (appVersion === APP_VERSION_2) {
            browser.waitForUrl(testdata.chart.urlV2, LOW_TIMEOUT, false);
        } else {
            throw new Error("Unsupported application version: " + appVersion);
        }
    }
}

export default new CanvasChartPage();
