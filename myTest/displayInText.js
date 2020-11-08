const sel = require ('../data/selectors.json');
const exp = require ('../data/expected.json');
const data = require('../data/testData.json');
const test = require('../data/testAge.json');
const inputValues4 = require('../helpers/inputValues4.js');

describe('data is displayed correctly in text', function () {

    describe('Name data is displayed correctly in text', function () {

        it('TC-021 Name displayed correctly in text', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType);
            const submit = $(sel.submit).click();
            const finalText = $(sel.finalText).getText();
            const text = finalText.includes(data.name);
            expect(text).toEqual(true);
        });

    });

    describe('Age data is displayed correctly in text', function () {

        it('TC-021  displayed correctly in text', function () {
            browser.url('');
            inputValues4(test.name, test.gender.she, test.age.first, test.storyType);
            const submit = $(sel.submit).click();
            const finalText = $(sel.finalText).getText();
            const text = finalText.includes(exp.ageTestFirst);
            expect(text).toEqual(true);
        });

    });

});