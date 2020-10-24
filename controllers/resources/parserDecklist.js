function formatLine(line) {
  line = line.replace(/ {2,}/g, ' ');
  line = line.replace('\t', ' ');
  line = line.trim();
  if(line){
    if (!line.match(/^\d/)) {
     line = `1 ${line}`
    }
  }
  return line;
}

function getTitle(item) {
  return item.substring(2, item.lastIndexOf(':')).trim();
}

function getMaxQuantity(item) {
  return parseInt(item.substring(item.lastIndexOf(':') + 1).trim());
}

function parseSections(section) {
  const lines = section.split('\n');
  let categoryName = '';
  let maxQuantity = '';
  let cards = [];

  lines.forEach((item) => {
    if (item.startsWith('//')) {
      if (item.toLowerCase().includes('main')) {
        categoryName = 'Mainboard';
        maxQuantity = -1;
      } else {
        categoryName = getTitle(item);
        maxQuantity = getMaxQuantity(item);
      }
    } else {
      if(formatLine(item)){
        cards.push(formatLine(item));
      }
    }
  });
  return { categoryName, maxQuantity, cards };
}

function isEmptySection(item) {
  return item.cards.length === 0;
}

function createEmptySection() {
  return { categoryName: '', maxQuantity: -1, cards:[] };
}

function concatMainboard(sections) {
  let mainboard = createEmptySection();
  let resp =[];

  for (var s of sections) {
    if(s.categoryName === 'Mainboard'){
      if(isEmptySection(mainboard)){
        mainboard = s;
      }else{
        let cards = mainboard.cards;
        mainboard.cards = [ ...cards, ...s.cards];
      }
    }else {
      resp.push(s);
    }
  }

  if(!isEmptySection(mainboard)){
    return [ mainboard, ...resp ];
  }

  return resp;
}

function parserDecklist(input) {
  const sections = input.split('\n\n');

  const resp = sections
      .map(parseSections)
      .filter(i => !isEmptySection(i))
      .map((item) => {
        if (!item.categoryName) {
          item.categoryName =  'Mainboard';
          item.maxQuantity = -1;
        }
        return item;
      });

  return concatMainboard(resp);
}

module.exports.parserDecklist = parserDecklist;
