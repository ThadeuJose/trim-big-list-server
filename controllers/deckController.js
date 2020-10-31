const parserDecklist = require('./resources/parserDecklist').parserDecklist;
const orderDecklist = require('./resources/orderDecklist').orderDecklist;
const removeDuplicate = require('./resources/removeDuplicate').removeDuplicate;
const { addCardInfoToDecklist } = require('./resources/addCardInfoToDecklist');

function insert(req, res) {

  let decklist = req.body.deck;

  let parsedDecklist = parserDecklist(decklist);
  let orderedDecklist = orderDecklist(parsedDecklist);
  let deDuplicateDecklist = removeDuplicate(orderedDecklist);
  let arrayOfPromises = addCardInfoToDecklist(deDuplicateDecklist);
  Promise.all(arrayOfPromises).then((finalDecklist) => {
    console.log(finalDecklist);
    res.json(finalDecklist);  
  });



};

module.exports = {
  insert,
};
