const mockDetails = {
    'genres': ['Comedy', 'Action', 'Romance'],
    'productionCompanies': [],
    'summary': 'Good Summary'
}

it("should base unit test", () => {
    expect('unit test').toEqual('unit test');
});

it('should return details', async() => {

    const fetchDetails = jest.fn( (movieID) => Promise.resolve(mockDetails) );
    const details = await fetchDetails(1);
    expect(details.genres).toEqual(['Comedy', 'Action', 'Romance']);
    expect(details.productionCompanies.length).toEqual(0);
    expect(details.summary).toEqual('Good Summary');

});
