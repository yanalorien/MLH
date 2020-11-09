const sel = require ('../data/selectors.json');
const data = require('../data/testData.json');
const exp = require('../data/expected.json');
const inputValues4 = require('../helpers/inputValues4andClick.js');

describe('Try again button', function () {

    it('TC-087 Try again button is present', function () {
        browser.url('');
        inputValues4(data.name, data.gender.she, data.age, data.storyType);
        const tryAgain = $(sel.tryAgain).isDisplayed();
        expect(tryAgain).toEqual(true);
    });

    it('TC-087 Try again button is correct', function () {
        browser.url('');
        inputValues4(data.name, data.gender.she, data.age, data.storyType);
        const tryAgain = $(sel.tryAgain).getText();
        expect(tryAgain).toEqual(exp.tryAgain);
    });

    it('TC-087 Try again button reloads the page', function () {
        browser.url('');
        inputValues4(data.name, data.gender.she, data.age, data.storyType);
        const tryAgain = $(sel.tryAgain).click();
        const pageReloaded = $(sel.homePage).isDisplayed();
        expect(pageReloaded).toEqual(true);
    });

});