/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('legalities', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    format: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    uuid: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'cards',
        key: 'uuid'
      }
    }
  }, {
    sequelize,
    tableName: 'legalities',
    timestamps: false
    });
};
