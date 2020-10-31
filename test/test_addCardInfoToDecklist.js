const addCardInfoToDecklist = require('../controllers/resources/addCardInfoToDecklist').addCardInfoToDecklist;
const addCardInfoToCard = require('../controllers/resources/addCardInfoToDecklist').addCardInfoToCard;
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

var expect = require('chai').expect;

chai.should();
chai.use(chaiAsPromised);

function testArrayOfPromise(arrayOfPromises, arrayOfOutput, done) {
  Promise.all(arrayOfPromises).then(function (results) {
       //so check your results here
       for (var i = 0; i < results.length; i++) {
           expect(results[i]).to.deep.equal(arrayOfOutput[i]);
       }

      //and the notify(done) is chained after this
   }).should.eventually.notify(done);
}

const cardWithoutInfo = "1 Sol Ring";

const cardWithInfo = {
  id: 747,
  uuid: 'fe19ba78-b922-5ce5-8ad9-276a3cfabf57',
  name: 'Sol Ring',
  convertedManaCost: 1,
  manaCost: '{1}',
  scryfallUrl: 'https://api.scryfall.com/cards/e07f656c-97b5-4147-821a-edbb49f34e19?format=image',
  type: 'Artifact',
  setCode: '2ED',
  hasAlternativeDeckLimit: 0,
  faceName: null,
  faceConvertedManaCost: null,
  side: null,
  quantity:1
};

describe('add Card Info To decklists', function () {
  describe('add Card Info To decklists', function () {

    it('Should add card info to card', function (done) {
        addCardInfoToCard(cardWithoutInfo).should.eventually.deep.equal(cardWithInfo).and.notify(done);
    });

    it('Should add card info to a single card in a decklists', function (done) {
      const input = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": [
            cardWithoutInfo,
          ]
        },
      ];

      const output = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": [
            cardWithInfo,
          ]

        },
      ];


      let arrayOfPromises = addCardInfoToDecklist(input);
      testArrayOfPromise(arrayOfPromises, output, done);
    });

    it('Should add card info to multiple card in a decklists', function (done) {
      const input = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": [
            cardWithoutInfo,
            cardWithoutInfo,
            cardWithoutInfo,
          ]
        },
      ];

      const output = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": [
            cardWithInfo,
            cardWithInfo,
            cardWithInfo,
          ]

        },
      ];


      let arrayOfPromises = addCardInfoToDecklist(input);
      testArrayOfPromise(arrayOfPromises, output, done);
    });

    it('Should not add card info to empty decklists', function (done) {
      const input = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": []
        },
      ];

      const output = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": []
        },
      ];


      let arrayOfPromises = addCardInfoToDecklist(input);
      testArrayOfPromise(arrayOfPromises, output, done);
    });



  });
});
