import React, {Component} from "react";
import { Button, Card, Container } from "react-bootstrap";

const apiKey="42d845ec0caf10ecc9f34f1648197aee";
const imageBase = "http://image.tmdb.org/t/p/w185"

class ShowCard extends Component {

    constructor(props) {
        super();
        this.state = {
            showID: props.id,
            completeData: {}
        }
    }

    componentDidMount() {
        this.fetchDetails()
    }

    fetchDetails() {
        const url = `https://api.themoviedb.org/3/movie/${this.state.showID}?api_key=${apiKey}&language=en-US&external_source=imdb_id`
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
                
            <Container xs={4}>
                <Card style={{ width: '18em'}} border="success">
                    
                    <Card.Img
                        style={{ height: '12em'}} 
                        variant="top" 
                        src={imageBase+this.state.completeData.poster_path}
                    />

                    <Card.Body>
                        
                        <Card.Title>
                            {this.state.completeData.title}
                        </Card.Title>

                        <Card.Text>
                            Rating: {this.state.completeData.vote_average} out of 10
                        </Card.Text>
                        
                        <Button variant="info">More Details</Button>
                    </Card.Body>
                </Card>
                </Container>               
            </div>
        )
    }
}

export default ShowCard