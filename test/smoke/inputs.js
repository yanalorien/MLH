const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json')

describe('Inputs', function () {

    describe('Inputs are displayed', function () {

        it('TC-014 Name', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const name = $(sel.name).isDisplayed()
            expect(name).toEqual(true);
        });

        it('TC-015 Gender He', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-016 Gender She', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-017 Gender It', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });

        it('TC-018 Age', function () {
            const age = $(sel.age).isDisplayed();
            expect(age).toEqual(true);
        });

        it('TC-019 Story', function () {
            const story = $(sel.story).isDisplayed();
            expect(story).toEqual(true);
        });

        it('TC-020 Create', function () {
            const create = $(sel.submit).isDisplayed();
            expect(create).toEqual(true);
        });
    });

    describe('Placeholders are correct', function () {

        it('TC-021 Name placeholder = Hero\'s name', function () {
            const placeholder = $(sel.name).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.placeholderName);
        });

        t('TC-022 Gender radio button names = he', function () {
            const text1 = $$(sel.radioLabel)[0].getText();
            expect(text1).toEqual(exp.radioText1);
        });

        it('TC-023 Gender radio button names = she', function () {
            const text2 = $$(sel.radioLabel)[1].getText();
            expect(text2).toEqual(exp.radioText2);
        });

        it('TC-024 Gender radio button names = it', function () {
            const text3 = $$(sel.radioLabel)[2].getText();
            expect(text3).toEqual(exp.radioText3);
        });

        it('TC-025 Age placeholder = Hero\'s age', function () {
            const placeholder = $(sel.age).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.placeholderAge);
        });

        it('TC-026 Story placeholder = Type of the story', function () {
            const placeholder = $(sel.storyPlaceholder).getText();
            expect(placeholder).toEqual(exp.placeholderStory);
        });

        it('TC-027 Image placeholder = drag and drop your image here or browse', function () {
            const placeholder = $(sel.imagePlaceholder).getText();
            expect(placeholder).toEqual(exp.placeholderImage);
        });

        it('TC-028 Submit button = Create!', function () {
            const button = $(sel.submitName).getText();
            expect(button).toEqual(exp.submitName);
        });

    });

});
