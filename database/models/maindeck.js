const { DataTypes } = require('sequelize');

module.exports = function( sequelize ) {

    return sequelize.define('maindeck',
        {
          categoryName: {
            type: DataTypes.STRING,
          },
          quantity: {
            type: DataTypes.INTEGER,
            defaultValue: 1,
          },
        }
    );
};
