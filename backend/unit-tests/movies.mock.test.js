const mockDetails = {
    'genres': ['Comedy', 'Action', 'Romance'],
    'productionCompanies': ["Currently No Info Available on Production Companies..."],
    'summary': 'Good Summary'
}

const mockCastAndCrew = {
    'cast': ['Person1', 'Person2'],
    'crew': ["No Crew Information Available!"]
}

const mockReviews = {
    'reviews': [
        ['Positive Review', 2.57],
        ['Negative Review', -2.57]
    ]
}

const mockVideos = {
    'videos': ["Video-URL-1", "Video-URL-2"]
}

const mockProviders = {
    'providers': ["Information Not Available"]
}


it('should return details', async() => {

    const fetchDetails = jest.fn( (movieID) => Promise.resolve(mockDetails) );
    const details = await fetchDetails(1);
    expect(details.genres.length).toBeGreaterThan(0);
    expect(details.productionCompanies.length).toBeGreaterThan(0);
    expect(details.summary).not.toBeNull();

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
