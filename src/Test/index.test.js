import request from 'supertest';
import app from '../app.js';

describe('GET /', () => {
  test('it should respond with 200 status code', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /about', () => {
  test('it should respond with 200 status code', async () => {
    const response = await request(app).get('/about');
    expect(response.statusCode).toBe(200);
  });
});

describe('GET /new-entry', () => {
  test('it should respond with 200 status code', async () => {
    const response = await request(app).get('/new-entry');
    expect(response.statusCode).toBe(200);
  });
});