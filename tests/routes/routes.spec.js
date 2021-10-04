/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Dog, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Pug',
  height: "60-85", 
  weight: "20 - 30", 
  life_span : "10 - 15",
  image: "https://www.thesprucepets.com/thmb/kV_cfc9P4QWe-klxZ8y--awxvY4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg",
  temperament: ["Active"]
};

describe('Dogs routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Dog.sync({ force: true })
    .then(() => Dog.create(dog)));
  describe('GET /dogs', () => {
    it('should get 200', async () =>
     await agent.get('/dogs').expect(200)
    );
  });
});

describe('Dogs routes', () => {
  beforeEach(() => Dog.sync({ force: true }));
  describe('GET /dogs', () => {
    it('should get 200', () =>
      agent.get('/dogs/45').expect(200)
      .expect('Content-Type', /json/)
    );
  });
});

describe('GET /dogs/6854', () => {
  it('should get 400', () =>
  agent.get('/dogs/6854').expect(400));
  });


describe('GET /dogs/?name=golden', () => {
  it('should get 200', async () =>
    await agent.get('/dogs/?name=golden')
    .expect(200)
    .expect('Content-Type', /json/))
});



describe('Dog routes', () => {
  beforeEach(() => Dog.sync({ force: true }));
  describe('POST /dog', () => {
    it('should get 200', async () =>
      await agent.post('/dog').send(dog)
      .expect(200)
      .expect('Content-Type', /json/)
    );
  });
});


describe('Temperament routes', () => {
  beforeEach(() => Dog.sync({ force: true }));
  describe('GET /temperament', () => {
    it('should get 200', async () =>
     await agent.get('/temperament')
      .expect(200)
      .expect('Content-Type', /json/)
    );
  });
});



