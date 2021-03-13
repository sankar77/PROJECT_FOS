import React, { Component } from 'react';
// import axios from 'axios';
import { db } from '../firebase';

// const url = 'https://3.141.235.188:5000';

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
        db.collection('aboutus')
        .get()
        .then(data => {
            const aboutUsAllArray = []
            data.forEach(doc => {                
                aboutUsAllArray.push(doc.data());
            });
            this.setState( {aboutusall: aboutUsAllArray} );
        })
        .catch( error => console.log(error) )
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