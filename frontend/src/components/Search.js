import React from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from "@material-ui/core/CardMedia";
import PacmanLoader from "react-spinners/PacmanLoader";
import MovieCard from './MovieCard';

const apiKey = "42d845ec0caf10ecc9f34f1648197aee";
const imageBase = "http://image.tmdb.org/t/p/w300";

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchResults:[],
            loading:true
        }
    }
    async componentDidMount(){
        setTimeout(() => {
            this.setState({loading:false})
                    }, 11000);
        const search_query = this.props.location.state.data;
        const baseURL = `https://movies-tmdb-api.herokuapp.com/movies/`;
        const baseURL1= `https://movies-tmdb-api.herokuapp.com/movieList/`;

        const latestMoviesData = axios.get(baseURL1+search_query);
        // console.log("latest movies are",latestMoviesData);
        const latestMovies = await latestMoviesData.then(response => response.data.movieList);
        const latestMoviesURLs = latestMovies.map(id => baseURL+id);
        // console.log(latestMoviesURLs);
        const tempArray = [];
        for(let i = 0; i < latestMoviesURLs.length; i++){
            const currentMovieData = await axios.get(latestMoviesURLs[i])
            tempArray.push(currentMovieData.data);
        }
        console.log(tempArray)
        this.setState({
            searchResults: tempArray
        })
        
}

showSearchResults(){
        let i = 0;
        var result = [];
        console.log(this.state.searchResults);
        for(;i<this.state.searchResults.length;i++){
            var movie = this.state.searchResults[i];
            console.log(movie);
            var imgAddr;
            if(movie.backdrop_path){
                imgAddr = imageBase+movie.detailsData.backdrop_path
            }
            else{
                imgAddr = imageBase+movie.detailsData.poster_path
            }
            if(!movie.detailsData.backdrop_path&&!movie.detailsData.poster_path){
                continue;
            }
            if(movie.detailsData.original_language!=='en'){
                continue;
            }
            
            result.push(
            <div style = {{display:'inline-block'}}>
                <MovieCard 
                    id ={movie.id} 
                    data = {movie}>
            </MovieCard>
            </div>
              );
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
            <ul>
                {this.showSearchResults()}
                
            </ul>
            </div>
    )
    }
}
}
export default Search;




