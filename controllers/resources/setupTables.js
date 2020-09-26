async function setupTheme(sequelize) {
  const theme = sequelize.models.theme;
  const response = await theme.create({ name: 'Good Stuff' })
  return response;
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
  return Promise.all(response);
}

async function setupImages(sequelize) {
  const image = sequelize.models.image;
  const response = [
    await image.create({ id:1, nickname:'Nicol Bolas Lands', set: 'hou', number:185, path:'hou-185-plains', cardId: 1}),
    await image.create({ id:2, nickname:'Nicol Bolas Lands', set: 'hou', number:186, path:'hou-186-island', cardId: 2}),
    await image.create({ id:3, nickname:'Nicol Bolas Lands', set: 'hou', number:187, path:'hou-187-swamp', cardId: 3}),
    await image.create({ id:4, nickname:'Nicol Bolas Lands', set: 'hou', number:188, path:'hou-188-mountain', cardId: 4}),
    await image.create({ id:5, nickname:'Nicol Bolas Lands', set: 'hou', number:189, path:'hou-189-forest', cardId: 5}),
    await image.create({ id:6, set: 'thb', number:254, path:'thb-254-forest', cardId: 5}),
  ];
  return Promise.all(response);
}

function creaBasicLand(id,name) {
  return 	{ id:id, name: name, cmc:0, type_line:`Basic Land — ${name}`, mana_cost: "", cardTypeId:1}
}

async function setupCards(sequelize) {
  const card = sequelize.models.card;
  const includes = { include : [sequelize.models.cardType, sequelize.models.image ]}
  const response = [
    await card.create(creaBasicLand(1,'Plains'), includes),
    await card.create(creaBasicLand(2,'Island'), includes),
    await card.create(creaBasicLand(3,'Swamp'), includes),
    await card.create(creaBasicLand(4,'Mountain'), includes),
    await card.create(creaBasicLand(5,'Forest'), includes),
  ];
  return Promise.all(response);
}

async function setupTables (sequelize) {

	await sequelize.sync({force: true});

  return setupCardTypes(sequelize).then(async () => {
    return setupCards(sequelize).then(async () => {
      return setupImages(sequelize).then(async () => {
        let response = await sequelize.models.card.findAll({ include: { all: true }});
        return response;
      });
    });
  });

}

  module.exports = { setupTables };
