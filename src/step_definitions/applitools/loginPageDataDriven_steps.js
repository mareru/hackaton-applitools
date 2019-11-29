import {Then} from 'cucumber';
import LoginPage from "../../pages/applitools/LoginPage";
import {STATUS_PASSED} from "../../helpers/traditional/constants";

Then(/^After providing credentials, I should be successfully logged in$/, async function () {
    const result = await LoginPage.canSuccessfullyLogIn();
    await expect(result).to.not.equal(null);
    await expect(result.getStatus()).to.equal(STATUS_PASSED);
});
Then(/^Providing just username will throw an error$/, async function () {
    const result = await LoginPage.verifyMissingPassword();
    await expect(result.getStatus()).to.equal(STATUS_PASSED);
});
Then(/^Providing just password will throw an error$/, async function () {
    const result = await LoginPage.verifyMissingUsername();
    await expect(result.getStatus()).to.equal(STATUS_PASSED);
});
Then(/^Not providing credentials will throw an error$/, async function () {
    const result = await LoginPage.verifyMissingCredentials();
    await expect(result.getStatus()).to.equal(STATUS_PASSED);
});
