const parserDecklist = require('./resources/parserDecklist').parserDecklist;
// const saveDecklist = require('./resources/saveDecklist').saveDecklist;
const orderDecklist = require('./resources/orderDecklist').orderDecklist;
const removeDuplicate = require('./resources/removeDuplicate').removeDuplicate;
const findByName = require('../AllCards/readDatabase').findByName;

function insert(req, res) {

  let decklist = req.body.deck;

  let parsedDecklist = parserDecklist(decklist);
  let orderedDecklist = orderDecklist(parsedDecklist);
  let finalDecklist = removeDuplicate(orderedDecklist);

  findByName('Dark Ritual').then((data) => {
    console.log(data);
  })

  // console.log(parsedDecklist);
  // Promise.all(saveDecklist(parsedDecklist)).then((response) => {
  //     res.json(removeDuplicate(response));
  // })

  res.json(finalDecklist);

};

module.exports = {
  insert,
};
