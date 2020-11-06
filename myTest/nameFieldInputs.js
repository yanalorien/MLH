const sel = require ('../data/selectors.json');
const exp = require ('../data/expected.json');

describe('Name field inputs', function () {

    it('TC-034 Name field accepts letters', function (){
        browser.url('');
        const input = $(sel.name).setValue('abcd');
        const value = $(sel.name).getValue();
        expect(value).toEqual('abcd');
    });

    it('TC-035 Name field accepts numbers', function (){
        browser.url('');
        const input = $(sel.name).setValue('123456789');
        const value = $(sel.name).getValue();
        expect(value).toEqual('123456789');
    });

    it('TC-036 Name field accepts special characters', function (){
        browser.url('');
        const input = $(sel.name).setValue('!(-_:.,? \'"');
        const value = $(sel.name).getValue();
        expect(value).toEqual('!(-_:.,? \'"');
    });

});