import React from 'react';
import axios from 'axios'

import TVShowCard from './TVShowCard';

const apiKey = "42d845ec0caf10ecc9f34f1648197aee"

class TodayTV extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tvShows:[],
            tvShowsData: []
        }
    }
    
    async componentDidMount(){
        
        const baseURL = `https://movies-tmdb-api.herokuapp.com/tvshows/`;

        const tvShowsData = axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=en-US&page=1`);
        const tvShows = await tvShowsData.then(response => response.data.results);
        const tvShowsURLs = tvShows.map(latestMovie => baseURL+latestMovie.id);
        
        const tempArray = [];
        for(let i = 0; i < tvShowsURLs.length; i++){
            const currentTVData = await axios.get(tvShowsURLs[i]);
            tempArray.push(currentTVData.data);
        }
        this.setState({
            tvShowsData: tempArray
        })
        
        axios.get(`https://api.themoviedb.org/3/tv/airing_today?api_key=${apiKey}&language=en-US&page=1`)
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
            var tvShowData = this.state.tvShowsData[i];
            if(tvshow.original_language!=='en'){
                continue;
            }
            result.splice(0,0,
               <div style = {{display:'inline-block'}}>
                <TVShowCard 
                    id ={tvshow.id} 
                    data = {tvShowData}
                >
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