'use strict';

import {MEDIUM_TIMEOUT} from "../../helpers/traditional/constants";
import LoginPage from "./LoginPage";
import Helpers from "../../helpers/traditional/Helpers";
// const {ConsoleLogHandler} = require('@applitools/eyes-sdk-core');

// Initialize the eyes SDK
const { Eyes } = require('@applitools/eyes-webdriverio');

const eyes = new Eyes();

// Set your private API key.
eyes.setApiKey(process.env.APPLITOOLS_API_KEY_HACKATHON);


class DashboardPage {

    get amountColumnHeader() {
        return $('#amount');
    }

    async verifySortOfTransactionTable() {
        let result = null;

        try {
            // eyes.setLogHandler(new ConsoleLogHandler(true));
            // Set browser to fullscreen
            // browser.windowHandleFullscreen();

            eyes.setForceFullPageScreenshot(true);

            eyes.setBatch("Hackhaton Batch", "Batch 1");

            // Start the test and set the browser's viewport size to
            await eyes.open(browser, 'Hackhaton batch scenarios', 'Transaction table sorted ascending by Amount');

            await eyes.checkWindow('Empty login page', MEDIUM_TIMEOUT);

            await LoginPage.login();

            await eyes.checkWindow('Dashboard page', MEDIUM_TIMEOUT);

            const amountColumnHeader = await this.amountColumnHeader;
            await Helpers.elemClick(amountColumnHeader);

            await eyes.checkWindow('Sorted transaction page by amount asc', MEDIUM_TIMEOUT);

            // End the test.
            result = await eyes.close();

        } finally {
            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();

        }
        return result;
    }
}

export default new DashboardPage();
