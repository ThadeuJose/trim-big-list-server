/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rulings', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    text: {
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
    tableName: 'rulings',
    timestamps: false
    });
};
