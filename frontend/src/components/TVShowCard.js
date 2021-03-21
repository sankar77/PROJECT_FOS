import React, {Component} from "react";
import { Button, Card } from "react-bootstrap";

const apiKey="42d845ec0caf10ecc9f34f1648197aee";
const imageBase = "http://image.tmdb.org/t/p/w185";
const videoBase = "https://www.youtube.com/watch?v=";

class TVShowCard extends Component {

    constructor(props) {
        super();
        this.state = {
            showID: props.id,
            detailsData: {},
            genres: [],
            productionCompanies: [],
            cast: [],
            crew: [],
            reviews: [],
            videos: [],
            providers: [],
            seasons: []
        }
    }

    componentDidMount(){
        this.fetchDetails();
        this.fetchCastAndCrew();
        this.fetchReviews();
        this.fetchVideos();
        this.fetchProviders();
    }

    fetchDetails(){

        const url = `https://api.themoviedb.org/3/tv/${this.state.showID}?api_key=${apiKey}&language=en-US`;
        
        fetch(url)
        .then(response => response.json())
        .then(data => 
            this.setState({
                detailsData: data,
                genres: data.genres.map( genreInfo => genreInfo.name ),
                productionCompanies: data.production_companies.map( prodInfo => prodInfo.name ),
                seasons: data.seasons.filter( seasonInfo => seasonInfo.season_number > 0 )
                                    .map(seasonInfo => [
                                        `${seasonInfo.air_date}`,
                                        `${seasonInfo.episode_count}`,
                                        `${seasonInfo.name}`,
                                        `${seasonInfo.overview}`,
                                        `${seasonInfo.poster_path}`
                                    ])
            }));
        
    }

    fetchCastAndCrew() {
        const url = `https://api.themoviedb.org/3/tv/${this.state.showID}/aggregate_credits?api_key=${apiKey}&language=en-US`;

        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({
            cast: data.cast.map( eachCast => `${eachCast.name}`),
            crew: data.crew.map( eachCrew => `${eachCrew.name} [${eachCrew.department}]`)
        }));
    }

    fetchReviews() {
        
        const url = `https://api.themoviedb.org/3/tv/${this.state.showID}/reviews?api_key=${apiKey}&language=en-US`;

        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({
            reviews: data.results.map( eachReviewInfo => `${eachReviewInfo.content} - ${eachReviewInfo.author}` )
        }));
    }

    fetchVideos() {

        const url = `https://api.themoviedb.org/3/tv/${this.state.showID}/videos?api_key=${apiKey}&language=en-US`;

        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({
            videos: data.results.map( eachVideoInfo => [`${videoBase}${eachVideoInfo.key}`, `${eachVideoInfo.type}`] )
        }))
    }

    fetchProviders() {

        const url = `https://api.themoviedb.org/3/tv/${this.state.showID}/watch/providers?api_key=${apiKey}`;

        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({
            providers: data.results['US']['buy'].map( eachProvider => `${eachProvider.provider_name}`)
        }))
    }

    render(){
        return(
            <div>
                <Card style={{ width: '18em'}} border="success">
                    
                    <Card.Img
                        style={{ height: '12em'}} 
                        variant="top" 
                        src={imageBase+this.state.detailsData.poster_path}
                    />

                    <Card.Body>
                        
                        <Card.Title>
                            {this.state.detailsData.name}
                        </Card.Title>

                        <Card.Text>
                            Rating: {this.state.detailsData.vote_average} out of 10
                        </Card.Text>

                        {/* <Card.Text>
                            Prod: {this.state.seasons.join()}
                        </Card.Text> */}
                        
                        <Button variant="info">More Details</Button>
                    </Card.Body>
                
                </Card>
            </div>
        )
    }
}

export default TVShowCard