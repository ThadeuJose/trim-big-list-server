const sequelize = require('../database');
const card = sequelize.models.card;


function readById(req, res) {
  let id = req.params.id;

  card.findByPk(id,{ include: { all: true }}).then((data) => {
      res.status(200).json(data);
  });
};

function readByName(req, res) {
  let name = req.params.name;

  card.findOne({ where: { name: name }, include: { all: true } }).then((data) => {
      res.status(200).json(data);
  });
};

function readAll(req, res) {
  card.findAll({ include: { all: true }}).then((data) => {
      res.status(200).json(data);
  });
};


// exports.insertCard = async function(data) {
// 	let response = await sequelize.models.card.create(data);
// 	console.log('Insert with id: ' + response.id);
// 	return response;
// };


module.exports = {
  readById,
  readByName,
  readAll,
};
