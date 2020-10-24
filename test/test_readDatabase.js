const { findByName } = require('../AllCards/readDatabase');
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.should();
chai.use(chaiAsPromised);

describe('readDatabases Tests', function () {
  describe('findByName', function () {

    it('Should work', function (done) {
      const name = 'Dark Ritual';
      findByName(name).should.be.fulfilled.and.notify(done);
    });

    it('Should make a valid search', function (done) {
      const name = 'Dark Ritual';
      const output = {
        id: 564,
        uuid: 'b93edb62-9114-5499-8f84-b15dbe30c9d5',
        name: 'Dark Ritual',
        convertedManaCost: 1,
        manaCost: '{B}',
        scryfallId: 'c4d24ff3-315d-44cd-8c27-d8ad6972e027',
        type: 'Instant',
        setCode: '2ED',
        hasAlternativeDeckLimit: 0,
        faceName: null,
        faceConvertedManaCost: null,
        side: null
      };
      findByName(name).should.eventually.deep.equal(output).and.notify(done);
    });

    it('Should has Alternative Deck Limits property', function (done) {
      const name = 'Shadowborn Apostle';
      const isTrue = 1;
      findByName(name).should.eventually.deep
          .property('hasAlternativeDeckLimit', isTrue).and.notify(done);
    });

    it('Should return the face card search', function (done) {
      const name = "Emeria's Call";
      findByName(name).should.eventually.deep
          .property('faceName', name).and.notify(done);
    });

    it('Should be reject', function (done) {
      const name = "Asmr123";
      findByName(name).should.be.rejected.and.notify(done);
    });

    it('Should return first face card', function (done) {
      const name = "Boom // Bust";
      const faceName = "Boom";
      findByName(name).should.eventually.have.nested
          .property('faceName', faceName).and.notify(done);
    });


  });
});

//Should return first face card
// findByName("Boom // Bust").then((result) => {
//   console.log(result);
// });
