function formatLine(line) {
  line = line.replace(/ {2,}/g, ' ');
  line = line.replace('\t', ' ');
  return line.trim();
}

function getTitle(item) {
  return item.substring(2, item.lastIndexOf(':')).trim();
}

function getMaxQuantity(item) {
  return item.substring(item.lastIndexOf(':') + 1).trim();
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

function parserDecklist(input) {
  const sections = input.split('\n\n');
  const merged = [];

  return sections.map((item, idx) => {
    const response = parseSections(item);
    if (!response.categoryName) {
      response.categoryName =  'Mainboard';
      response.maxQuantity = -1;
    }
    return response;
  });
}

module.exports.parserDecklist = parserDecklist;
