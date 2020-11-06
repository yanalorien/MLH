const sel = require ('../data/selectors.json');
const exp = require ('../data/expected.json')

describe('My Little Hero', function () {

    describe('Name field inputs', function () {

        it('TC-034 Name field accepts 1 character', function () {
            browser.url('');
            const input = $(sel.name).setValue('a');
            const value = $(sel.name).getValue();
            expect(value).toEqual('a');
        });

        it('TC-035 Name field accepts 70 characters', function () {
            browser.url('');
            const input = $(sel.name).setValue('LpseiK43JntdLllt9NTaCP7wrkPOAvnbQwruzTElcj5UBKD6BnXDDmisSYWjp0FW3yV2Rq');
            const value = $(sel.name).getValue();
            expect(value).toEqual('LpseiK43JntdLllt9NTaCP7wrkPOAvnbQwruzTElcj5UBKD6BnXDDmisSYWjp0FW3yV2Rq');
        });

        // it('TC-036 Name field does not allow space character', function (){
        //     browser.url('');
        //     const input = $(sel.name).setValue(' ');
        //     const value = $(sel.name).getValue();
        //     expect(value).toEqual('');
        // });

        // it('TC-037 Name field accepts 70 characters', function (){
        //     browser.url('');
        //     const input = $(sel.name).setValue('Tt2leKV8q06MODy8QVYznymdrVO6NCQ3hVvKg87VFuRa2HQ0xBqPxgwohEr5BN94tLyQJGk');
        //     const value = $(sel.name).getValue();
        //     expect(value).toEqual('');
        // });

    });

});
