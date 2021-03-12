import React, { Component } from 'react';
import axios from 'axios';
// const ipAddress = '';

const Person = props => (
    <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.person.firstName}</li>
        <li className="list-group-item">{props.person.lastName}</li>
        <li className="list-group-item">{props.person.email}</li>
    </ul>
)

export default class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {aboutusall: []};
    }

    

    componentDidMount() {
        axios.get(`http://localhost:5000/aboutus/`, {crossDomain: true})
          .then(res => {
            this.setState({ aboutusall: res.data })
          })
          .catch((err) => {
            console.log(err);
          })
      }

    aboutusList() {
        return this.state.aboutusall.map(currentPerson => {
            return (
                <div className="container">
                    <li  className="list-group-item col-4"><Person person={currentPerson} key={currentPerson._id}/></li>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container">
                <ul className="list-group">
                    {this.aboutusList() }
                </ul>
            </div>
        )
    }
}