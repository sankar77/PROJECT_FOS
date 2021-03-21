import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { Link, useHistory } from "react-router-dom";

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const {logIn, user} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    async function signUpHandler(event) {
        event.preventDefault();

        try {
            setError('');
            setLoading(true);
            await logIn(
                emailRef.current.value,
                passwordRef.current.value
            );
            history.push('/');
        } catch {
            setError('Failed to sign in.');
        }

        setLoading(false);
    }

    return (
        <>
            <div style={{display: 'flex', justifyContent:'center', alignContent:'center'}}>
                <Card style={{minWidth: 600}}>
                    <Card.Body>
                        <h1 style={{textAlign: 'center'}}>Log In</h1>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        <Form onSubmit={signUpHandler}>
                            <Form.Group id='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email'
                                    ref={emailRef}
                                    required
                                />
                            </Form.Group>

                            <Form.Group id='password'>
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type='password'
                                    placeholder='Password'
                                    ref={passwordRef}
                                    required
                                />
                            </Form.Group>

                            <Button
                                disabled={loading}
                                className='w-100'
                                as="input"
                                type="submit"
                                value="Submit"
                            />
                        </Form>
                    </Card.Body>
                </Card>
            </div>
            <div className='w-100 text-center mt-2'>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </div>
        </>
    );
}

export default Login;