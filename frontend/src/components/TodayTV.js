import React from 'react';
import axios from 'axios';
import PacmanLoader from "react-spinners/PacmanLoader";

import TVShowCard from './TVShowCard';

const apiKey = "42d845ec0caf10ecc9f34f1648197aee"

class TodayTV extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tvShows:[],
            tvShowsData: [],
            loading: true
        }
    }
    
    async componentDidMount(){
        setTimeout(() => {
            this.setState({loading:false})
                    }, 6000);
        
        const baseURL = `https://movies-tmdb-api.herokuapp.com/tvshows/`;
        const baseURL1 = `https://movies-tmdb-api.herokuapp.com/nowplaying/`;

        const latestTvshowData = axios.get(baseURL1)
        const latestTvshows = await latestTvshowData.then(response => response.data.tvshowList);
        const latestTvURLs = latestTvshows.map(id => baseURL+id);

        console.log("latest tv ursl",latestTvURLs);
                    
        const tempArray = [];
        for(let i = 0; i < latestTvURLs.length; i++){
            const currentTvData = await axios.get(latestTvURLs[i])
            tempArray.push(currentTvData.data);
        }
        console.log("temp array is ",tempArray)
        this.setState({
            tvShowsData: tempArray
        })
    }


    showtvShows(){
        var result = [];
        let i = 0;
        console.log("after data os",this.state.tvShowsData);
        for(;i<this.state.tvShowsData.length;i++){
            var tvshow = this.state.tvShowsData[i];
            var tvShowData = this.state.tvShowsData[i];
            // if(tvshow.original_language!=='en'){
            //     continue;
            // }
            result.splice(0,0,
               <div style = {{display:'inline-block'}}>
                <TVShowCard 
                    id ={tvshow.showID} 
                    data = {tvShowData}
                >
              </TVShowCard>
              </div>
              
              )
            
        }
        console.log("res is ",result);
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
        else {

        return(
            <div>
                <ul>
                    {this.showtvShows()}
                </ul>
            </div>
        )
        }
    }
}
export default TodayTV;