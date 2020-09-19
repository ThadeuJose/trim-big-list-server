const parserDecklist = require('./resources/parserDecklist').parserDecklist;
const saveDecklist = require('./resources/saveDecklist').saveDecklist;
const removeDuplicate = require('./resources/removeDuplicate').removeDuplicate;


function insert(req, res) {
  let data = req.body.deck;
  const parsedDecklist = parserDecklist(data);
  // Promise.all(saveDecklist(parsedDecklist)).then((response) => {
  //     res.json(removeDuplicate(response));
  // })
  res.json(removeDuplicate(parserDecklist));
};

module.exports = {
  insert,
};
