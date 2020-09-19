function filterFunction(key) {
  return key.name
}

function removeDuplicateSection(a, filterFunction) {
  var seen = {};
  return a.filter(function(item) {
      var k = filterFunction(item);
      return seen.hasOwnProperty(k) ? false : (seen[k] = true);
  });
}

function includesObject(arr, elem, filterFunction) {
  for (var i = 0; i < arr.length; i++) {
    if(filterFunction(arr[i]) === filterFunction(elem)){
      return true;
    }
  }
  return false;
}

function removeCard(cardArray, mainboardArray) {
  return mainboardArray.filter(a => !includesObject(cardArray, a, filterFunction));
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

function removeDuplicate(input) {
  let mainboard = {};
  for (var i of input) {
    i.cards = removeDuplicateSection(i.cards, filterFunction);
    if(i.categoryName === 'Mainboard') {
        mainboard = i;
    }
  }
  if(!isEmpty(mainboard)){
    for (var i of input) {
      if(i.categoryName !== 'Mainboard') {
          mainboard.cards = removeCard(i.cards,mainboard.cards);
      }
    }
  }
  return input;
}

module.exports.removeDuplicate = removeDuplicate;
