import React, { Component } from 'react';
import axios from 'axios';

const ip = require('ip');
const ipAddress = ip.address();
console.log(ip.address());

const Person = props => (
    <ul className="list-group list-group-flush">
        <li className="list-group-item">{props.person.firstname}</li>
        <li className="list-group-item">{props.person.lastname}</li>
        <li className="list-group-item">{props.person.email}</li>
    </ul>
)

export default class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {aboutusall: []};
    }

    

    componentDidMount() {
        axios.get(`http://${ipAddress}:5000/aboutus/`, {crossDomain: true})
          .then(res => {
            console.log(res.data)
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