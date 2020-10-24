const { initModels } = require('./models/init-models')

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './AllCards/AllPrintings.sqlite',
  logging: false
});

initModels(sequelize);

const { Op } = require("sequelize");

const cards = sequelize.models.cards;


function createAttributes(){
  const identifier = ['id', 'uuid', 'name'];
  const cmcAndManaCost = ['convertedManaCost', 'manaCost'];
  const idToGetImage = ['scryfallId'];
  const type = ['type'];
  const setInformations = ['setCode'];
  // alternativeDeckLimit is for cards like Shadowborn Apostle
  const alternativeDeckLimit = ['hasAlternativeDeckLimit'];
  const optionalFacesValues = ['faceName', 'faceConvertedManaCost', 'side'];
  const allArray = [...identifier, ...cmcAndManaCost, ...idToGetImage, ...type,
                    ...setInformations, ...alternativeDeckLimit,
                    ...optionalFacesValues];
  return allArray;
}

function findFaceCard(name){
  const options = {
    attributes: createAttributes(),
    where: {
      faceName:{
        [Op.eq]: name,
      },
    },
    raw: true,
  };
  return cards.findOne(options);
}

function findByName(name) {
  if(name.includes('//')){
    name = name.substring(0, name.indexOf('/')).trim();
    return findFaceCard(name);
  }

  const options = {
    attributes: createAttributes(),
    where: {
      name:{
        [Op.eq]: name,
      },
    },
    raw: true,
  };

  const findOneCard = cards.findOne(options);

  const findFaceCardIfExist = (data) => {
    if(!data) {
      return findFaceCard(name);
    }
    return data;
  };

  const returnCardIfExist = (data) => {
    if(!data) {
      return Promise.reject(new Error(`Card with name ${name} not found`));
    }
    return data;
  };

  return findOneCard
          .then(findFaceCardIfExist)
          .then(returnCardIfExist);
}


//Command to run this file
//Have to be in this page
//C:\Users\User\Documents\GitHub\trim-big-list-server>node AllCards/readDatabase.js

module.exports = { findByName };
