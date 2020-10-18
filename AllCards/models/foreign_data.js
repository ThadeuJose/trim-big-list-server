/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('foreign_data', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    flavorText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    language: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    multiverseid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
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
    tableName: 'foreign_data',
    timestamps: false
    });
};
