import {LOW_TIMEOUT} from "./constants";

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

    elemInputText(element, text) {
        element.waitForDisplayed(LOW_TIMEOUT);
        element.clearValue();
        element.setValue(text);
    }

    alertMessageIsDisplayed(element, msg) {
        this.elemExistsAndIsDisplayed(element);
        this.elemHasText(element, msg);
    }
}
export default new Helpers();
