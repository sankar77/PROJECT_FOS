const {
    fetchDetails,
    fetchCastAndCrew
} = require('../controllers/tvShows');


it('should return details', async() => {

    const details = await fetchDetails(1402);
    expect(details.genres.length).toBeGreaterThan(0);
    expect(details.productionCompanies.length).toBeGreaterThan(0);
    expect(details.summary).not.toBeNull();
    expect(details.seasons.length).toBeGreaterThan(0);
    expect(details.seasons[0].length).toEqual(5);

});


it('should return cast and crew', async() => {

    const object = await fetchCastAndCrew(1402);
    expect(object.cast.length).toBeGreaterThan(0);
    expect(object.crew.length).toBeGreaterThan(0);

});
