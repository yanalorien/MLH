const sel = require ('../../data/selectors.json');

describe('Checking the main functionality', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 are filled in', function () {
            browser.url('');
            let name = $(sel.name).addValue('LadyBug');
            let gender = $$(sel.gender)[1].click();
            let age = $(sel.age).addValue('123');
            let click = $(sel.story).click();
            let story = $$(sel.storyType)[6].click();
            let submit = $(sel.submit).isEnabled();
            expect(submit).toEqual(true);
        });

    });

});