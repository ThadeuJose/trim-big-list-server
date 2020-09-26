const { DataTypes } = require('sequelize');

module.exports = function( sequelize ) {

    return sequelize.define('deck',
        {
          name: {
            type: DataTypes.STRING,
          },
          description: {
            type: DataTypes.STRING,
          },
          author: {
            type: DataTypes.STRING,
            defaultValue: 'Myself',
          },
          //url
          source: {
            type: DataTypes.STRING,
          },
        }
    );
};
