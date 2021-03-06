const parserDecklist = require('../controllers/resources/parserDecklist').parserDecklist;
const assert = require('assert');

describe('Parser Decklist', function () {
  describe('parserDecklist', function () {

    it('Should return a array with 2 elements', function () {
      const input = '1 Verge Rangers\n1 Sol Ring';
      const output = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": [
            "1 Verge Rangers",
            "1 Sol Ring"
          ]
        }
      ]

      assert.deepEqual(parserDecklist(input), output);
    });

    it('Should put number when there is none', function () {
      const input = '//Mana Ramp: 10  \n    1 Verge     Rangers\n Sol       Ring\n  \n   \n1        Palace       Siege    ';
      const output = [
        {
          "categoryName": "Mana Ramp",
          "maxQuantity": 10,
          "cards": [
            "1 Verge Rangers",
            "1 Sol Ring",
            "1 Palace Siege"
          ]
        }
      ]

      assert.deepEqual(parserDecklist(input), output);
    });

    it('Should ignore new lines', function () {
      const input = ' 1 Verge     Rangers\n\n\n\n\n\n\n\n 1 Sol Ring\n\n'
      + '//Mana Ramp: 10  \n    1 Verge     Rangers\n'
      + 'Sol       Ring\n  \n \n     \n    \n1        Palace       Siege\n   '
      +`


//Sideboard:2
1 Witch's Mist
1 Wanderer's Strike`;
      const output = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": [
            "1 Verge Rangers",
            "1 Sol Ring"
          ]
        },
        {
          "categoryName": "Mana Ramp",
          "maxQuantity": 10,
          "cards": [
            "1 Verge Rangers",
            "1 Sol Ring",
            "1 Palace Siege"
          ]
        },
        {
          "categoryName": "Sideboard",
          "maxQuantity": 2,
          "cards": [
            "1 Witch's Mist",
            "1 Wanderer's Strike",
          ]
        }
      ]

      assert.deepEqual(parserDecklist(input), output);
    });

    it('Should remove tabs', function () {
      const input = '\t1 Verge Rangers\n1\tSol Ring\n\t';
      const output = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": [
            "1 Verge Rangers",
            "1 Sol Ring"
          ]
        }
      ]

      assert.deepEqual(parserDecklist(input), output);
    });

    it('Should remove extra spaces', function () {
      const input = '      1 Verge     Rangers\n1 Sol       Ring\n     \n';
      const output = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": [
            "1 Verge Rangers",
            "1 Sol Ring"
          ]
        }
      ]

      assert.deepEqual(parserDecklist(input), output);
    });

    it('Should parser even if there is not Mainboard', function () {
      const input = '//Mana Ramp: 10  \n    1 Verge     Rangers\n1 Sol       Ring\n     \n';
      const output = [
        {
          "categoryName": "Mana Ramp",
          "maxQuantity": 10,
          "cards": [
            "1 Verge Rangers",
            "1 Sol Ring"
          ]
        }
      ]

      assert.deepEqual(parserDecklist(input), output);
    });

  });
});
