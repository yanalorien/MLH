const sel = require ('../data/selectors.json');
const data = require('../data/testData.json');
const inputValues4 = require('../helpers/inputValues4.js');

describe('data is displayed correctly in text', function () {

    it('TC-021 Name displayed correctly in text', function () {
        browser.url('');
        inputValues4(data.name, data.gender.she, data.age, data.storyType);
        const submit = $(sel.submit).click();
        expect(submit).toEqual(true);
    });

    // it('TC-021 Create button is clickable after 1-5 are filled in', function () {
    //     browser.url('');
    //     inputValues4(data.name, data.gender.she, data.age, data.storyType);
    //
    //     const submit = $(sel.submit).isEnabled();
    //     expect(submit).toEqual(true);
    // });
});
