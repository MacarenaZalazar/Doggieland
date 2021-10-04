const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Dog.create({ name: 'Pug' });
      });
    });

    describe('height', () => {
      it('should throw an error if height is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid height')))
          .catch(() => done());
      });
      it('should work when its a valid height', () => {
        Dog.create({ name: 'Pug', height: '5 - 7' });
      });
    });

    describe('weight', () => {
      it('should throw an error if weight is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid weight')))
          .catch(() => done());
      });
      it('should work when its a valid weight', () => {
        Dog.create({ name: 'Pug',  height: '5 - 7', weight:'36' });
      });
    });   

    describe('life_span', () => {
      it('should throw an error if life_span is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid life_span')))
          .catch(() => done());
      });
      it('should work when its a valid life_span', () => {
        Dog.create({ name: 'Pug', height: '5 - 7', weight:'36', life_span: '10 - 15' });
      });
    });
  });
});

