const request = require('supertest');

const app = require('./app');

describe('app', () => {
  describe('GET /', () => {
    it('responses 200', async (done) => {
      request(app)
        .get('/')
        .expect(200)
        .end(done);
    });
  });
});
