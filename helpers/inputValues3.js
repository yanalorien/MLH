const sel = require('../data/selectors.json')

function inputValues4 (name, gender, storyType){
    $(sel.name).setValue(name);
    $$(sel.gender)[gender].click();
    $(sel.story).click();
    $$(sel.storyType)[storyType].click();
}

module.exports = inputValues4;