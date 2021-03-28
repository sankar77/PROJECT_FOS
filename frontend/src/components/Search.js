import React from 'react'
import axios from 'axios'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from "@material-ui/core/CardMedia";
import PacmanLoader from "react-spinners/PacmanLoader";

const apiKey = "42d845ec0caf10ecc9f34f1648197aee"
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
                    }, 6000);
        const search_query = this.props.location.state.data;
        const baseURL = `https://movies-tmdb-api.herokuapp.com/movies/`;

        const searchMoviesData = axios.get('https://api.themoviedb.org/3/search/movie?api_key='+apiKey+'&language=en-US&query='+search_query+'&page=1&include_adult=false')
        const searchMovies = await searchMoviesData.then(response => response.data.results);
        const searchMoviesURLs = searchMovies.map(latestMovie => baseURL+latestMovie.id);
        
        const tempArray = [];
        for(let i = 0; i < searchMoviesURLs.length; i++){
            const currentMovieData = await axios.get(searchMoviesURLs[i]);
            tempArray.push(currentMovieData.data);
        }
        this.setState({
            searchResults: tempArray
        })

        console.log(tempArray);
        

        // axios.get('https://api.themoviedb.org/3/search/movie?api_key='+apiKey+'&language=en-US&query='+search_query+'&page=1&include_adult=false')
        // .then((response)=>{
        //     this.setState({searchResults:response.data.results})
        // })
        // .catch((error)=>{
        //     console.log(error);
        // })


        // // const search_query = this.props.location.state.data;
        // console.log("Hey")
        // axios.get('https://api.themoviedb.org/3/search/movie?api_key='+apiKey+'&language=en-US&query='+'Avengers'+'&page=1&include_adult=false')
        // .then((response)=>{
        //     this.setState({searchResults:response.data.results});
        //     console.log(response.data.results);
        // })
        // .catch((error)=>{
        //     console.log(error);
        // })
        
}
// collectSearchResults(){
//     axios.get('https://api.themoviedb.org/3/search/movie?api_key='+apiKey+'&language=en-US&query='+'Avengers&page=1&include_adult=false')
//         .then((response)=>{
//             this.setState({searchResults:response.data.results});
//             // console.log(response.data.results);
//         })
//         .catch((error)=>{
//             console.log(error);
//         })
// }
showSearchResults(){
        let i = 0;
        var result = [];
        // console.log("In the function");
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
                <Card style = {{width:220,marginLeft:20,height:280,display:'inline-block',marginTop:0,border:"none",boxShadow:"none"}}>
                <Card key={'page-' + i} style = {{width:220,marginLeft:0,height:250,display:'inline-block',marginTop:0}}>
                 <CardMedia image={imgAddr} title="Sample Image" style = {{height:0,paddingTop:'125%',marginTop:0,marginBottom:0}}/>
                
              </Card>
              <CardContent style = {{marginTop:-20}}>
                  <p>{movie.detailsData.original_title}</p>
              </CardContent>
              </Card>
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
        // <div>
        // <React.Fragment>
        <div>
            <ul>
                {this.showSearchResults()}
                
            </ul>
            </div>
        // <Lines />
        // </React.Fragment>
        // </div>
    )
    }
}
}
export default Search;




