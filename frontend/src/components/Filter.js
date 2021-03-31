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

class Filter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latestMoviesData:[],
            loading:true
        }
    }

 async componentDidMount(){
    setTimeout(() => {
        this.setState({loading:false})
                }, 6000);
        if(window.sessionStorage.getItem('genre')!=" "){
        const filter_value = window.sessionStorage.getItem('genre');
        // console.log(filter_value);
        const baseURL = `https://movies-tmdb-api.herokuapp.com/movies/`;
        const baseURL1 = `https://movies-tmdb-api.herokuapp.com/genres/`;

        const latestMoviesData = axios.get(baseURL1+filter_value)
        const latestMovies = await latestMoviesData.then(response => response.data.genreList);
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
        else{
        const filter_value = this.props.location.state.data;
            // console.log(filter_value);
        const baseURL = `https://movies-tmdb-api.herokuapp.com/movies/`;
        const baseURL1 = `https://movies-tmdb-api.herokuapp.com/genres/`;
    
        const latestMoviesData = axios.get(baseURL1+filter_value)
        const latestMovies = await latestMoviesData.then(response => response.data.genreList);
        const latestMoviesURLs = latestMovies.map(id => baseURL+id);
                    
        const tempArray = [];
        for(let i = 0; i < latestMoviesURLs.length; i++){
            // if(i>4){
            //     break;
            // }
            const currentMovieData = await axios.get(latestMoviesURLs[i])
            tempArray.push(currentMovieData.data);
        }
        // console.log(tempArrays)
        this.setState({
            latestMoviesData: tempArray
        })
    }
    }

    handleChange = async (event) => {
        const filter_value = event.target.value;
        window.sessionStorage.setItem('genre',filter_value);
        const baseURL = `https://movies-tmdb-api.herokuapp.com/movies/`;
        const baseURL1 = `https://movies-tmdb-api.herokuapp.com/genres/`;

        const latestMoviesData = axios.get(baseURL1+filter_value)
        const latestMovies = await latestMoviesData.then(response => response.data.genreList);
        const latestMoviesURLs = latestMovies.map(id => baseURL+id);
                    
        const tempArray = [];
        for(let i = 0; i < latestMoviesURLs.length; i++){
            // if (i>4){
            //     break;
            // }
            const currentMovieData = await axios.get(latestMoviesURLs[i])
            tempArray.push(currentMovieData.data);
        }
        console.log(tempArray)
        this.setState({
            latestMoviesData: tempArray
        })
        this.props.history.go(0);
    };

    showFilteredMovies(){
        var i = 0;
        var result = [];
        console.log(this.state.latestMoviesData);
        for(;i<this.state.latestMoviesData.length;i++){
            var movie = this.state.latestMoviesData[i];
            var movieData = this.state.latestMoviesData[i];
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
                   <Select native value={this.state.age} onChange={this.handleChange} inputProps={{name: 'age',id: 'age-native-simple',}}>
                       <option aria-label="None" value="" />
                       <option value={28}>Action</option>
                       <option value={12}>Adventure</option>
                       <option value={16}>Animation</option>
                   </Select>
                   
               </FormControl>

                   <ul>
                       {this.showFilteredMovies()}
                   </ul>

            </div>
        )
        }
    }
}

export default Filter;