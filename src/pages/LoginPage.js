'use strict';

import {APP_VERSION_1, APP_VERSION_2} from "../helpers/constants";
import Helpers from "../helpers/Helpers";

class LoginPage {

    get logo() {
        return $('img[src*="logo"]');
    }

    get title() {
        return $('h4.auth-header');
    }

    get usernameLabel() {
        return $('body > div > div > form > div:nth-child(1) > label');
    }

    get usernameField() {
        return $('#username');
    }

    get usernameIcon() {
        return $('div.os-icon-user-male-circle');
    }

    get passwordLabel() {
        return $('body > div > div > form > div:nth-child(2) > label');
    }

    get passwordField() {
        return $('#password');
    }

    get passwordIcon() {
        return $('div.os-icon-fingerprint');
    }

    get loginButton() {
        return $('#log-in');
    }

    get rememberMeCheckBox() {
        return $('input[type=\'checkbox\']');
    }

    get rememberMeLabel() {
        return $('div.form-check-inline > label');
    }

    get twitterIcon() {
        return $('img[src*=\'twitter\']');
    }

    get facebookIcon() {
        return $('img[src*=\'facebook\']');
    }

    get linkedInIcon() {
        return $('img[src*=\'linkedin\']');
    }

    get alertMessage() {
        return $('div[role="alert"].alert-warning');
    }

    openPage(appVersion) {
        if (appVersion === APP_VERSION_1) {
            browser.url('/hackathon.html');
        } else if (appVersion === APP_VERSION_2) {
            browser.url('/hackathonV2.html');
        } else {
            throw new Error("Unsupported application version: " + appVersion);
        }
    }

    logoExists() {
        Helpers.elemExistsAndIsDisplayed(this.logo);
    }

    titleExists() {
        Helpers.elemExistsAndIsDisplayed(this.title);
        Helpers.elemHasText(this.title, loc.login.title);
    }

    usernameLabelExists() {
        Helpers.elemExistsAndIsDisplayed(this.usernameLabel);
        Helpers.elemHasText(this.usernameLabel, loc.login.usernameLbl);
    }

    usernameFieldExists() {
        Helpers.elemExistsAndIsDisplayed(this.usernameField);
        Helpers.elemHasPlaceholder(this.usernameField, loc.login.usernamePlaceholderText);
    }

    usernameIconExists() {
        Helpers.elemExistsAndIsDisplayed(this.usernameIcon);
    }

    passwordLabelExists() {
        Helpers.elemExistsAndIsDisplayed(this.passwordLabel);
        Helpers.elemHasText(this.passwordLabel, loc.login.passwordLbl);
    }

    passwordFieldExists() {
        Helpers.elemExistsAndIsDisplayed(this.passwordField);
        Helpers.elemHasPlaceholder(this.passwordField, loc.login.passwordPlaceholderText);
    }

    passwordIconExists() {
        Helpers.elemExistsAndIsDisplayed(this.passwordIcon);
    }

    loginButtonExists() {
        Helpers.elemExistsAndIsDisplayed(this.loginButton);
        Helpers.elemHasText(this.loginButton, loc.login.loginButtonText);
    }

    rememberMeCheckBoxExists() {
        Helpers.elemExistsAndIsDisplayed(this.rememberMeCheckBox);
    }

    rememberMeLabelExists() {
        Helpers.elemExistsAndIsDisplayed(this.rememberMeLabel);
        Helpers.elemHasText(this.rememberMeLabel, loc.login.rememberMeLbl);
    }

    twitterIconExists() {
        Helpers.elemExistsAndIsDisplayed(this.twitterIcon);
    }

    facebookIconExists() {
        Helpers.elemExistsAndIsDisplayed(this.facebookIcon);
    }

    linkedInIconExists() {
        Helpers.elemExistsAndIsDisplayed(this.linkedInIcon);
    }

    inputUsername(text) {
        Helpers.elemInputText(this.usernameField, text);
    }

    inputPassword(text) {
        Helpers.elemInputText(this.passwordField, text);
    }

    login() {
        this.loginButton.click();
    }

    alertMessageForPassIsDisplayed() {
        Helpers.alertMessageIsDisplayed(this.alertMessage, loc.login.passwordAlertMsg);
    }

    alertMessageForUsernameIsDisplayed() {
        Helpers.alertMessageIsDisplayed(this.alertMessage, loc.login.usernameAlertMsg);
    }

    alertMessageForUsernameAndPassIsDisplayed() {
        Helpers.alertMessageIsDisplayed(this.alertMessage, loc.login.usernameAndPasswordAlertMsg);
    }
}

export default new LoginPage();
