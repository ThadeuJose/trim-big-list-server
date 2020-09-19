let Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/production.db'
});





function setupRelationship(sequelize) {
  require('./models/card.js')(sequelize);
  require('./models/cardType.js')(sequelize);

  const { card, cardType } = sequelize.models;

  // Card has 0 or 1 CardType
	cardType.hasOne(card);
  card.belongsTo(cardType);
}

// --------------------------------------------------------------------

exports.connect = async function connect(){
	try {
	  await sequelize.authenticate();
	  console.log('Connection has been established successfully.');
	} catch (error) {
	  console.error('Unable to connect to the database:', error);
	}
}

async function setupCardTypes(sequelize) {
  const cardType = sequelize.models.cardType;
  const response = [
    await cardType.create({ id:1, name: 'Lands' }),
    await cardType.create({ id:2, name: 'Basic Lands' }),
    await cardType.create({ id:3, name: 'Utility Land' }),
    await cardType.create({ id:4, name: 'Mana Ramp' }),
    await cardType.create({ id:5, name: 'Burst Card Draw' }),
    await cardType.create({ id:6, name: 'Repeatable Card Draw' }),
    await cardType.create({ id:7, name: 'Board Wipe' }),
    await cardType.create({ id:8, name: 'Target Removal' }),
  ];
  return response;
}

function creaBasicLand(id,name) {
  return 	{ id:id, name: name, cmc:0, type_line:`Basic Land — ${name}`, mana_cost: "", cardTypeId:1}
}

async function setupLands(sequelize) {
  const card = sequelize.models.card;
  const response = [
    await card.create(creaBasicLand(1,'Plains'), {include : sequelize.models.cardType}),
    await card.create(creaBasicLand(2,'Island'), {include : sequelize.models.cardType}),
    await card.create(creaBasicLand(3,'Swamp'), {include : sequelize.models.cardType}),
    await card.create(creaBasicLand(4,'Mountain'), {include : sequelize.models.cardType}),
    await card.create(creaBasicLand(5,'Forest'), {include : sequelize.models.cardType}),
  ];
  return response;
}

exports.setupTable = async function() {

  setupRelationship(sequelize);

	await sequelize.sync({force: true});

  setupCardTypes(sequelize);
  const response = setupLands(sequelize);

  return response;
};

// --------------------------------------------------------------------

exports.readAllCards = async function() {
  setupRelationship(sequelize);
	let response = await sequelize.models.card.findAll({ include: { all: true }});
	return response;
};

// TODO: Mudar o nome para readCardById
exports.readCard = async function(id) {
  setupRelationship(sequelize);
  const card = await sequelize.models.card.findByPk(id,{ include: { all: true }});
	return card;
};

exports.readCardByName = async function(name) {
  setupRelationship(sequelize);
  const card = await sequelize.models.card.findOne({ where: { name: name } });
	return card;
};

exports.insertCard = async function(data) {
  setupRelationship(sequelize);
	let response = await sequelize.models.card.create(data);
	console.log('Insert with id: ' + response.id);
	return response;
};






exports.deleteQuote = async function(id) {
  await Quote.destroy({
    where: {
      id: id
    }
  });
};

exports.updateQuote = async function(id,newquote) {
  await Quote.update(newquote, {
    where: {
      id: id
    }
  });
};
