'use strict';

import {APP_VERSION_1, APP_VERSION_2, LOW_TIMEOUT} from "../helpers/constants";
import Helpers from "../helpers/Helpers";

export var rowsBeforeSortingClick;

class DashboardPage {

    get amountColumnHeader() {
        return $('#amount');
    }

    get amountColumnValues() {
        return $$('#transactionsTable > tbody > tr > td.text-right.bolder.nowrap > span');
    }

    get transactionTableRows() {
        return $$('#transactionsTable > tbody > tr');
    }

    get compareExpensesButton() {
        return $('#showExpensesChart');
    }

    get adImage1() {
        return $('#flashSale > img');
    }

    get adImage2() {
        return $('#flashSale2 > img');
    }

    verifyFirstAdImageExist() {
        Helpers.elemExistsAndIsDisplayed(this.adImage1);

        let adImgAttribute1 = this.adImage1.getAttribute("src");
        expect(adImgAttribute1).to.have.string('flashSale.gif');
    }

    verifySecondAdImageExist() {
        Helpers.elemExistsAndIsDisplayed(this.adImage2);

        let adImgAttribute2 = this.adImage2.getAttribute("src");
        expect(adImgAttribute2).to.have.string('flashSale2.gif');
    }

    clickAmountColumnHeader() {
        this.amountColumnHeader.click();
    }

    checkAmountColumnSortedAsc() {
        Helpers.isSortedAscending(this.amountColumnValues).should.equal(true);
    }

    checkTransactionTableRows() {
        let rowsAfterSorting = Helpers.recordTransactionTable(this.transactionTableRows);
        Helpers.isTransactionRowsIntact(rowsBeforeSortingClick, rowsAfterSorting).should.equal(true);
    }

    clickCompareExpensesButton() {
        this.compareExpensesButton.click();
    }

    verify(appVersion, displayAd = false) {
        if (appVersion === APP_VERSION_1) {
            displayAd? browser.waitForUrl(testdata.dashboard.urlV1WithShowAd, LOW_TIMEOUT, false) : browser.waitForUrl(testdata.dashboard.urlV1, LOW_TIMEOUT, false);
        } else if (appVersion === APP_VERSION_2) {
            displayAd ? browser.waitForUrl(testdata.dashboard.urlV2WithShowAd, LOW_TIMEOUT, false) : browser.waitForUrl(testdata.dashboard.urlV2, LOW_TIMEOUT, false);
        } else {
            throw new Error("Unsupported application version: " + appVersion);
        }
        rowsBeforeSortingClick = Helpers.recordTransactionTable(this.transactionTableRows);
        rowsBeforeSortingClick.sort((obj1, obj2) => {
            let amount1 = Helpers.convertTextToNumber(obj1.getAmountText());
            let amount2 = Helpers.convertTextToNumber(obj2.getAmountText());
            if (amount1 > amount2) {
                return 1;
            }
            if (amount1 < amount2) {
                return -1;
            }
            return 0;
        });
    }
}

export default new DashboardPage();
