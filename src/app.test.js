const request = require('supertest');

const app = require('./app');

describe('app', () => {
	describe('GET /', () => {
		it('response 200', async () => {
			request(app)
				.get('/')
				.expect(200);
		});
	});
});
