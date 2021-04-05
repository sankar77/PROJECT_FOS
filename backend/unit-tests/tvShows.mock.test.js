const mockDetails = {
    'genres': ["Currently No Info Available on Genres..."],
    'productionCompanies': [
        "AMC Networks",
        "Circle of Confusion",
        "Valhalla Motion Pictures",
        "Darkwoods Productions"
        ],
    'summary': 'Good Summary',
    'seasons': [
        [
            "2010-10-31",
            "6",
            "Season 1",
            "Rick Grimes embarks on a survivalist adventure in a post-zombie apocalypse Atlanta.",
            "/yaOB2Y8GcoXwjNQ3apq67bMbNHF.jpg"
        ]
    ]
}

const mockCastAndCrew = {
    'cast': ["No Cast Information Available!"],
    'crew': ["Person-1", "Person-2"]
}

const mockReviews = {
    'reviews': [
        ['Positive Review', 2.57],
        ['Negative Review', -2.57]
    ]
}

const mockVideos = {
    'videos': ["Videos Currently Unavailable"]
}

const mockProviders = {
    'providers': ["Provider-1", "Provider-2"]
}


it('should return details', async() => {

    const fetchDetails = jest.fn( (movieID) => Promise.resolve(mockDetails) );
    const details = await fetchDetails(1);
    expect(details.genres.length).toBeGreaterThan(0);
    expect(details.productionCompanies.length).toBeGreaterThan(0);
    expect(details.summary).not.toBeNull();
    expect(details.seasons.length).toBeGreaterThan(0);
    expect(details.seasons[0].length).toEqual(5);

});


it('should return cast and crew', async() => {

    const fetchCastAndCrew = jest.fn( (movieID) => Promise.resolve(mockCastAndCrew) );
    const object = await fetchCastAndCrew(1);
    expect(object.cast.length).toBeGreaterThan(0);
    expect(object.crew.length).toBeGreaterThan(0);

});

it('should return reviews with sentiment scores', async() => {

    const fetchReviews = jest.fn( (movieID) => Promise.resolve(mockReviews) );
    const object = await fetchReviews(1);
    expect(object.reviews.length).toBeGreaterThan(0);
    expect(object.reviews[0].length).toEqual(2);

});

it('should return video urls', async() => {

    const fetchVideos = jest.fn( (movieID) => Promise.resolve(mockVideos) );
    const object = await fetchVideos(1);
    expect(object.videos.length).toBeGreaterThan(0);

});

it('should return providers', async() => {

    const fetchProviders = jest.fn( (movieID) => Promise.resolve(mockProviders) );
    const object = await fetchProviders(1);
    expect(object.providers.length).toBeGreaterThan(0);

});
