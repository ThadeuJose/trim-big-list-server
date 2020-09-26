const sequelize = require('../database');
const { setupTables } = require('./resources/setupTables');

function setup(req, res){
  setupTables(sequelize).then((data) => {
    res.status(200).json(data);
  });
}

module.exports = { setup };
