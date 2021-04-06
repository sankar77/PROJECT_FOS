const {
    fetchDetails,
    fetchCastAndCrew
} = require('../controllers/movies');


it('should return details', async() => {

    const details = await fetchDetails(862);
    expect(details.genres.length).toBeGreaterThan(0);
    expect(details.productionCompanies.length).toBeGreaterThan(0);
    expect(details.summary).not.toBeNull();

});


it('should return cast and crew', async() => {

    const object = await fetchCastAndCrew(862);
    expect(object.cast.length).toBeGreaterThan(0);
    expect(object.crew.length).toBeGreaterThan(0);

});
