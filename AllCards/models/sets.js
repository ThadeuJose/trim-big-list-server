/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sets', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    baseSetSize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    block: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    booster: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    code: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    isFoilOnly: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isForeignOnly: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isNonFoilOnly: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isOnlineOnly: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isPartialPreview: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    keyruneCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mcmId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    mcmName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mtgoCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    parentCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    releaseDate: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tcgplayerGroupId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    totalSetSize: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sets',
    timestamps: false
    });
};
