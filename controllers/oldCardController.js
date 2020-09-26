const axios = require('axios');
const db = require('../database/db.js');

async function getScryfallName(url) {
  return axios(url).then((response) => {
    // handle success
    let data = response.data;
    const object = data.object;
    const name = data.name;

    console.log(object);
    console.log(name);

    return {object, name};

  })
  .catch((error) => {
    console.log(error.response.data.object);
    let data = error.response.data;
    const object = data.object;
    const details = data.details;

    return {object, details};
  });
}

function readOne(req, res) {
  let id = req.params.id;

  // const url = `https://api.scryfall.com/cards/named?fuzzy=${id}`;
  //
  // getScryfallName(url).then((response) => {
  //     res.json(response);
  // });

  db.readCard(id).then((data) => {
      res.status(200).json(data);
  });


};

function setup(req, res){
  db.setupTable().then((data) => {
    res.status(200).json(data);
  })
}


function readAll(req, res) {
  db.readAllCards().then((data) => {
      res.status(200).json(data);
  });
};


module.exports = {
  readOne,
  readAll,
  setup,
};
