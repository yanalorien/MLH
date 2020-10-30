const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json')

describe('My Little Hero', function () {

    describe('Field is present, question is correct, placeholder is correct', function () {

        it('TC-001 Header is present', function (){
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-002 Header = My Little Hero', function () {
            const text = $(sel.header).getText();
            expect(text).toEqual(exp.labelHeader);
        });

        it('TC-003 Description text is present', function () {
            const description = $(sel.text).isDisplayed();
            expect(description).toEqual(true);
        });

        it('TC-004 Description text = Let\'s create your own HERO! It\'s super easy with our application!', function () {
            const text = $(sel.text).getText();
            expect(text).toEqual(exp.descriptionText);
        });

        it('TC-005 Label for name is present', function () {
            const label = $$(sel.label)[0].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-006 Label for name = 1. What is your HERO\'s name?', function () {
            const text = $$(sel.label)[0].getAttribute('title');
            expect(text).toEqual(exp.labelName);
        });

        it('TC-007 Name field is present', function () {
            const field = $(sel.name).isDisplayed();
            expect(field).toEqual(true);
        });

        it('TC-008 Name placeholder = Hero\'s name', function () {
            const placeholder = $(sel.name).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.placeholderName);
        });

        it('TC-009 Label for gender is present', function () {
            const label = $$(sel.label)[1].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-010 Label for gender = 2. Please choose a gender.', function () {
            const text = $$(sel.label)[1].getAttribute('title');
            expect(text).toEqual(exp.labelGender);
        });

        it('TC-011 Gender radio buttons are present', function () {
            const button = ($$(sel.gender)[0] && $$(sel.gender)[1] && $$(sel.gender)[2]).isDisplayed();
            expect(button).toEqual(true);
        });

        it('TC-012 Gender radio buttons text = he, she, it', function () {
            const text1 = $$(sel.radioLabel)[0].getText();
            expect(text1).toEqual(exp.radioText1);
            const text2 = $$(sel.radioLabel)[1].getText();
            expect(text2).toEqual(exp.radioText2);
            const text3 = $$(sel.radioLabel)[2].getText();
            expect(text3).toEqual(exp.radioText3);
        });

        it('TC-013 Label for age is present', function () {
            const label = $$(sel.label)[2].isDisplayed();
            expect(label).toEqual(true);
        });

        it('TC-014 Label for age = 3. How old is your Hero?', function () {
            const text = $$(sel.label)[2].getAttribute('title');
            expect(text).toEqual(exp.labelAge);
        });

        it('TC-015 Age field is present', function () {
            const field = $(sel.age).isDisplayed();
            expect(field).toEqual(true);
        });

        it('TC-016 Age placeholder = Hero\'s age', function () {
            const placeholder = $(sel.age).getAttribute('placeholder');
            expect(placeholder).toEqual(exp.placeholderAge);
        });

    });

    // describe('Labels exist', function () {
    //
    //     it('TC-002 Label for name', function () {
    //         const label = $$(sel.label)[0].isDisplayed();
    //         expect(label).toEqual(true);
    //     });
    //
    //     // it('TC-002 Label for name', function () {
    //     //     const label = $$(sel.label)[0].isDisplayed();
    //     //     expect(label).toEqual(true);
    //     // });
    //
    //
    //
    // });

});