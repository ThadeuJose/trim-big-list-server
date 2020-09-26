const Sequelize = require('sequelize');
const { setupRelationship } = require('./setupRelationship');


const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/production.db'
});

const modelDefiners = [
  require('./models/card'),
  require('./models/cardType'),
  require('./models/deck'),
  require('./models/image'),
  require('./models/maindeck'),
  require('./models/theme'),
];


// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(sequelize);
}


// We execute any extra setup after the models are defined, such as adding associations.
setupRelationship(sequelize);

// We export the sequelize connection instance to be used around our app.
module.exports = sequelize;
