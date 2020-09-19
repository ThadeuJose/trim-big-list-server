const axios = require('axios');

async function getScryfallInfo_aux(name, url) {
  await sleep(1000);
  return axios(url).then((response) => {
    // handle success
    let data = response.data;
    const object = data.object;
    const name = data.name;
    const cmc = data.cmc;
    const type_line = data.type_line;
    const mana_cost = data.mana_cost;
    const url = data.image_uris.normal;
    const set = data.set;
    const number = data.collector_number;

    return {object, name, cmc, type_line, mana_cost, url, set, number};

  })
  .catch((error) => {
    console.log(`Error in card: ${name}`);

    if(error.response){
      console.log(error.response);
      if(error.response.data){
        console.log(error.response.data);
      }
    }

    let data = error.response.data;
    const object = data.object;
    const details = data.details;

    return {object, name, details};
  });
}

async function getScryfallInfo(name) {

  const url = `https://api.scryfall.com/cards/named?fuzzy=${name}`;

  return getScryfallInfo_aux(name, url).then((response) => {
      return response;
  });
};



function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

module.exports.getScryfallInfo = getScryfallInfo;
