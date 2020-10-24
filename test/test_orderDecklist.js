const orderDecklist = require('../controllers/resources/orderDecklist').orderDecklist;
const assert = require('assert');

describe('Order decklists', function () {
  describe('orderDecklist', function () {

    it("Shouldn't alter the array if there isn't a Maybeboard or Mainboard", function () {
        const input = [

          {
            "categoryName": "Mana Ramp",
            "maxQuantity": -1,
            "cards": []
          },
          {
            "categoryName": "Lands",
            "maxQuantity": -1,
            "cards": []
          },
        ];

        const output = [
          {
            "categoryName": "Mana Ramp",
            "maxQuantity": -1,
            "cards": []
          },
          {
            "categoryName": "Lands",
            "maxQuantity": -1,
            "cards": []
          },
        ];

        assert.deepEqual(orderDecklist(input), output);
      });

    it('Should sort the categories in Mainboard, Maybeboard and rest', function () {
        const input = [

          {
            "categoryName": "Mana Ramp",
            "maxQuantity": -1,
            "cards": []
          },
          {
            "categoryName": "Mainboard",
            "maxQuantity": -1,
            "cards": [
              "1 Verge Rangers",
              "1 Sol Ring",
              "1 Sol Ring",
              "1 Mana Vault",
              "1 Arcane Signet",
              "1 Arcane Signet",
              "1 Arcane Signet",
              "1 Mana Vault",
              "1 Arcane Signet",
              "1 Orzhov Signet",
              "1 Orzhov Signet"
            ]
          },
          {
            "categoryName": "Lands",
            "maxQuantity": -1,
            "cards": []
          },
          {
            "categoryName": "Maybeboard",
            "maxQuantity": -1,
            "cards": [
              "1 Agitator Ant",
            ]
          },
        ];

        const output = [
          {
            "categoryName": "Mainboard",
            "maxQuantity": -1,
            "cards": [
              "1 Verge Rangers",
              "1 Sol Ring",
              "1 Sol Ring",
              "1 Mana Vault",
              "1 Arcane Signet",
              "1 Arcane Signet",
              "1 Arcane Signet",
              "1 Mana Vault",
              "1 Arcane Signet",
              "1 Orzhov Signet",
              "1 Orzhov Signet"
            ]

          },
          {
            "categoryName": "Maybeboard",
            "maxQuantity": -1,
            "cards": [
              "1 Agitator Ant",
            ]
          },
          {
            "categoryName": "Mana Ramp",
            "maxQuantity": -1,
            "cards": []
          },
          {
            "categoryName": "Lands",
            "maxQuantity": -1,
            "cards": []
          },
        ];

        assert.deepEqual(orderDecklist(input), output);
      });

    it('Should sort the categories even if dont have Mainboard', function () {
      const input = [

        {
          "categoryName": "Mana Ramp",
          "maxQuantity": -1,
          "cards": []
        },
        {
          "categoryName": "Lands",
          "maxQuantity": -1,
          "cards": []
        },
        {
          "categoryName": "Maybeboard",
          "maxQuantity": -1,
          "cards": [
            "1 Agitator Ant",
          ]
        },
      ];

      const output = [
        {
          "categoryName": "Maybeboard",
          "maxQuantity": -1,
          "cards": [
            "1 Agitator Ant",
          ]
        },
        {
          "categoryName": "Mana Ramp",
          "maxQuantity": -1,
          "cards": []
        },
        {
          "categoryName": "Lands",
          "maxQuantity": -1,
          "cards": []
        },
      ];

      assert.deepEqual(orderDecklist(input), output);
    });

    it('Should sort the categories even if dont have Maybeboard', function () {
      const input = [

        {
          "categoryName": "Mana Ramp",
          "maxQuantity": -1,
          "cards": []
        },
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": [
            "1 Verge Rangers",
            "1 Sol Ring",
            "1 Sol Ring",
            "1 Mana Vault",
            "1 Arcane Signet",
            "1 Arcane Signet",
            "1 Arcane Signet",
            "1 Mana Vault",
            "1 Arcane Signet",
            "1 Orzhov Signet",
            "1 Orzhov Signet"
          ]
        },
        {
          "categoryName": "Lands",
          "maxQuantity": -1,
          "cards": []
        },

      ];

      const output = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": [
            "1 Verge Rangers",
            "1 Sol Ring",
            "1 Sol Ring",
            "1 Mana Vault",
            "1 Arcane Signet",
            "1 Arcane Signet",
            "1 Arcane Signet",
            "1 Mana Vault",
            "1 Arcane Signet",
            "1 Orzhov Signet",
            "1 Orzhov Signet"
          ]

        },
        {
          "categoryName": "Mana Ramp",
          "maxQuantity": -1,
          "cards": []
        },
        {
          "categoryName": "Lands",
          "maxQuantity": -1,
          "cards": []
        },
      ];

      assert.deepEqual(orderDecklist(input), output);
    });

  });

});
