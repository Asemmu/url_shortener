// tests/url.test.js

const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

// Import the app or create it as in your index.js
const { sequelize, connect } = require('../util/database');
const urlRoute = require('../routes/url');

// Create a new Express app for testing
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/url', urlRoute);

beforeAll(async () => {
  // Make sure the database is connected before tests run
  await sequelize.sync();
  await connect();
});

afterAll(async () => {
  // Close the database connection after all tests are done
  await sequelize.close();
});

describe('GET /url/test123', () => {
  it('should respond with a 404 status and the expected response', async () => {
    const response = await request(app).get('/url/test123');
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({ error: 'No Data Found' }); // Adjust based on your route's response
  });
});

describe('POST /url and GET shortened URL', () => {
  it('should redirect to Google when the shortened URL is hit', async () => {
    // Step 1: POST to /url to get the shortened URL
    const postResponse = await request(app)
      .post('/url')
      .send({ url: 'http://www.google.com' })
      .expect('Content-Type', /json/)
      .expect(200);

  });
});