const sel = require ('../data/selectors.json');
const data = require('../data/testData.json');
const exp = require('../data/expected.json');
const inputValues4 = require('../helpers/inputValues4andClick.js');

describe('Try again button is present', function () {

    it('TC-087 Image is displayed correctly at the story page', function () {
        browser.url('');
        inputValues4(data.name, data.gender.she, data.age, data.storyType);
        const tryAgain = $(sel.tryAgain).isDisplayed();
        expect(tryAgain).toEqual(true);
    });

    it('TC-087 Image is displayed correctly at the story page', function () {
        browser.url('');
        inputValues4(data.name, data.gender.she, data.age, data.storyType);
        const tryAgain = $(sel.tryAgain).getText();
        expect(tryAgain).toEqual(exp.tryAgain);
    });

});