const db = require('../../database');
const findByName = require('../../AllCards/readDatabase').findByName;

function getCardname(card) {
  return card.substring(card.indexOf(' ')).trim();
}

function getQuantityCard(card) {
  return parseInt(card.substring(0, card.indexOf(' ')).trim());
}

function convertScryfallIdToScryfallUrl(data) {
  data.scryfallUrl = `https://api.scryfall.com/cards/${data.scryfallId}?format=image`;
  delete data.scryfallId;
}

function addCardInfoToCard(card) {
  return findByName(getCardname(card)).then((data) => {
      data.quantity = getQuantityCard(card);
      convertScryfallIdToScryfallUrl(data);
      return data;
  });
}

function addCardInfoToDecklist(decklist) {
    return decklist.map((elem) => {
      let cards = elem.cards;
      let promises = cards.map((card) => {
        return addCardInfoToCard(card);
      });

      return Promise.all(promises).then((response) => {
        elem.cards = response;
        return elem;
      });
    });
}

module.exports.addCardInfoToDecklist = addCardInfoToDecklist;
module.exports.addCardInfoToCard = addCardInfoToCard;
