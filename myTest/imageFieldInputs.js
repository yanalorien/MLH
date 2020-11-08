const sel = require ('../data/selectors.json');
const path = require('path');

describe('Image field inputs', function () {

    it('TC-034 jpeg image can be uploaded', function (){
        browser.url('');
        const input = $(sel.imageInput);
        const submit = $(sel.submit);
        const filePath = path.join(__dirname, '../images/Mickey.jpg');
        const remoteFilePath = browser.uploadFile(filePath);
        browser.execute(function (){
            document.getElementsByTagName('input')[6].style.display = "block";
        });
        input.waitForDisplayed();
        browser.pause(5000);
        input.setValue(remoteFilePath);
        browser.pause(5000);
        submit.click();
        browser.refresh();
    });

    // it('TC-035 Name field accepts numbers', function (){
    //     browser.url('');
    //     const input = $(sel.image);
    //     const submit = $(sel.submit);
    //     expect(value).toEqual('123456789');
    // });
    //
    // it('TC-036 Name field accepts special characters', function (){
    //     browser.url('');
    //     const input = $(sel.name).setValue('!(-_:.,? \'"');
    //     const value = $(sel.name).getValue();
    //     expect(value).toEqual('!(-_:.,? \'"');
    // });

});