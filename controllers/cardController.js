const sequelize = require('../database');
const card = sequelize.models.card;
const cardType = sequelize.models.cardType;
const image = sequelize.models.image;

const { getImageFromScryfall, getFilename } = require('./resources/downloadImage');

function readById(req, res) {
  let id = req.params.id;

  card.findByPk(id,{
        attributes: ['id','name', 'cmc', 'type_line', 'mana_cost'],
        include: [
          { model: cardType, attributes: ['name'] },
          { model: image, attributes: ['nickname', 'path']},
        ],
      }).then((data) => {
        res.status(200).json(data);
      });
};

function readByName(req, res) {
  let name = req.params.name;

  card.findOne({
        where: { name: name },
        include: [
          { model: cardType, attributes: ['name'] },
          { model: image, attributes: ['nickname', 'path']},
        ],
      }).then((data) => {
          res.status(200).json(data);
      });
};

function readAll(req, res) {
  card.findAll({
      attributes: ['id','name', 'cmc', 'type_line', 'mana_cost'],
      include: [
        { model: cardType, attributes: ['name'] },
        { model: image, attributes: ['nickname', 'path']},
      ],
    }).then((data) => {
        res.status(200).json(data);
    });
};

function insertCard(req, res) {
  let body = req.body;
  const data = {
    name: body.name,
    mana_cost: body.mana_cost,
    cmc: body.cmc,
    type_line: body.type_line,
    cardType:body.cardType,
    images:[{
      nickname: body.nickname,
      set: body.set,
      number: body.number,
      path: getFilename(body),
    }],
  }

  console.log(data);

  //// TODO: Fazer o download only after the data be included

  card.create(data, {include: [ image ]});

  getImageFromScryfall(body.url, body);

  res.json('Ok');

}
// exports.insertCard = async function(data) {
// 	let response = await sequelize.models.card.create(data);
// 	console.log('Insert with id: ' + response.id);
// 	return response;
// };


module.exports = {
  readById,
  readByName,
  readAll,
  insertCard,
};
