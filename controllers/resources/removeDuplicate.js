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

function removeDuplicateCardsFromMaybeboard(cards, maybeboardCards) {
  if(maybeboardCards){
    let resp = cards;
    for (var c of maybeboardCards) {
      if(cards.includes(c)){
        resp = removeItem(cards,c);

      }
    }
    return resp;
  }
  return cards;
}

function thereIsMoreCategories(categories) {
  return categories.length > 1;
}

function thereIsAMainboard(categories) {
    for (var c of categories) {
      if (c.categoryName === 'Mainboard') {
        return true;
      }
    }
    return false;
}

function thereIsAMaybeboard(categories) {
    for (var c of categories) {
      if (c.categoryName === 'Maybeboard') {
        return true;
      }
    }
    return false;
}

function needToRemoveCardFromMainboard(categories) {
  return thereIsMoreCategories(categories) && thereIsAMainboard(categories);
}

function needToRemoveCardFromMaybeboard(categories) {
  return thereIsMoreCategories(categories) && thereIsAMaybeboard(categories);
}

function getMainboard(categories) {
  return categories.filter( el => el.categoryName === 'Mainboard' )[0];
}

function getMaybeboard(categories) {
  return categories.filter( el => el.categoryName === 'Maybeboard' )[0];
}

function removeDuplicate(categories) {
  let trimList = [];
  for (var c of categories) {
    c.cards = removeDuplicateFromSection(c.cards);
    trimList.push(c);
  }

  if(needToRemoveCardFromMaybeboard(trimList)){
    let maybeboardCards = getMaybeboard(trimList).cards;
    for (var i = 0; i < trimList.length; i++) {
      if(trimList[i].categoryName !== 'Maybeboard'){
        let cards = trimList[i].cards;
        cards = removeDuplicateCardsFromMaybeboard(cards,maybeboardCards);
      }
    }
  }

  if(needToRemoveCardFromMainboard(trimList)){
    let mainboardCards = getMainboard(trimList).cards;
    for (var i = 0; i < trimList.length; i++) {
      if(trimList[i].categoryName !== 'Mainboard'){
        let cards = trimList[i].cards;
        mainboardCards = removeDuplicateCardsFromMainboard(cards, mainboardCards);
      }
    }
  }


  return trimList;
}

module.exports.removeDuplicate = removeDuplicate;
