const removeDuplicate = require('../controllers/resources/removeDuplicate').removeDuplicate;
const assert = require('assert');
describe('Remove Duplicate', function () {
  describe('Should remove duplicate cards', function () {

    it('of a single section', function () {
      const input = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": [
            "1 Verge Rangers",
            "1 Verge Rangers",
            "1 Verge Rangers",
            "1 Sol Ring",
            "1 Verge Rangers",
            "1 Sol Ring",
            "1 Sol Ring",
            "1 Sun Titan"
          ]
        }
      ];

      const output = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": [
            "1 Verge Rangers",
            "1 Sol Ring",
            "1 Sun Titan"
          ]
        }
      ];

      assert.deepEqual(removeDuplicate(input), output);
    });

    it('of multiple categories', function () {
      const input = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": [
            "1 Verge Rangers",
            "1 Verge Rangers",
            "1 Verge Rangers",
            "1 Sol Ring",
            "1 Verge Rangers",
            "1 Sol Ring",
            "1 Sol Ring",
            "1 Sun Titan"
          ]
        },
        {
          "categoryName": "Mana Ramp",
          "maxQuantity": 10,
          "cards": [
            "1 Mana Vault",
            "1 Arcane Signet",
            "1 Arcane Signet",
            "1 Arcane Signet",
            "1 Mana Vault",
            "1 Arcane Signet",
            "1 Orzhov Signet",
            "1 Orzhov Signet"
          ]
        }
      ];

      const output = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": [
            "1 Verge Rangers",
            "1 Sol Ring",
            "1 Sun Titan"
          ]
        },
        {
          "categoryName": "Mana Ramp",
          "maxQuantity": 10,
          "cards": [
            "1 Mana Vault",
            "1 Arcane Signet",
            "1 Orzhov Signet"
          ]
        }
      ];

      assert.deepEqual(removeDuplicate(input), output);
    });

    it('from the Mainboard', function () {
      const input = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": [
            "1 Verge Rangers",
            "1 Verge Rangers",
            "1 Verge Rangers",
            "1 Sol Ring",
            "1 Verge Rangers",
            "1 Sol Ring",
            "1 Sol Ring",
            "1 Sun Titan"
          ]
        },
        {
          "categoryName": "Mana Ramp",
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
        }
      ];

      const output = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": [
            "1 Sun Titan"
          ]
        },
        {
          "categoryName": "Mana Ramp",
          "maxQuantity": -1,
          "cards": [
            "1 Verge Rangers",
            "1 Sol Ring",
            "1 Mana Vault",
            "1 Arcane Signet",
            "1 Orzhov Signet"
          ]
        }
      ];

      assert.deepEqual(removeDuplicate(input), output);
    });

    it('from a category even if there is no Mainboard', function () {
      const input = [
        {
          "categoryName": "Mana Ramp",
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
        }
      ];

      const output = [
        {
          "categoryName": "Mana Ramp",
          "maxQuantity": -1,
          "cards": [
            "1 Verge Rangers",
            "1 Sol Ring",
            "1 Mana Vault",
            "1 Arcane Signet",
            "1 Orzhov Signet"
          ]
        }
      ];

      assert.deepEqual(removeDuplicate(input), output);
    });

    it('from the other categories even if there is no cards in the Mainboard', function () {
      const input = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": []
        },
        {
          "categoryName": "Mana Ramp",
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
        }
      ];

      const output = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": []
        },
        {
          "categoryName": "Mana Ramp",
          "maxQuantity": -1,
          "cards": [
            "1 Verge Rangers",
            "1 Sol Ring",
            "1 Mana Vault",
            "1 Arcane Signet",
            "1 Orzhov Signet"
          ]
        }
      ];

      assert.deepEqual(removeDuplicate(input), output);
    });

    it('from the Mainboard even if there is no cards in the other categories', function () {
      const input = [
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
        }
      ];

      const output = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": [
            "1 Verge Rangers",
            "1 Sol Ring",
            "1 Mana Vault",
            "1 Arcane Signet",
            "1 Orzhov Signet"
          ]

        },
        {
          "categoryName": "Mana Ramp",
          "maxQuantity": -1,
          "cards": []
        }
      ];

      assert.deepEqual(removeDuplicate(input), output);
    });

  });

  describe('Maybeboard', function () {

    it('Should remove cards from the other sections', function () {
      const input = [
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
          "cards": [
            "1 Solemn Simulacrum",
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
        }
      ];

      const output = [
        {
          "categoryName": "Mainboard",
          "maxQuantity": -1,
          "cards": []

        },
        {
          "categoryName": "Maybeboard",
          "maxQuantity": -1,
          "cards": [
            "1 Verge Rangers",
            "1 Sol Ring",
            "1 Mana Vault",
            "1 Arcane Signet",
            "1 Orzhov Signet"
          ]
        },
        {
          "categoryName": "Mana Ramp",
          "maxQuantity": -1,
          "cards": [
            "1 Solemn Simulacrum",
          ]
        }
      ];

      assert.deepEqual(removeDuplicate(input), output);
    });

  });

});
