/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This Skill will help you learn punjabi facts with alexa
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = undefined;
const SKILL_NAME = 'Punjabi Facts';
const GET_FACT_MESSAGE = "Here's your Punnjaabi fact: ";
const HELP_MESSAGE = 'You can say Alexa open punjabi facts, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';
const data = [
    'The capital of Punnjaab is Chandigarh',
    'The official Language is Punnjaabi',
    'The Number of is Districts is 22',
    'The First Chief Minister of Punnjaab was Gopi Chand Bhargava',
    'Punnjaab was established on August 15th, 1947',
    'The state tree of Punnjaab is a Tahli, also known as Sheesham',
    'The state river of Punnjaab is the Indus River',
    'The state animal of Punnjaab is the Blackbuck',
    'The state bird of Punnjaab is the Baaz',
    'The word Punnjaab is made up of two different words: punnj meaning five, and aab meaning water',
    'Bhangra and Giddha are traditional dances of Punnjaab to celebrate the harvest season called Lohri',
    'The Sikh empire was formed by Maharaja Ranjit Singh',
    'The literal meaning of Punnjaab is five rivers',
    'The Amritsaar district of Punnjaab is largest in both area and population',
    'Amritsaar is one of the major tourist destinations of not only punnjaab, but also India, since it brings more tourists than the Taj Mahal',
];

//=========================================================================================================================================
//Editing anything below this line might break the skill.
//=========================================================================================================================================

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('PunjabiFacts');
    },
    'PunjabiFacts': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
