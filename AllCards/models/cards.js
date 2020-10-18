/* jshint indent: 2 */

const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cards', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    artist: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    asciiName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    availability: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    borderColor: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cardKingdomFoilId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cardKingdomId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    colorIdentity: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    colorIndicator: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    colors: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    convertedManaCost: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    duelDeck: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    edhrecRank: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    faceConvertedManaCost: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    faceName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    flavorName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    flavorText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    frameEffects: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    frameVersion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hand: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    hasAlternativeDeckLimit: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    hasContentWarning: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    hasFoil: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    hasNonFoil: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isAlternative: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isFullArt: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isOnlineOnly: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isOversized: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isPromo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isReprint: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isReserved: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isStarter: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isStorySpotlight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isTextless: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isTimeshifted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    keywords: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    layout: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    leadershipSkills: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    life: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    loyalty: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    manaCost: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mcmId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mcmMetaId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mtgArenaId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mtgjsonV4Id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mtgoFoilId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mtgoId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    multiverseId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    number: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    originalReleaseDate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    originalText: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    originalType: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    otherFaceIds: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    power: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    printings: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    promoTypes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    purchaseUrls: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rarity: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    scryfallId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    scryfallIllustrationId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    scryfallOracleId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    setCode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    side: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    subtypes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    supertypes: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tcgplayerProductId: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    toughness: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    types: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    uuid: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    variations: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    watermark: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cards',
    timestamps: false
    });
};
