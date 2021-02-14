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

  describe('GET /', () => {
    it('responses 200', async (done) => {
      request(app)
        .get('/todo')
        .expect(200)
        .end(done);
    });
  });

  describe('POST /todo', () => {
    const payload = {
      todo: '오늘의 할 일',
    };

    it('responses 201', async (done) => {
      request(app)
        .post('/todo')
        .send(payload)
        .expect(201)
        .end(done);
    });
  });
});
