const parserDecklist = require('./resources/parserDecklist').parserDecklist;
const saveDecklist = require('./resources/saveDecklist').saveDecklist;
const removeDuplicate = require('./resources/removeDuplicate').removeDuplicate;

  const fs = require('fs')

function insert(req, res) {
  let data = req.body.deck;
  const parsedDecklist = parserDecklist(data);
  // console.log(parsedDecklist);
  // Promise.all(saveDecklist(parsedDecklist)).then((response) => {
  //     res.json(removeDuplicate(response));
  // })

  res.json(removeDuplicate(parsedDecklist));
};

module.exports = {
  insert,
};
