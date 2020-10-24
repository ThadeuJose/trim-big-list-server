function haveCategory(categories, categoryName) {
  for (var c of categories) {
    if (c.categoryName === categoryName) {
      return true;
    }
  }
  return false;
}

function getCategory(categories, categoryName) {
  return categories.filter( el => el.categoryName === categoryName )[0];
}

function removeCategory(categories, categoryName){
  return categories.filter( el => el.categoryName !== categoryName );
}

function isCorrectPosition(categories, categoryName, position) {
  return categories[position].categoryName !== categoryName;
}

function isCategoryCorrect(orderList, nameMainboard, positionMainboard) {
  return haveCategory(orderList, nameMainboard) &&
  isCorrectPosition(orderList, nameMainboard, positionMainboard);
}

function orderDecklist(categories) {
  let orderList = categories;
  let nameMainboard = 'Mainboard';
  let positionMainboard = 0;
  let nameMaybeboard = 'Maybeboard';
  let positionMaybeboard = 1;

  if(isCategoryCorrect(orderList, nameMainboard, positionMainboard)) {
      let mainboard = getCategory(orderList, nameMainboard);
      let arrayWithoutMainboard = removeCategory(orderList, nameMainboard);
      orderList = [mainboard, ...arrayWithoutMainboard];
  }

  if(isCategoryCorrect(orderList, nameMaybeboard, positionMaybeboard)) {
      let maybeboard = getCategory(orderList, nameMaybeboard);
      let arrayWithoutMaybeboard = removeCategory(orderList, nameMaybeboard);

      if(!haveCategory(orderList,nameMainboard)){
        orderList = [maybeboard, ...arrayWithoutMaybeboard];
      } else {
        let mainboard = getCategory(orderList, nameMainboard);
        let arrayWithoutBoards = removeCategory(arrayWithoutMaybeboard,
                                                nameMainboard);

        orderList = [mainboard, maybeboard, ...arrayWithoutBoards ];
      }

  }


  return orderList;
}

module.exports.orderDecklist = orderDecklist;
