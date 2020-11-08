const sel = require ('../data/selectors.json');
const data = require('../data/testData.json');
const inputValues4 = require('../helpers/inputValues4.js');
const path = require('path');

describe('Create button is clickable', function () {

    it('TC-021 Create button is clickable after 1-4 are filled in', function () {
        browser.url('');
        inputValues4(data.name, data.gender.she, data.age, data.storyType);
        const submit = $(sel.submit).isEnabled();
        expect(submit).toEqual(true);
    });

    it('TC-021 Create button is clickable after 1-5 are filled in', function () {
        browser.url('');
        inputValues4(data.name, data.gender.she, data.age, data.storyType);
        const input = $(sel.imageInput);
        const filePath = path.join(__dirname, '../images/Darwin.png');
        const remoteFilePath = browser.uploadFile(filePath);
        browser.execute(function (){
            document.getElementsByTagName('input')[6].style.display = "block";
        });
        input.waitForDisplayed();
        browser.pause(5000);
        input.setValue(remoteFilePath);
        browser.pause(5000);
        const submit = $(sel.submit).isEnabled();
        expect(submit).toEqual(true);
    });
});