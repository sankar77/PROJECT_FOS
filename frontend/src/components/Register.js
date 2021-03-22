import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthProvider";

const Register = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signUp, user} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    async function signUpHandler(event) {
        event.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match.');
        }

        try {
            setError('');
            setLoading(true);
            await signUp(
                emailRef.current.value,
                passwordRef.current.value
            );
        } catch {
            setError('Failed to create an account.');
        }

        setLoading(false);
    }

    return (
        <Card>
            <Card.Body>
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
                        <Form.Text className='text-muted'>
                            We'll never share your email with anyone else.
                        </Form.Text>
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

                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type='password'
                            placeholder='Password'
                            ref={passwordConfirmRef}
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
    );
}

export default Register;