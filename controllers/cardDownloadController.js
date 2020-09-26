const axios = require('axios');
const path = require('path');
const fs = require('fs');

function downloadImage(url, image_path) {
  return axios({
    url,
    responseType: 'stream',
  }).then(response => new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream(image_path))
          .on('finish', () => resolve(image_path))
          .on('error', e => reject(e));
      }),
  );
}

function getScryfallImage(url, set, number) {
  return axios(url).then(function (response) {
    // handle success
    let data = response.data;
    const filename = `${set}-${number}-${data.name.toLowerCase().replace(" ","-")}.jpg`;
    const url = data.image_uris.normal;
    const image_path = path.join('./','public','images','cards',filename);

    return {url, image_path};

  }).then((response) => {
    return downloadImage(response.url, response.image_path)
  })
  .catch(error => console.log(error))
}

async function downloadOne(req, res) {
  const set = req.params.set;
  const number = req.params.number;
  const url = `https://api.scryfall.com/cards/${set}/${number}`;

  let response = 'Ok';//await getScryfallImage(url, set, number);

  res.json(response);
};

module.exports = {
  downloadOne,
};
