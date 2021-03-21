import React, {Component} from "react";
import { Button, Card } from "react-bootstrap";

const apiKey="42d845ec0caf10ecc9f34f1648197aee";
const imageBase = "http://image.tmdb.org/t/p/w185"

class ShowCard extends Component {

    constructor(props) {
        super();
        this.state = {
            showID: props.id,
            completeData: {},
            isMovie: props.movie === "true"? true:false,
        }
    }

    componentDidMount() {
        this.fetchDetails()
    }

    fetchDetails() {

        const url = this.state.isMovie === true? 
        `https://api.themoviedb.org/3/movie/${this.state.showID}?api_key=${apiKey}&language=en-US&external_source=imdb_id`:
        `https://api.themoviedb.org/3/tv/${this.state.showID}?api_key=${apiKey}&language=en-US&external_source=imdb_id`
        fetch(url)
        .then(response => response.json())
        .then(data => 
            this.setState({
                completeData: data
            }));

    }

    render(){
        return(
            <div>
                
                <Card style={{ width: '18em'}} border="success">
                    
                    <Card.Img
                        style={{ height: '12em'}} 
                        variant="top" 
                        src={imageBase+this.state.completeData.poster_path}
                    />

                    <Card.Body>
                        
                        <Card.Title>
                            {this.state.completeData.name === undefined?
                            this.state.completeData.title:this.state.completeData.name}
                        </Card.Title>

                        <Card.Text>
                            Rating: {this.state.completeData.vote_average} out of 10
                        </Card.Text>
                        
                        <Button variant="info">More Details</Button>
                    </Card.Body>
                
                </Card>
            </div>
        )
    }
}

export default ShowCard