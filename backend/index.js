const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
// const config = require('./config');

const movieRoutes = require('./routes/movies');
const tvShowRoutes = require('./routes/tvShows');
const getMovieRoutes = require('./routes/movieList');
const getnowplaying = require('./routes/nowPlaying');
const getgenremovies = require('./routes/Genres');


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.listen(config.port, () => {
    console.log(`Server is running on port: ${config.port}`);
});

app.use('/movies', movieRoutes.routes);
app.use('/tvshows', tvShowRoutes.routes);
app.use('/movieList',getMovieRoutes.routes);
app.use('/nowplaying',getnowplaying.routes);
app.use('/genres',getgenremovies.routes);




app.get('/', (req,res) => {
    res.send("Hello World!")
});
