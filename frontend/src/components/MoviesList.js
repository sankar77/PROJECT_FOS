// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from "@material-ui/core/CardMedia";
import MovieCard from './MovieCard';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import { CardGroup } from "react-bootstrap";

// import NavBar from './components/NavBar';
// import AboutUs from './components/AboutUs';

const apiKey = "42d845ec0caf10ecc9f34f1648197aee"
const imageBase = "http://image.tmdb.org/t/p/w300";
var filter = false;
class MoviesList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latestMovies:[],
            filter:false,
            filterValue:'',
            filteredMovies:[],
            genreList:[]
        }
    }
    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/movie/now_playing?'+'api_key='+apiKey+'&language=en-US&page=5')
        .then((response)=>{
            // console.log(response.data.results);
            this.setState({latestMovies:response.data.results})

        })
        .catch((error)=>{
            console.log(error);
        })
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key='+apiKey+'&language=en-US')
        .then((response)=>{
            this.setState({genreList:response.data.results})
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    // resetSearch(){
    //     filter = false;
    //     console.log(filter);
    //     return "Hello";
    // }
    handleChange = (event) => {
        this.setState({filter:true});
        filter = true;
        this.setState({filterValue:event.target.value});
        // this.setState({age:event.target.value})
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key='+apiKey+'&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres='+event.target.value)
        .then((response)=>{
            // console.log(response.data.results);
            this.setState({filteredMovies:response.data.results})

        })
        .catch((error)=>{
            console.log(error);
        })
    //    filter = false;
      };
    showFilteredMovies(){
        
        console.log(this.state.filterValue);
        var filter_query = this.state.filterValue;
        // console.log(this.state.filteredMovies);
        var i = 0;
        var result = [];
        for(;i<this.state.filteredMovies.length;i++){
            var movie = this.state.filteredMovies[i];
            var imgAddr;
            // console.log(movie)
            if(movie.backdrop_path){
                imgAddr = imageBase+movie.backdrop_path
            }
            else{
                imgAddr = imageBase+movie.poster_path
            }
            if(movie.original_language!=='en'){
                continue;
            }
            if(movie.original_title[0]==='B'&&movie.original_title[1]==='o'){
                continue;
            }
            result.splice(0,0,
               <div style = {{display:'inline-block'}}>
                <MovieCard id ={movie.id}>
                {/* <Card key={'page-' + i} style = {{width:220,marginLeft:0,height:250,display:'inline-block',marginTop:0}}>
                 <CardMedia image={imgAddr} title="Sample Image" style = {{height:0,paddingTop:'125%',marginTop:0,marginBottom:0}}/>
                
              </Card> */}
              {/* <CardContent style = {{marginTop:-20}}>
                  <p>{movie.original_title}</p>
              </CardContent> */}
              </MovieCard>
              </div>
              
              )
            
        }
        // this.setState({filter:false});
        // filter = false;
        return result;

    }
    showMovies(){
        console.log(this.state.latestMovies);
        var result = [];
        let i = 0;
        for(;i<this.state.latestMovies.length;i++){
            var movie = this.state.latestMovies[i];
            var imgAddr;
            if(movie.backdrop_path){
                imgAddr = imageBase+movie.backdrop_path
            }
            else{
                imgAddr = imageBase+movie.poster_path
            }
            if(movie.original_language!=='en'){
                continue;
            }
            if(movie.original_title[0]==='B'&&movie.original_title[1]==='o'){
                continue;
            }
            result.splice(0,0,
               <div style = {{display:'inline-block'}}>
                <MovieCard id ={movie.id}>
                {/* <Card key={'page-' + i} style = {{width:220,marginLeft:0,height:250,display:'inline-block',marginTop:0}}>
                 <CardMedia image={imgAddr} title="Sample Image" style = {{height:0,paddingTop:'125%',marginTop:0,marginBottom:0}}/>
                
              </Card> */}
              {/* <CardContent style = {{marginTop:-20}}>
                  <p>{movie.original_title}</p>
              </CardContent> */}
              </MovieCard>
              </div>
              
              )
            
        }
        
        return result;
    }
    render(){
        // window.sessionStorage.setItem('filter',false);
        return(
            <div>
                 <Button variant = "contained" color = "primary" style = {{marginLeft:20}} onClick = {()=>{this.props.history.push('/today')}}>GET TV Shows Airing Today</Button>
                 <FormControl style = {{marginLeft:600}}>
                <InputLabel htmlFor="age-native-simple">Genre</InputLabel>
                <Select native value={this.state.age} onChange={this.handleChange} inputProps={{name: 'age',id: 'age-native-simple',}}>
                    <option aria-label="None" value="" />
                    <option value={28}>Action</option>
                    <option value={12}>Adventure</option>
                    <option value={16}>Animation</option>
                </Select>
                
            </FormControl>

            {/* {filter ? <Button variant = "contained" color = "primary" style = {{marginLeft:20}} onClick = {()=><ul>{this.resetSearch()}</ul>}>RESET SEARCH</Button>:null} */}
                <ul>
                    {filter ? this.showFilteredMovies():this.showMovies()}
                </ul>
            </div>
        )
    }
}
export default MoviesList;