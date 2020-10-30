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

        // it('TC-007 Label for gender = 2. Please choose a gender.', function () {
        //     const text = $$(sel.gender).isDisplayed();
        //     expect(text).toEqual(exp.labelGender);
        // });

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