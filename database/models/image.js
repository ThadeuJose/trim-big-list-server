const { DataTypes } = require('sequelize');

module.exports = function( sequelize ) {

    return sequelize.define('image',
        {
          nickname: {
            type: DataTypes.STRING,
            unique: false,
          },
          set: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: 'set_number',
            validate: {
              notEmpty: true,
            },
          },
          number: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: 'set_number',
            validate: {
              notEmpty: true,
            },
          },
          // Path nesse server
          path: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true,
            },
          },
        }
    );
};
