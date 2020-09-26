function setupRelationship(sequelize) {

  const { card, cardType, image, theme, deck, maindeck } = sequelize.models;

  // Card has 0 or 1 CardType
	cardType.hasOne(card);
  card.belongsTo(cardType);

  // Card has Many Images
  card.hasMany(image);
  image.belongsTo(card);

  // Deck has 0 or 1 Theme
	theme.hasOne(deck);
  deck.belongsTo(theme);

  deck.belongsToMany(card, { through: maindeck });
  card.belongsToMany(deck, { through: maindeck });

  deck.belongsToMany(card, { through: 'maybeboard' });
  card.belongsToMany(deck, { through: 'maybeboard' });

  deck.belongsToMany(card, { through: 'garbage' });
  card.belongsToMany(deck, { through: 'garbage' });

}

module.exports = { setupRelationship };
