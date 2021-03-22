import React from 'react';
import { useAuth } from "../contexts/AuthProvider";
import { Alert, Button, Card, Form, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Account = () => {
    const {user} = useAuth();

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
            <Card style={{minWidth: 600}}>
                <Card.Body>
                    <h1 style={{textAlign: 'center'}}>Account Information</h1>

                    <div style={{textAlign: 'center'}}>
                        <strong>Email: </strong>
                        <span>{user.email}</span>
                    </div>
                    <Link to='/update-account'>
                        <div className="text-center mt-4">
                            <Button
                                className='w-50 center'
                                as="input"
                                type="submit"
                                value="Update Account Information">
                            </Button>
                        </div>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Account;
