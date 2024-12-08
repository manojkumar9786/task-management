// Example test for GET /tasks
const request = require('supertest');
const app = require('../src/app');

describe('GET /tasks', () => {
  it('should return an array of tasks', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});
