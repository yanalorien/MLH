const sel = require ('../data/selectors.json');
const exp = require ('../data/expected.json');
const data = require('../data/testData.json');
const test = require('../data/testAge.json');
const inputValues4 = require('../helpers/inputValues4.js');
const path = require('path');
// const testGender = require('../data/testGender.json');

describe('data is displayed correctly at the story page', function () {

    describe('Name data is displayed correctly at the story page', function () {

        it('TC-079 Name displayed correctly in text', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType);
            const submit = $(sel.submit).click();
            const finalText = $(sel.finalText).getText();
            const text = finalText.includes(data.name);
            expect(text).toEqual(true);
        });

    });

    describe('Age data is displayed correctly at the story page', function () {

        it('TC-081 Age billions, millions, hundreds etc. displayed correctly in text', function () {
            browser.url('');
            inputValues4(test.name, test.gender.she, test.age.first, test.storyType);
            const submit = $(sel.submit).click();
            const finalText = $(sel.finalText).getText();
            const text = finalText.includes(exp.ageTestFirst);
            expect(text).toEqual(true);
        });

        it('TC-082 Age four fourteen etc. displayed correctly in text', function () {
            browser.url('');
            inputValues4(test.name, test.gender.she, test.age.second, test.storyType);
            const submit = $(sel.submit).click();
            const finalText = $(sel.finalText).getText();
            const text = finalText.includes(exp.ageTestSecond);
            expect(text).toEqual(true);
        });

        it('TC-083 Age twenty eight etc. displayed correctly in text', function () {
            browser.url('');
            inputValues4(test.name, test.gender.she, test.age.third, test.storyType);
            const submit = $(sel.submit).click();
            const finalText = $(sel.finalText).getText();
            const text = finalText.includes(exp.ageTestThird);
            expect(text).toEqual(true);
        });

        it('TC-084 Age fifty sixty etc. displayed correctly in text', function () {
            browser.url('');
            inputValues4(test.name, test.gender.she, test.age.fourth, test.storyType);
            const submit = $(sel.submit).click();
            const finalText = $(sel.finalText).getText();
            const text = finalText.includes(exp.ageTestFourth);
            expect(text).toEqual(true);
        });

        it('TC-085 Age eighty etc. displayed correctly in text', function () {
            browser.url('');
            inputValues4(test.name, test.gender.she, test.age.fifth, test.storyType);
            const submit = $(sel.submit).click();
            const finalText = $(sel.finalText).getText();
            const text = finalText.includes(exp.ageTestFifth);
            expect(text).toEqual(true);
        });

    });

    describe('Image is displayed correctly at the story page', function () {

        it('TC-087 Image is displayed correctly at the story page', function () {
            browser.url('');
            inputValues4(data.name, data.gender.she, data.age, data.storyType);
            const input = $(sel.imageInput);
            const filePath = path.join(__dirname, '../images/Darwin.png');
            const remoteFilePath = browser.uploadFile(filePath);
            browser.execute(function (){
                document.getElementsByTagName('input')[6].style.display = "block";
            });
            input.waitForDisplayed();
            input.setValue(remoteFilePath);
            const submit = $(sel.submit).click();
            const image = $(sel.imageUploaded).isDisplayed();
            expect(image).toEqual(true);
        });

    });

    // describe('Genders are displayed correctly at the story page', function () {
    //
    //     it('TC-087 Gender he is displayed as he/his at the story page', function () {
    //         browser.url('');
    //         inputValues4(data.name, data.gender.he, data.age, data.storyType);
    //         const submit = $(sel.submit).click();
    //         const finalText = $(sel.finalText).getText();
    //         const text = finalText.includes(testGender.he.he1, testGender.he.he1, testGender.he.he1);
    //         expect(text).toEqual(true);
    //     });
    //
    // });

});