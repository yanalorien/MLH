const sel = require ('../data/selectors.json');
const data = require('../data/testData.json');
const inputValues4 = require('../helpers/inputValues4.js');

describe('Create button is clickable', function () {

    it('TC-021 Create button is clickable after 1-4 are filled in', function () {
        browser.url('');
        inputValues4(data.name, data.gender.she, data.age, data.storyType);
        const submit = $(sel.submit).isEnabled();
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