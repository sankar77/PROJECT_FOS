const axios = require('axios');

jest.mock('axios');

mockNowPlaying = 
{
    movieList: [
        539181,
        627103,
        792334,
        664300,
        638045,
        809391,
        728142,
        549294,
        802068,
        598389,
        588772,
        575776,
        719164,
        794008,
        682875,
        597890,
        791107,
        529106,
        768480,
        806850
    ],
    tvshowList: [
        1402,
        79744,
        110070,
        104877,
        17610,
        105721,
        34307,
        96942,
        99489
    ]
}

test('should fetch now playing', async () => {

    axios.get.mockResolvedValue(mockNowPlaying);
    const nowPlaying = await axios.get('http://localhost:5000/nowplaying');
    expect(nowPlaying.tvshowList.length).toBeGreaterThan(0);
    expect(nowPlaying.movieList.length).toBeGreaterThan(0);

  });