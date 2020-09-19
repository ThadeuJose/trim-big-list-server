const { DataTypes } = require('sequelize');

module.exports = function( sequelize ) {

    return sequelize.define('card',
        {
          name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              notEmpty: true,
            },
          },
          // Lands vem com cmc ""
          cmc: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          type_line: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
          },
          // Lands vem com cmc ""
          mana_cost: {
            type: DataTypes.STRING,
            allowNull: false
          },
          isGarbage: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
          },
          isStaple: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
          }
        }
    );
};
