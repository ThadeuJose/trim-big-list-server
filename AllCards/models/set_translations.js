/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('set_translations', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    language: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    setCode: {
      type: DataTypes.TEXT,
      allowNull: true,
      references: {
        model: 'sets',
        key: 'code'
      }
    },
    translation: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'set_translations',
    timestamps: false
    });
};
