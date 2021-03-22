import React, { useRef, useState } from 'react';
import { Alert, Button, Card, Form, Overlay } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";

const UpdateAccount = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {user, updatePassword, updateEmail} = useAuth();
    const history = useHistory();

    async function updateAccountHandler(event) {
        event.preventDefault();
        setError('');
        setSuccess('');

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match.');
        }

        setLoading(true);
        const promise = [];
        if (emailRef.current.value !== user.email) {
            promise.push(updateEmail(emailRef.current.value));
        }

        if (passwordRef.current.value && passwordConfirmRef.current.value) {
            promise.push(updatePassword(passwordRef.current.value));
        }

        Promise.all(promise).then(() => {
           // history.push('/')
            setSuccess('Account successfully updated.');
        }).catch(() => {
            setError('Failed to update account information.');
        }).finally(() => {
            setLoading(false);
        });
    }

    return (
        <>
            <div style={{display: 'flex', justifyContent:'center', alignContent:'center'}}>
                <Card style={{minWidth: 600}}>
                    <Card.Body>
                        <h1 style={{textAlign: 'center'}}>Update Account</h1>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        {success && <Alert variant='success'>{success}</Alert>}
                        <Form onSubmit={updateAccountHandler}>
                            <Form.Group id='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email'
                                    ref={emailRef}
                                    required
                                    defaultValue={user.email}
                                />
                            </Form.Group>

                            <Form.Group id='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    ref={passwordRef}
                                    placeholder='Leave empty to not change'
                                />
                            </Form.Group>

                            <Form.Group controlId='formBasicPassword'>
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Leave empty to not change'
                                    ref={passwordConfirmRef}
                                />
                            </Form.Group>

                            <Button
                                disabled={loading}
                                className='w-100'
                                as="input"
                                type="submit"
                                value="Update Account"
                            />
                        </Form>
                    </Card.Body>
                </Card>
            </div>
            <div className='w-100 text-center mt-2'>
                <Link to='/account'>Go Back</Link>
            </div>
        </>
    );
};

export default UpdateAccount;
