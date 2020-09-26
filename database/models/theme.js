const { DataTypes } = require('sequelize');

module.exports = function( sequelize ) {

    return sequelize.define('theme',
        {
          name: {
            type: DataTypes.STRING,
          },
        }
    );
};
