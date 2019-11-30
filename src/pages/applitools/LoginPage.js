'use strict';

import {APP_VERSION_1, APP_VERSION_2, MEDIUM_TIMEOUT} from "../../helpers/traditional/constants";
import Helpers from "../../helpers/traditional/Helpers";
// const {ConsoleLogHandler} = require('@applitools/eyes-sdk-core');

// Initialize the eyes SDK
const { Eyes, Target, MatchLevel } = require('@applitools/eyes-webdriverio');

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

            eyes.setBatch("Hackhaton Batch", "Batch 1");

            // Start the test and set the browser's viewport size to
            await eyes.open(browser, 'Hackhaton batch scenarios', 'UI elements exist on login page'); // {width: 1536, height: 674}

            // Visual checkpoint #1.
            await eyes.checkWindow('Login Page', MEDIUM_TIMEOUT);

            // End the test.
            await eyes.close();

        } finally {
            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();

        }
    }

    async canSuccessfullyLogIn() {
        let result = null;

        try {
            // eyes.setLogHandler(new ConsoleLogHandler(true));
            // Set browser to fullscreen
            // browser.windowHandleFullscreen();

            eyes.setForceFullPageScreenshot(true);

            // Set Batch Name and ID
            eyes.setBatch("Hackhaton Batch", "Batch 1");

            // Start the test and set the browser's viewport size to
            await eyes.open(browser, 'Hackhaton batch scenarios', 'Successful login'); // {width: 1536, height: 674}

            await eyes.checkWindow('Empty login page', MEDIUM_TIMEOUT);

            await this.login();

            // Visual checkpoint #1.
            // await eyes.check('Check successful login ', Target.window());
            await eyes.checkWindow('Dashboard page', MEDIUM_TIMEOUT);

            // End the test.
            //let status = await eyes.close();

           /* await console.log("###################################");
            await console.log(status.getMatches());
            await console.log(status.getMismatches());
            await console.log(status.getMissing());
            await console.log(status.getStatus());
            await console.log(status.getIsDifferent());
            await console.log("###################################");*/

            result = await eyes.close();

        } catch (e) {
            console.log(e.getText);
        } finally {
            // If the test was aborted before eyes.close was called ends the test as aborted.
             await eyes.abortIfNotClosed();

        }
        return result;
    }


    async login() {
        const usernameField = await this.usernameField;
        await Helpers.elemInputText(usernameField, testdata.login.username);

        const passwordField = await this.passwordField;
        await Helpers.elemInputText(passwordField, testdata.login.password);

        const loginButton = await this.loginButton;
        await loginButton.click();
    }

    async verifyMissingPassword() {
        let result = null;
        try {
            // eyes.setLogHandler(new ConsoleLogHandler(true));
            // Set browser to fullscreen
            // browser.windowHandleFullscreen();

            eyes.setForceFullPageScreenshot(true);

            // Set Batch Name and ID
            eyes.setBatch("Hackhaton Batch", "Batch 1");

            // Start the test and set the browser's viewport size to
            await eyes.open(browser, 'Hackhaton batch scenarios', 'Missing password error'); // {width: 1536, height: 674}

            await eyes.check('Empty login page', Target.window());

            const usernameField = await this.usernameField;
            await Helpers.elemInputText(usernameField, testdata.login.username);

            const loginButton = await this.loginButton;
            await loginButton.click();


            // Visual checkpoint #1.
            await eyes.check('Check missing password error', Target.window());

            // End the test.
            result = await eyes.close();

        } finally {
            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();
        }
        return result;
    }

    async verifyMissingUsername() {
        let result = null;
        try {
            // eyes.setLogHandler(new ConsoleLogHandler(true));
            // Set browser to fullscreen
            // browser.windowHandleFullscreen();

            eyes.setForceFullPageScreenshot(true);

            // Set Batch Name and ID
            eyes.setBatch("Hackhaton Batch", "Batch 1");

            // Start the test and set the browser's viewport size to
            await eyes.open(browser, 'Hackhaton batch scenarios', 'Missing username error');

            await eyes.check('Empty login page', Target.window());

            const passwordField = await this.passwordField;
            await Helpers.elemInputText(passwordField, testdata.login.password);

            const loginButton = await this.loginButton;
            await loginButton.click();


            // Visual checkpoint #1.
            await eyes.check('Check missing username error', Target.window());

            // End the test.
            result = await eyes.close();

        } finally {
            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();
        }
        return result;
    }

    async verifyMissingCredentials() {
        let result = null;
        try {
            // eyes.setLogHandler(new ConsoleLogHandler(true));
            // Set browser to fullscreen
            // browser.windowHandleFullscreen();

            eyes.setForceFullPageScreenshot(true);

            // Set Batch Name and ID
            eyes.setBatch("Hackhaton Batch", "Batch 1");

            // Start the test and set the browser's viewport size to
            await eyes.open(browser, 'Hackhaton batch scenarios', 'Missing credentials error');

            await eyes.check('Empty login page', Target.window());

            const loginButton = await this.loginButton;
            await loginButton.click();


            // Visual checkpoint #1.
            await eyes.check('Check missing credentials error', Target.window());

            // End the test.
            result = await eyes.close();

        } finally {
            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();
        }
        return result;
    }

    async verifyDisplayOfAdImages() {
        let result = null;
        try {
            // eyes.setLogHandler(new ConsoleLogHandler(true));
            // Set browser to fullscreen
            // browser.windowHandleFullscreen();

            eyes.setForceFullPageScreenshot(true);
            eyes.setMatchLevel(MatchLevel.Layout);

            eyes.setBatch("Hackhaton Batch", "Batch 1");

            // Start the test and set the browser's viewport size to
            await eyes.open(browser, 'Hackhaton batch scenarios', 'Ad images displayed');

            await eyes.check('Empty login page', Target.window());

            this.login();

            // Visual checkpoint #1.
            await eyes.check('Check ad images are displayed', Target.window());

            // End the test.
            result = await eyes.close();

        } finally {
            // If the test was aborted before eyes.close was called ends the test as aborted.
            await eyes.abortIfNotClosed();
        }
        return result;
    }
}

export default new LoginPage();
