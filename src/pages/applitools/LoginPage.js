'use strict';

import {APP_VERSION_1, APP_VERSION_2} from "../../helpers/traditional/constants";
import Helpers from "../../helpers/traditional/Helpers";
const {ConsoleLogHandler} = require('@applitools/eyes-sdk-core');

// Initialize the eyes SDK
const { Eyes, Target } = require('@applitools/eyes-webdriverio');

const eyes = new Eyes();

// Set your private API key.
eyes.setApiKey(process.env.APPLITOOLS_API_KEY_HACKATHON);

class LoginPage {

    get usernameField() {
        return $('#username');
    }

    get passwordField() {
        return $('#password');
    }


    get loginButton() {
        return $('#log-in');
    }

    async openPage(appVersion, displayAd = false) {
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
            // eyes.setLogHandler(new ConsoleLogHandler(true));
            // Set browser to fullscreen
            // browser.windowHandleFullscreen();

            eyes.setForceFullPageScreenshot(true);
            // Start the test and set the browser's viewport size to
            await eyes.open(browser, 'Login Page', 'UI elements exist on login page'); // {width: 1536, height: 674}

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

    async canSuccessfullyLogIn() {
        try {
            // eyes.setLogHandler(new ConsoleLogHandler(true));
            // Set browser to fullscreen
            // browser.windowHandleFullscreen();

            eyes.setForceFullPageScreenshot(true);

            // Set Batch Name and ID
            eyes.setBatch("Login scenarios", "First Batch");

            // Start the test and set the browser's viewport size to
            await eyes.open(browser, 'Login Page Scenarios', 'Successful login'); // {width: 1536, height: 674}

            const usernameField = await this.usernameField;
            usernameField.click();
            Helpers.elemInputText(usernameField, testdata.login.username);

            const passwordField = await this.passwordField;
            passwordField.click();
            Helpers.elemInputText(passwordField, testdata.login.password);

            const loginButton = await this.loginButton;
            loginButton.click();

            // Visual checkpoint #1.
            await eyes.check('Check successful login ', Target.window());

            // End the test.
            await eyes.close();

           /* // Start the test and set the browser's viewport size to
            await eyes.open(browser, 'Login Page Scenarios', 'Missing password error'); // {width: 1536, height: 674}

            usernameField.click();
            Helpers.elemInputText(usernameField, testdata.login.username);

            loginButton.click();

            // Visual checkpoint #1.
            await eyes.check('Check missing password error', Target.window());

            // End the test.
            await eyes.close();*/

        } finally {
            await browser.deleteSession();
            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();

        }
    }

    async verifyMissingPassword() {
        try {
            // eyes.setLogHandler(new ConsoleLogHandler(true));
            // Set browser to fullscreen
            // browser.windowHandleFullscreen();

            eyes.setForceFullPageScreenshot(true);

            // Set Batch Name and ID
            eyes.setBatch("Login scenarios", "First Batch");

            // Start the test and set the browser's viewport size to
            await eyes.open(browser, 'Login Page Scenarios', 'Missing password error'); // {width: 1536, height: 674}

            const usernameField = await this.usernameField;
            usernameField.click();
            Helpers.elemInputText(usernameField, testdata.login.username);

            const loginButton = await this.loginButton;
            loginButton.click();

            // Visual checkpoint #1.
            await eyes.check('Check missing password error', Target.window());

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
