const db = require('../../database');
const getScryfallInfo = require('./scryfall').getScryfallInfo;

// function saveDecklist(decklist) {
//   for (var elem of decklist) {
//     const array = elem.cards;
//     for (var i = 0; i < array.length; i++) {
//       let cardname = getCardname(array[i]);
//       db.readCardByName(cardname).then(response=>{
//         if(response){
//           const data = {
//              name: response.dataValues.name,
//              cmc: response.dataValues.cmc,
//              type_line: response.dataValues.type_line,
//              mana_cost: response.dataValues.mana_cost,
//            };
//           console.log(data);
//         } else{
//           getScryfallInfo(cardname).then((response) => {
//             const data = {
//                name: response.name,
//                cmc: response.cmc,
//                type_line: response.type_line,
//                mana_cost: response.mana_cost,
//              };
//             console.log(data);
//           });
//         }
//       }).catch((error) => {
//         console.log('Error '+ error);
//       });
//     }
//   }
//   return decklist;
// }

function saveDecklist(decklist) {
  return decklist.map((elem) => {
    let cards = elem.cards;
    let promises = cards.map((card) => {
      return getData(getCardname(card));
    });

    return Promise.all(promises).then((response) => {
      elem.cards = response;
      return elem;
    });
  })

}

async function getData(cardname){
  return getScryfallInfo(cardname).then((response) => {
    const data = {
       name: response.name,
       cmc: response.cmc,
       type_line: response.type_line,
       mana_cost: response.mana_cost,
       url: response.url,
     };
    return data;
  })
}

function getCardname(line) {
  let formatedLine = line;
  if (/^\d/.test(line)) {
    formatedLine = formatedLine.substring(formatedLine.indexOf(' '));
  }
  return formatedLine.trim();
}

module.exports.saveDecklist = saveDecklist;
