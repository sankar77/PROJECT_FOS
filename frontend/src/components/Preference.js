import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Multiselect } from 'multiselect-react-dropdown';
// npm install multiselect-react-dropdown
import React, { Component, useRef, useState, useEffect } from "react";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthProvider";

export default function Preference(){

    const genres = {
        options: [{name: 'Action'},{name: 'Adventure'}, {name: 'Animation'}, {name: 'Comedy'}, 
        {name: 'Documentary'}, {name: 'Drama'}, {name: 'Family'}, {name: 'Fantasy'}, {name: 'Horror'}, 
        {name: 'Mystery'}, {name: 'Romance'}, {name: 'Science Fiction'}, {name: 'Thriller'}, {name: 'Western'}]
    };

    const actorRef = useRef();
    const directorRef = useRef();
    const movieRef = useRef();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    let actorSelections = [];
    let directorSelections = [];
    let movieSelections = [];
    let genreSelection = {};

    const {user} = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();

        actorSelections = actorRef.current.value.split(",");
        actorSelections = actorSelections.map(s => s.trim());

        directorSelections = directorRef.current.value.split(",");
        directorSelections = directorSelections.map(s => s.trim());

        movieSelections = movieRef.current.value.split(",");
        movieSelections = movieSelections.map(s => s.trim());

        const genreSelections = genreSelection.map(genre => genre['name']);

        db.collection('preferences').doc(user.uid).set({
            actorSelections,
            directorSelections,
            genreSelections,
            movieSelections,
        });
    };

    const handleSkip = () => {
        actorSelections = [];
        movieSelections = [];
        directorSelections = [];
        genreSelection = {};
    };

    const genreList = (selectedList, selectedItem) => {
        genreSelection = selectedList;
    };  

    return (
        <Card>
            <h3 className="ml-4 mt-4">Set your account preferences</h3>
            <Card.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group id = "actors">
                        <Form.Label>Write some of your favorite actors (separate using commas or leave blank)</Form.Label>
                        <Form.Control as="textarea" rows={3} ref={actorRef}/>
                    </Form.Group>
                    <Form.Group id = "directors">
                        <Form.Label>Write some of your favorite directors (separate using commas or leave blank)</Form.Label>
                        <Form.Control as="textarea" rows={3} ref={directorRef}/>
                    </Form.Group>
                    <Form.Group id = "genres">
                        <Form.Label>Select your favorite genres</Form.Label>
                        <Multiselect
                            options={genres.options} // Options to display in the dropdown
                            displayValue="name" // Property name to display in the dropdown options
                            onSelect={genreList}
                        />
                    </Form.Group>
                    <Form.Group id = "movies">
                        <Form.Label>Write some of your favorite movies (separate using commas or leave blank)</Form.Label>
                        <Form.Control as="textarea" rows={3} ref={movieRef}/>
                    </Form.Group>
                </Form>
                <Button onClick={handleSubmit}>Save</Button>{' '}
                <Button onClick={handleSkip} variant="link">Skip</Button>{' '}
            </Card.Body>
        </Card>
    );
}