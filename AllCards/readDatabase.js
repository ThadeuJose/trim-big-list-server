const { initModels } = require('./models/init-models')

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'AllPrintings.sqlite'
});

initModels(sequelize);

const cards = sequelize.models.cards;

const { Op } = require("sequelize");

var options = {
            where: {
              name:{
                [Op.substring]:'Dark', 
              },
            },
            limit: 100,
          }

cards.findAll(options).then(function (result) {
    console.log(result);
});
