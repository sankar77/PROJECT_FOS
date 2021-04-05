/**
 * @jest-environment node
 */

const axios = require('axios');
const app = require('../index');
const supertest = require('supertest');
const request = supertest(app);

it('Gets the hello world endpoint', async done => {
    const response = await request.get('/');

    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
    done();
  });


test('should fetch now playing', async done => {

    const response = await request.get('/nowplaying');
    const nowPlaying = response.body;
    expect(nowPlaying.tvshowList.length).toBeGreaterThan(0);
    expect(nowPlaying.movieList.length).toBeGreaterThan(0);
    done();
  });