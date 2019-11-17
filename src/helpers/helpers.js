class Helpers {

    elemExistsAndIsDisplayed(element) {
        //element.waitForDisplayed(LOW_TIMEOUT);
        element.isExisting().should.equal(true);
        element.isDisplayed().should.equal(true);
    }

    elemHasText(element, text) {
        element.getText().should.equal(text);
    }

    elemHasPlaceholder(element, text) {
        element.getAttribute('placeholder').should.equal(text);
    }
}
export default new Helpers();
