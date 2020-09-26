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
// TODO: Wrong names. Not replacing all the spaces
function getFilename(data) {
  return `${data.set}-${data.number}-${data.name.toLowerCase().replace(" ","-")}`;
}

function getImageFromScryfall(url, data) {
  const filename = `${getFilename(data)}.jpg`;
  const image_path = path.join('./','public','images','cards',filename);
  return downloadImage(url, image_path)
}

module.exports = { getImageFromScryfall, getFilename };
