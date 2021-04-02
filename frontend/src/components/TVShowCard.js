import React, {Component} from "react";
import { Button, Card, OverlayTrigger, Popover, Container, Row } from "react-bootstrap";

const imageBase = "http://image.tmdb.org/t/p/w185";

const scrollable = {
    height: '40rem',
    overflow: 'auto'
};

class TVShowCard extends Component {

    constructor(props) {
        super();
        this.state = {
            showID: props.id,
            detailsData: props.data.detailsData,
            genres: props.data.genres,
            productionCompanies: props.data.productionCompanies,
            cast: props.data.cast,
            crew: props.data.crew,
            reviews: props.data.reviews,
            videos: props.data.videos,
            providers: props.data.providers,
            seasons: props.data.seasons
        }
    }

    async componentDidMount(){
    }

    castPopover(){
        return (
            <Popover id="popover-basic" style={scrollable}>
                <Popover.Content>
                    <ul className="list-group flush">
                        {this.state.cast.map( listItem => (
                            <li className="list-group-item">{listItem}</li>
                        ))}
                    </ul>
                </Popover.Content>
            </Popover>
        )
    }

    crewPopover(){
        return (
            <Popover id="popover-basic" style={scrollable}>
                <Popover.Content>
                    <ul className="list-group">
                        {this.state.crew.map( listItem => (
                            <li className="list-group-item">{listItem}</li>
                        ))}
                    </ul>
                </Popover.Content>
            </Popover>
        )
    }

    reviewsPopover(){
        return (
            <Popover id="popover-basic" style={scrollable}>
                <Popover.Content>
                    <ul className="list-group flush">
                         
                    {this.state.reviews
                        .filter( listItem => listItem[1] < 0 )
                        .map( listItem => (
                            <li className="list-group-item" style={{color: 'red'}}>{listItem[0]}</li>
                        ))}

                        {this.state.reviews
                        .filter( listItem => listItem[1] > 0 )
                        .map( listItem => (
                            <li className="list-group-item" style={{color: 'green'}}>{listItem[0]}</li>
                        ))}
                        
                    </ul>
                </Popover.Content>
            </Popover>
        )
    }

    videosPopover(){
        return (
            <Popover id="popover-basic" style={scrollable}>
                <Popover.Content>
                    <ul className="list-group flush">
                        {this.state.videos.map( listItem => (
                            <li className="list-group-item">
                                <a target="_blank" rel="noreferrer" href={listItem[0]}>{listItem[1]}</a>
                            </li>
                        ))}
                    </ul>
                </Popover.Content>
            </Popover>
        )
    }

    seasonItemPopover(seasonItem){
        return(
            <Popover id="popover-basic" style={scrollable}>
                <Popover.Title>{seasonItem[2]}</Popover.Title>
                <Popover.Content>
                    <img src={imageBase+seasonItem[4]} alt={seasonItem[2]} /><hr />
                    <p><b>Summary</b><br />{seasonItem[3]}</p><hr />
                    <p><b>Last Air Date</b><br />{seasonItem[0]}</p><hr />
                    <p><b>Episodes in Season</b><br />{seasonItem[1]}</p><hr />
                </Popover.Content>
            </Popover>
        )
    }

    seasonsPopover(){
        return (
            <Popover id="popover-basic" style={scrollable}>
                <Popover.Content>
                    <ul className="list-group flush">
                        {this.state.seasons.map( seasonItem => (
                            <li className="list-group-item">
                                <OverlayTrigger trigger="click" rootClose placement="auto" overlay={this.seasonItemPopover(seasonItem)}>
                                    <Button variant="link">{seasonItem[2]}</Button>
                                </OverlayTrigger>
                            </li>
                        ))}
                    </ul>
                </Popover.Content>
            </Popover>
        )
    }


    popover(){
        return (
            <Popover id="popover-basic" style={scrollable}>
                <Popover.Title as="h3">{this.state.detailsData.name}</Popover.Title>
                <Popover.Content>
                    <p><b>Genres</b><br />{this.state.genres.join()}</p><hr />
                    <p><b>Production Companies</b><br />{this.state.productionCompanies.join()}</p><hr />
                    <p><b>Providers [Buyers]</b><br />{this.state.providers.join()}</p><hr />
                    
                    <Container>
                        <Row>
                            <OverlayTrigger trigger="click" rootClose placement="auto" overlay={this.seasonsPopover()}>
                                <Button variant="link">Season Details</Button>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger trigger="click" rootClose placement="auto" overlay={this.castPopover()}>
                                <Button variant="link">Cast Details</Button>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger trigger="click" rootClose placement="auto" overlay={this.crewPopover()}>
                                <Button variant="link">Crew Details</Button>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger trigger="click" rootClose placement="auto" overlay={this.reviewsPopover()}>
                                <Button variant="link">Reviews</Button>
                            </OverlayTrigger>
                        </Row>
                        <Row>
                            <OverlayTrigger trigger="click" rootClose placement="auto" overlay={this.videosPopover()}>
                                <Button variant="link">Related Videos</Button>
                            </OverlayTrigger>
                        </Row>
                    </Container>
                </Popover.Content>
            </Popover>
        ); 
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

                        <OverlayTrigger trigger="click" placement="auto" overlay = {this.popover()}>
                            <Button variant="info">More Details</Button>
                        </OverlayTrigger>

                    </Card.Body>
                
                </Card>
            </div>
        )
    }
}

export default TVShowCard