import React, {Component} from "react";
import { Button, Card } from "react-bootstrap";

const apiKey="42d845ec0caf10ecc9f34f1648197aee";
const imageBase = "http://image.tmdb.org/t/p/w185"

class MovieCard extends Component {

    constructor(props) {
        super();
        this.state = {
            showID: props.id,
            detailsData: {},
            genres: [],
            productionCompanies: [],
            cast: [],
            crew: [],
            comments: [],
            summary: ""
        }
    }

    componentDidMount(){
        this.fetchDetails();
        this.fetchCastAndCrew();
    }

    fetchDetails(){

        const url = `https://api.themoviedb.org/3/movie/${this.state.showID}?api_key=${apiKey}&language=en-US&external_source=imdb_id`;
        
        fetch(url)
        .then(response => response.json())
        .then(data => 
            this.setState({
                detailsData: data,
                genres: data.genres.map( genreInfo => genreInfo.name ),
                productionCompanies: data.production_companies.map( prodInfo => prodInfo.name ),
                summary: data.overview
            }));
        
    }

    fetchCastAndCrew() {
        const url = `https://api.themoviedb.org/3/movie/${this.state.showID}/credits?api_key=${apiKey}&language=en-US`;

        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({
            cast: data.cast.map( eachCast => `${eachCast.name}`),
            crew: data.crew.map( eachCrew => `${eachCrew.name} [${eachCrew.job}]`)
        }));
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
                            {this.state.detailsData.title}
                        </Card.Title>

                        <Card.Text>
                            Rating: {this.state.detailsData.vote_average} out of 10
                        </Card.Text>

                        {/* <Card.Text>
                            Crew: {this.state.crew.join()}
                        </Card.Text> */}
                        
                        <Button variant="info">More Details</Button>
                    </Card.Body>
                
                </Card>
            </div>
        )
    }
}

export default MovieCard