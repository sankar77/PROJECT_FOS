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
import { CardGroup } from "react-bootstrap";
import TVShowCard from './TVShowCard';

// import NavBar from './components/NavBar';
// import AboutUs from './components/AboutUs';

const apiKey = "42d845ec0caf10ecc9f34f1648197aee"
const imageBase = "http://image.tmdb.org/t/p/w300";

class TodayTV extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tvShows:[]
        }
    }
    componentDidMount(){
        axios.get('https://api.themoviedb.org/3/tv/airing_today?api_key='+apiKey+'&language=en-US&page=1')
        .then((response)=>{
            console.log(response.data.results);
            this.setState({tvShows:response.data.results})

        })
        .catch((error)=>{
            console.log(error);
        })
    }
    showtvShows(){
        var result = [];
        let i = 0;
        for(;i<this.state.tvShows.length;i++){
            var tvshow = this.state.tvShows[i];
            var imgAddr;
            if(tvshow.backdrop_path){
                imgAddr = imageBase+tvshow.backdrop_path
            }
            else{
                imgAddr = imageBase+tvshow.poster_path
            }
            if(tvshow.original_language!=='en'){
                continue;
            }
            // if(tvshow.original_title[0]==='B'&&tvshow.original_title[1]==='o'){
            //     continue;
            // }
            result.splice(0,0,
               <div style = {{display:'inline-block'}}>
                <TVShowCard id ={tvshow.id}>
                {/* <Card key={'page-' + i} style = {{width:220,marginLeft:0,height:250,display:'inline-block',marginTop:0}}>
                 <CardMedia image={imgAddr} title="Sample Image" style = {{height:0,paddingTop:'125%',marginTop:0,marginBottom:0}}/>
                
              </Card> */}
              {/* <CardContent style = {{marginTop:-20}}>
                  <p>{movie.original_title}</p>
              </CardContent> */}
              </TVShowCard>
              </div>
              
              )
            
        }
        
        return result;
    }
    render(){
        return(
            <div>
                <ul>
                    {this.showtvShows()}
                </ul>
            </div>
        )
    }
}
export default TodayTV;