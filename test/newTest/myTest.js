const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json')

describe('My Little Hero', function () {

    describe('Description', function () {

        it('TC-001 Header is present', function (){
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            const header = $(sel.header).isDisplayed();
            expect(header).toEqual(true);
        });

        it('TC-002 Header is correct', function () {
            const header = $(sel.header).getText();
            expect(header).toEqual(exp.labelHeader);
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