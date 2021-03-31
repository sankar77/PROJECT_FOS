import axios from 'axios';
import React from 'react';
import Button from '@material-ui/core/Button';
import MovieCard from './MovieCard';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import './movies.css';
import PacmanLoader from "react-spinners/PacmanLoader";
import  '../App.css';
import './Filter';

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
            genreList:[],
            loading:true
        }
    }

    async componentDidMount(){
            setTimeout(() => {
                this.setState({loading:false})
                        }, 6000);
        
        const baseURL = `https://movies-tmdb-api.herokuapp.com/movies/`;
        const baseURL1 = `https://movies-tmdb-api.herokuapp.com/nowplaying/`;

        const latestMoviesData = axios.get(baseURL1)
        const latestMovies = await latestMoviesData.then(response => response.data.movieList);
        const latestMoviesURLs = latestMovies.map(id => baseURL+id);
                    
        const tempArray = [];
        for(let i = 0; i < latestMoviesURLs.length; i++){
            const currentMovieData = await axios.get(latestMoviesURLs[i])
            tempArray.push(currentMovieData.data);
        }
        console.log(tempArray)
        this.setState({
            latestMoviesData: tempArray
        })
        
    }
    
    handleChange = async (event) => {
        this.props.history.push('/filter',{data:event.target.value})
      };

    showMovies(){

        var result = [];
        let i = 0;
        for(;i<this.state.latestMoviesData.length;i++){
            var movie = this.state.latestMoviesData[i];
            var movieData = this.state.latestMoviesData[i];
            if(movie.detailsData.original_title[0]==='B'&&movie.detailsData.original_title[1]==='o'){
                continue;
            }
            if(movie.detailsData.original_language!=="en"){
                continue;
            }
            result.splice(0,0,
               <div style = {{display:'inline-block'}}>
                <MovieCard 
                    id ={movie.showID} 
                    data = {movieData}>
              </MovieCard>
              </div>
              )   
        }
        return result;
    }
    
    render(){
        if(this.state.loading){
            return(
            <div className="App1">
            <PacmanLoader 
                    size={30} 
                    color={"#000000"} 
                    loading={this.state.loading} />
            </div>
            )
        }
        else{
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
                   <Select native value={'Select a Genre'} onChange={this.handleChange} inputProps={{name: 'age',id: 'age-native-simple',}}>
                       <option aria-label="None" value="" />
                       <option value={28}>Action</option>
                       <option value={12}>Adventure</option>
                       <option value={16}>Animation</option>
                       <option value={35}>Comedy</option>
                       <option value={80}>Crime</option>
                       <option value={99}>Documentary</option>
                       <option value={18}>Drama</option>
                       <option value={10751}>Family</option>
                       <option value={14}>Fantasy</option>
                       <option value={36}>History</option>
                       <option value={27}>Horror</option>
                       <option value={10402}>Music</option>
                       <option value={9648}>Mystery</option>
                       <option value={10749}>Romance</option>
                       <option value={878}>Science Fiction</option>
                       <option value={53}>Thriller</option>
                       <option value={10752}>War</option>
                   </Select>
                   
               </FormControl>
   
                   <ul>
                       {filter ? this.showFilteredMovies():this.showMovies()}
                   </ul>

            </div>
        )
        }
    }
}
export default MoviesList;