const sel = require ('../data/selectors.json');
const exp = require ('../data/expected.json');

describe('Age field inputs', function () {

    it('TC-046 Age field accepts digits', function (){
        browser.url('');
        const input = $(sel.age).setValue('1234');
        const value = $(sel.age).getValue();
        expect(value).toEqual('1234');
    });

    it('TC-052 Spinner increases age', function (){
        browser.url('');
        const input = $$(sel.spinner)[0].click();
        const value = $(sel.age).getValue();
        expect(value).toEqual('1');
    });

    it('TC-053 Spinner decreases age', function (){
        browser.url('');
        const input = $(sel.age).setValue('2');
        const button = $$(sel.spinner)[1].click();
        const value = $(sel.age).getValue();
        expect(value).toEqual('1');
    });

});