const sel = require ('../data/selectors.json');
const exp = require ('../data/expected.json');

describe('Type of stories are present and clickable', function () {

    describe('Type of stories are present', function () {

        it('TC-058 Type of story "Overcoming the Monster" is present', function () {
            browser.url('');
            const story = $(sel.story).click();
            const chooseStory = $$(sel.storyType)[0].click();
            const storyType = $$(sel.storyType)[0].isDisplayed();
            expect(storyType).toEqual(true);
        });

        it('TC-059 Type of story "Rebirth" is present', function () {
            browser.url('');
            const story = $(sel.story).click();
            const chooseStory = $$(sel.storyType)[1].click();
            const storyType = $$(sel.storyType)[1].isDisplayed();
            expect(storyType).toEqual(true);
        });

        it('TC-060 Type of story "Quest" is present', function () {
            browser.url('');
            const story = $(sel.story).click();
            const chooseStory = $$(sel.storyType)[2].click();
            const storyType = $$(sel.storyType)[2].isDisplayed();
            expect(storyType).toEqual(true);
        });

        it('TC-061 Type of story "Journey and Return" is present', function () {
            browser.url('');
            const story = $(sel.story).click();
            const chooseStory = $$(sel.storyType)[3].click();
            const storyType = $$(sel.storyType)[3].isDisplayed();
            expect(storyType).toEqual(true);
        });

        it('TC-062 Type of story "Rags and Riches" is present', function () {
            browser.url('');
            const story = $(sel.story).click();
            const chooseStory = $$(sel.storyType)[4].click();
            const storyType = $$(sel.storyType)[4].isDisplayed();
            expect(storyType).toEqual(true);
        });

        it('TC-063 Type of story "Tragedy" is present', function () {
            browser.url('');
            const story = $(sel.story).click();
            const chooseStory = $$(sel.storyType)[5].click();
            const storyType = $$(sel.storyType)[5].isDisplayed();
            expect(storyType).toEqual(true);
        });

        it('TC-064 Type of story "Comedy" is present', function () {
            browser.url('');
            const story = $(sel.story).click();
            const chooseStory = $$(sel.storyType)[6].click();
            const storyType = $$(sel.storyType)[6].isDisplayed();
            expect(storyType).toEqual(true);
        });

    });

    describe('Type of stories are correct', function () {

        it('TC-065 Type of story = Overcoming the Monster', function () {
            browser.url('');
            const story = $(sel.story).click();
            const storyType = $$(sel.storyType)[0].getAttribute('title');
            expect(storyType).toEqual("Overcoming the Monster");
        });

        it('TC-066 Type of story = Rebirth', function () {
            browser.url('');
            const story = $(sel.story).click();
            const storyType = $$(sel.storyType)[1].getAttribute('title');
            expect(storyType).toEqual("Rebirth");
        });

        it('TC-067 Type of story = Quest', function () {
            browser.url('');
            const story = $(sel.story).click();
            const storyType = $$(sel.storyType)[2].getAttribute('title');
            expect(storyType).toEqual("Quest");
        });

        it('TC-068 Type of story = Journey and Return', function () {
            browser.url('');
            const story = $(sel.story).click();
            const storyType = $$(sel.storyType)[3].getAttribute('title');
            expect(storyType).toEqual("Journey and Return");
        });

        it('TC-069 Type of story = Rags and Riches', function () {
            browser.url('');
            const story = $(sel.story).click();
            const storyType = $$(sel.storyType)[4].getAttribute('title');
            expect(storyType).toEqual("Rags and Riches");
        });

        it('TC-070 Type of story = Tragedy', function () {
            browser.url('');
            const story = $(sel.story).click();
            const storyType = $$(sel.storyType)[5].getAttribute('title');
            expect(storyType).toEqual("Tragedy");
        });

        it('TC-071 Type of story = Comedy', function () {
            browser.url('');
            const story = $(sel.story).click();
            const storyType = $$(sel.storyType)[6].getAttribute('title');
            expect(storyType).toEqual("Comedy");
        });

    });

    // describe('Type of stories are clickable', function () {
    //
    //     it('TC-065 Type of story = Overcoming the Monster', function () {
    //         browser.url('');
    //         const story = $(sel.story).click();
    //         const storyType = $$(sel.storyType)[0].isClickable();
    //         expect(storyType).toEqual(true);
    //     });
    //
    //     it('TC-066 Type of story = Rebirth', function () {
    //         browser.url('');
    //         const story = $(sel.story).click();
    //         const storyType = $$(sel.storyType)[1].isClickable();
    //         expect(storyType).toEqual(true);
    //     });
    //
    //     it('TC-067 Type of story = Quest', function () {
    //         browser.url('');
    //         const story = $(sel.story).click();
    //         const storyType = $$(sel.storyType)[2].isClickable();
    //         expect(storyType).toEqual(true);
    //     });
    //
    //     it('TC-068 Type of story = Journey and Return', function () {
    //         browser.url('');
    //         const story = $(sel.story).click();
    //         const storyType = $$(sel.storyType)[3].isClickable();
    //         expect(storyType).toEqual(true);
    //     });
    //
    //     it('TC-069 Type of story = Rags and Riches', function () {
    //         browser.url('');
    //         const story = $(sel.story).click();
    //         const storyType = $$(sel.storyType)[4].isClickable();
    //         expect(storyType).toEqual(true);
    //     });
    //
    //     it('TC-070 Type of story = Tragedy', function () {
    //         browser.url('');
    //         const story = $(sel.story).click();
    //         const storyType = $$(sel.storyType)[5].isClickable();
    //         expect(storyType).toEqual(true);
    //     });
    //
    //     it('TC-071 Type of story = Comedy', function () {
    //         browser.url('');
    //         const story = $(sel.story).click();
    //         const storyType = $$(sel.storyType)[6].isClickable();
    //         expect(storyType).toEqual(true);
    //     });
    //
    // });

});