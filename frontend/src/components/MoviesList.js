import React from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import MovieCard from './MovieCard';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';

const apiKey = "42d845ec0caf10ecc9f34f1648197aee"
var filter = false;

class MoviesList extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            latestMovies:[],
            latestMoviesData:[],
            filter:false,
            filterValue:'',
            filteredMovies:[],
            filteredMoviesData: [],
            genreList:[]
        }
    }

    async componentDidMount(){

        const baseURL = `https://movies-tmdb-api.herokuapp.com/movies/`;

        const latestMoviesData = axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=5`);
        const latestMovies = await latestMoviesData.then(response => response.data.results);
        const latestMoviesURLs = latestMovies.map(latestMovie => baseURL+latestMovie.id);
        
        const tempArray = [];
        for(let i = 0; i < latestMoviesURLs.length; i++){
            const currentMovieData = await axios.get(latestMoviesURLs[i]);
            tempArray.push(currentMovieData.data);
        }
        this.setState({
            latestMoviesData: tempArray
        })

        axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=5`)
        .then((response)=>{
            this.setState({
                latestMovies:response.data.results
            })
        })
        .catch((error)=>{
            console.log(error);
        })

        axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`)
        .then((response)=>{
            this.setState({genreList:response.data.results})
        })
        .catch((error)=>{
            console.log(error);
        })
        
    }
    

    handleChange = async (event) => {
        this.setState({filter:true});
        filter = true;
        this.setState({filterValue:event.target.value});
        
        const baseURL = `https://movies-tmdb-api.herokuapp.com/movies/`;

        const filteredMoviesData = axios.get('https://api.themoviedb.org/3/discover/movie?api_key='+apiKey+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres='+event.target.value);
        const filteredMovies = await filteredMoviesData.then(response => response.data.results);
        const filteredMoviesURLs = filteredMovies.map(filteredMovie => baseURL+filteredMovie.id);
        
        const tempArray = [];
        for(let i = 0; i < filteredMoviesURLs.length; i++){
            const currentMovieData = await axios.get(filteredMoviesURLs[i]);
            tempArray.push(currentMovieData.data);
        }
        this.setState({
            filteredMoviesData: tempArray
        })
        
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key='+apiKey+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres='+event.target.value)
        .then((response)=>{
            this.setState({filteredMovies:response.data.results})
        })
        .catch((error)=>{
            console.log(error);
        })
      };
    
    showFilteredMovies(){
        
        console.log(this.state.filterValue);
        var i = 0;
        var result = [];
        for(;i<this.state.filteredMovies.length;i++){
            var movie = this.state.filteredMovies[i];
            var movieData = this.state.filteredMoviesData[i];

            if(movie.original_language!=='en'){
                continue;
            }
            if(movie.original_title[0]==='B'&&movie.original_title[1]==='o'){
                continue;
            }
            result.splice(0,0,
               <div style = {{display:'inline-block'}}>
                <MovieCard 
                    id ={movie.id} 
                    data = {movieData}>
              </MovieCard>
              </div>
              )   
        }
        return result;

    }

    showMovies(){
        var result = [];
        let i = 0;
        
        for(;i<this.state.latestMovies.length;i++){
            var movie = this.state.latestMovies[i];
            var movieData = this.state.latestMoviesData[i];

            if(movie.original_language!=='en'){
                continue;
            }
            if(movie.original_title[0]==='B'&&movie.original_title[1]==='o'){
                continue;
            }

            result.splice(0,0,
               <div style = {{display:'inline-block'}}>
                <MovieCard 
                    id ={movie.id} 
                    data = {movieData}>
              </MovieCard>
              </div>
              )   
        }
        
        return result;
    }
    
    render(){
        return(
            <div>
                 <Button 
                    variant = "contained" 
                    color = "primary" 
                    style = {{marginLeft:20}} 
                    onClick = {()=>{this.props.history.push('/today')}}
                    >
                        GET TV Shows Airing Today
                    </Button>
                 <FormControl 
                    style = {{marginLeft:600}}
                 >
                <InputLabel 
                    htmlFor="age-native-simple"
                >
                    Genre
                </InputLabel>
                <Select native value={this.state.age} onChange={this.handleChange} inputProps={{name: 'age',id: 'age-native-simple',}}>
                    <option aria-label="None" value="" />
                    <option value={28}>Action</option>
                    <option value={12}>Adventure</option>
                    <option value={16}>Animation</option>
                </Select>
                
            </FormControl>

                <ul>
                    {filter ? this.showFilteredMovies():this.showMovies()}
                </ul>
            </div>
        )
    }
}
export default MoviesList;