'use strict';

import {APP_VERSION_1, APP_VERSION_2} from "../../helpers/traditional/constants";
const {ConsoleLogHandler} = require('@applitools/eyes-sdk-core');

// Initialize the eyes SDK
const { Eyes, Target } = require('@applitools/eyes-webdriverio');

const eyes = new Eyes();

// Set your private API key.
eyes.setApiKey(process.env.APPLITOOLS_API_KEY_HACKATHON);

class LoginPage {

    openPage(appVersion, displayAd = false) {
        if (appVersion === APP_VERSION_1) {
            displayAd? browser.url('/hackathon.html?showAd=true') : browser.url('/hackathon.html');
        } else if (appVersion === APP_VERSION_2) {
            displayAd? browser.url('/hackathonV2.html?showAd=true') : browser.url('/hackathonV2.html');
        } else {
            throw new Error("Unsupported application version: " + appVersion);
        }
    }

    async verifyUIElementsExist() {
        try {
             eyes.setLogHandler(new ConsoleLogHandler(true));
            // Set browser to fullscreen
            // browser.windowHandleFullscreen();

            // Get the current size of the screen
            const viewportSize = browser.getWindowSize();

            // Start the test and set the browser's viewport size to
            await eyes.open(browser, 'Login Page', 'UI elements exist on login page', viewportSize);

            // Visual checkpoint #1.
            await eyes.check('Login Page', Target.window());

            // End the test.
            await eyes.close();

        } finally {
            await browser.deleteSession();
            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();

        }
    }
}

export default new LoginPage();
