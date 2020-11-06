const sel = require ('../data/selectors.json');

describe('Gender field inputs', function () {

    it('TC-042 Radio button he is active', function (){
        browser.url('');
        let button = $$(sel.gender)[0].isClickable();
        expect(button).toEqual(true);
    });

    it('TC-043 Radio button she is active', function (){
        browser.url('');
        let button = $$(sel.gender)[1].isClickable();
        expect(button).toEqual(true);
    });

    it('TC-044 Radio button it is active', function (){
        browser.url('');
        let button = $$(sel.gender)[2].isClickable();
        expect(button).toEqual(true);
    });

});