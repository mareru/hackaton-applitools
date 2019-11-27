import {Then} from 'cucumber';
import LoginPage from "../../pages/applitools/LoginPage";

Then(/^After providing credentials, I should be successfully logged in$/, async function () {
    await LoginPage.canSuccessfullyLogIn();
});
Then(/^Providing just username will throw an error$/, async function () {
    await LoginPage.verifyMissingPassword();
});
