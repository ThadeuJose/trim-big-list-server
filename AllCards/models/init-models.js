var DataTypes = require("sequelize").DataTypes;
var _tokens = require("./tokens");
var _rulings = require("./rulings");
var _legalities = require("./legalities");
var _foreign_data = require("./foreign_data");
var _set_translations = require("./set_translations");
var _meta = require("./meta");
var _sets = require("./sets");
var _cards = require("./cards");

function initModels(sequelize) {
  var tokens = _tokens(sequelize, DataTypes);
  var rulings = _rulings(sequelize, DataTypes);
  var legalities = _legalities(sequelize, DataTypes);
  var foreign_data = _foreign_data(sequelize, DataTypes);
  var set_translations = _set_translations(sequelize, DataTypes);
  var meta = _meta(sequelize, DataTypes);
  var sets = _sets(sequelize, DataTypes);
  var cards = _cards(sequelize, DataTypes);

  return {
    tokens,
    rulings,
    legalities,
    foreign_data,
    set_translations,
    meta,
    sets,
    cards,
  };
}
module.exports = { initModels };
