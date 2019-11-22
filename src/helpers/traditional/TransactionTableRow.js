'use strict';

class TransactionTableRow {

    constructor(rowElement) {
        this.tableRow = rowElement;
    }

    getStatusIcon() {
        return this.tableRow.$('#transactionsTable > tbody > tr > td > span.status-pill').getAttribute('class');
    }

    getStatusText() {
        return this.tableRow.$('#transactionsTable > tbody > tr> td:nth-child(1) > span:nth-child(2)').getText();
    }

    getDateText() {
        return this.tableRow.$('#transactionsTable > tbody > tr > td:nth-child(2) > span:nth-child(1)').getText();
    }

    getDateTime() {
        return this.tableRow.$('#transactionsTable > tbody > tr > td:nth-child(2) > span.smaller.lighter').getText();
    }

    getDescriptionIcon() {
        return this.tableRow.$('#transactionsTable > tbody > tr > td.cell-with-media > img').getAttribute('src');
    }

    getDescriptionText() {
        return this.tableRow.$('#transactionsTable > tbody > tr > td.cell-with-media > span').getText();
    }

    getCategoryColor() {
        return this.tableRow.$('#transactionsTable > tbody > tr> td.text-center > a').getAttribute('class');
    }

    getCategoryName() {
        return this.tableRow.$('#transactionsTable > tbody > tr> td.text-center > a').getText();
    }

    getAmountColor() {
        return this.tableRow.$('#transactionsTable > tbody > tr > td.text-right.bolder.nowrap > span').getAttribute('class');
    }

    getAmountText() {
        return this.tableRow.$('#transactionsTable > tbody > tr > td.text-right.bolder.nowrap > span').getText();
    }

    toString() {
        return 'Status icon class: ' + this.getStatusIcon() + '\n' +
            'Status text: ' + this.getStatusText() + '\n' +
            'Date text: ' + this.getDateText() + '\n' +
            'Date time: ' + this.getDateTime() + '\n' +
            'Description icon src: ' + this.getDescriptionIcon() + '\n' +
            'Description text: ' + this.getDescriptionText() + '\n' +
            'Category color: ' + this.getCategoryColor() + '\n' +
            'Category name: ' + this.getCategoryName() + '\n' +
            'Amount color: ' + this.getAmountColor() + '\n' +
            'Amount text: ' + this.getAmountText() + '\n';
    }
}

export default TransactionTableRow;
