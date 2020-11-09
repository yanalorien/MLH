const sel = require ('../data/selectors.json');
const test = require ('../data/testStory.json');
const inputValues4 = require('../helpers/inputValues4.js');

describe('Type of stories are shown correctly at the story page', function () {

    it('TC-133 Type of story = Overcoming the Monster', function () {
        browser.url('');
        inputValues4(test.name, test.gender, test.age, test.storyType.overcoming);
        const submit = $(sel.submit).click();
        const storyTitle = $(sel.storyTitle);
        expect(storyTitle).toHaveTextContaining("...");
    });

    it('TC-134 Type of story = Rebirth', function () {
        browser.url('');
        inputValues4(test.name, test.gender, test.age, test.storyType.rebirth);
        const submit = $(sel.submit).click();
        const storyTitle = $(sel.storyTitle);
        expect(storyTitle).toHaveTextContaining("...");
    });

    it('TC-135 Type of story = Quest', function () {
        browser.url('');
        inputValues4(test.name, test.gender, test.age, test.storyType.quest);
        const submit = $(sel.submit).click();
        const storyTitle = $(sel.storyTitle);
        expect(storyTitle).toHaveTextContaining("...");
    });

    it('TC-136 Type of story = Journey and Return', function () {
        browser.url('');
        inputValues4(test.name, test.gender, test.age, test.storyType.journey);
        const submit = $(sel.submit).click();
        const storyTitle = $(sel.storyTitle);
        expect(storyTitle).toHaveTextContaining("...");
    });

    it('TC-137 Type of story = Rags and Riches', function () {
        browser.url('');
        inputValues4(test.name, test.gender, test.age, test.storyType.rags);
        const submit = $(sel.submit).click();
        const storyTitle = $(sel.storyTitle);
        expect(storyTitle).toHaveTextContaining("...");
    });

    it('TC-138 Type of story = Tragedy', function () {
        browser.url('');
        inputValues4(test.name, test.gender, test.age, test.storyType.tragedy);
        const submit = $(sel.submit).click();
        const storyTitle = $(sel.storyTitle);
        expect(storyTitle).toHaveTextContaining("...");
    });

    it('TC-139 Type of story = Comedy', function () {
        browser.url('');
        inputValues4(test.name, test.gender, test.age, test.storyType.comedy);
        const submit = $(sel.submit).click();
        const storyTitle = $(sel.storyTitle);
        expect(storyTitle).toHaveTextContaining("Two Cats And A");
    });

});