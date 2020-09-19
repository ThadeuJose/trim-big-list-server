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

  });
});