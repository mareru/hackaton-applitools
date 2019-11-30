'use strict';

import {LOW_TIMEOUT} from "./constants";
import TransactionTableRow from "./TransactionTableRow";

class Helpers {

    elemExistsAndIsDisplayed(element) {
        let isDisplayed = element.waitForDisplayed(LOW_TIMEOUT);
        isDisplayed.should.equal(true);
    }

    elemHasText(element, text) {
        element.getText().should.equal(text);
    }

    elemHasPlaceholder(element, text) {
        element.getAttribute('placeholder').should.equal(text);
    }

    async elemInputText(element, text) {
        await element.waitForDisplayed(LOW_TIMEOUT);
        element.clearValue();
        await element.setValue(text);
    }

    elemClick(element) {
        element.waitForEnabled(LOW_TIMEOUT);
        element.click();
    }

    alertMessageIsDisplayed(element, msg) {
        this.elemExistsAndIsDisplayed(element);
        this.elemHasText(element, msg);
    }

    getElemAmountValue(element) {
        let text = element.getText();
        return this.convertTextToNumber(text);
    }

    convertTextToNumber(text) {
        let amount = text.replace(/[^0-9.\-]+/g, "");
        return Number(amount);
    }

    isSortedAscending(elements) {
        let booleanArray = elements.map((element, index) => {
            let currentElem = elements[index];
            let nextElem = elements[index + 1];
            let currentAmount = this.getElemAmountValue(currentElem);
            let nextAmount = (typeof nextElem !== "undefined") ? this.getElemAmountValue(nextElem) : currentAmount + 1;
            return currentAmount < nextAmount;
        });

        const isTrue = (currentValue) => currentValue === true;
        return booleanArray.every(isTrue);
    }

    recordTransactionTable(table) {
        let array = [];
        table.forEach((row) => {
            array.push(new TransactionTableRow(row));
        });
        return array;
    }

    isEqualTransactionTableRows(row1, row2) {
        return row1.getStatusText() === row2.getStatusText() &&
            row1.getStatusIcon() === row2.getStatusIcon() &&
            row1.getDateText() === row2.getDateText() &&
            row1.getDateTime() === row2.getDateTime() &&
            row1.getDescriptionIcon() === row2.getDescriptionIcon() &&
            row1.getDescriptionText() === row2.getDescriptionText() &&
            row1.getCategoryColor() === row2.getCategoryColor() &&
            row1.getCategoryName() === row2.getCategoryName() &&
            row1.getAmountColor() === row2.getAmountColor() &&
            row1.getAmountText() === row2.getAmountText();
    }

    isTransactionRowsIntact(array1, array2) {
        if (array1.length !== array2.length) return false;
        // filter those rows that are equal
        let result = array1.filter((row1, index) => {
            let row2 = array2[index];
            return this.isEqualTransactionTableRows(row1, row2);
        });

        // number of rows that are equal must be the same as the number of items in starting array
        return result.length === array1.length;
    }

}

export default new Helpers();
