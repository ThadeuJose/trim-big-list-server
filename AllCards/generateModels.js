// Generate all models from AllPrintings.sqlite

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'AllPrintings.sqlite'
});

const SequelizeAuto = require('sequelize-auto');
const auto = new SequelizeAuto(sequelize, null, null, options);

var options = {
    dialect: 'sqlite',
}

auto.run().then(data => {
  console.log(data.tables);      // table list
  console.log(data.foreignKeys); // foreign key list
  console.log(data.text)         // text of generated files
});
