function removeDuplicateFromSection(cards) {
  let resp = [];
  for (var c of cards) {
    if(!resp.includes(c)){
      resp.push(c);
    }
  }
  return resp;
}

function removeItem(arr, value) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function removeDuplicateCardsFromMainboard(cards,mainboardCards) {
  if(mainboardCards){
    let resp = mainboardCards;
    for (var c of cards) {
      if(mainboardCards.includes(c)){
        resp = removeItem(mainboardCards,c);
      }
    }
    return resp;
  }
  return mainboardCards;
}

function thereIsMoreCategories(categories) {
  return categories.length > 1;
}

function thereIsAMainboard(categories) {
    return categories[0].categoryName == 'Mainboard';
}

function needToRemoveCardFromMainboard(categories) {
  return thereIsMoreCategories(categories) && thereIsAMainboard(categories);
}

function removeDuplicate(categories) {
  let trimList = [];
  for (var c of categories) {
    c.cards = removeDuplicateFromSection(c.cards);
    trimList.push(c);
  }
  if(needToRemoveCardFromMainboard(trimList)){
    let mainboard = trimList[0].cards;
    for (var i = 1; i < trimList.length; i++) {
      let cards = trimList[i].cards;
      mainboard = removeDuplicateCardsFromMainboard(cards, mainboard);
    }
  }

  return trimList;
}

module.exports.removeDuplicate = removeDuplicate;
