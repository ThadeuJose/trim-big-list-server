const { DataTypes } = require('sequelize');

module.exports = function( sequelize ) {

    return sequelize.define('cardType',
        {
          name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
          },
        }
    );
};
