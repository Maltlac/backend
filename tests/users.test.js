const request = require('supertest');
const app = require('../src/app');  // Importer l'application directement
const mongoose = require('mongoose');
const User = require('../src/models/User');

describe('User API', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  test('should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        birthDate: '1990-01-01',
        city: 'Paris',
        postalCode: '75001'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('firstName', 'John');
  });

  test('should fetch all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});
