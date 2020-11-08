const sel = require ('../data/selectors.json');
const path = require('path');

describe('Image field inputs', function () {

    it('TC-066 jpeg image can be uploaded', function (){
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

    it('TC-067 jpeg image can be uploaded', function (){
        browser.url('');
        const input = $(sel.imageInput);
        const submit = $(sel.submit);
        const filePath = path.join(__dirname, '../images/Darwin.png');
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

});