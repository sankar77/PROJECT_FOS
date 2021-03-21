import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthProvider";
import { Link, useHistory } from "react-router-dom";

const ForgotPassword = () => {

    const emailRef = useRef();
    const {resetPassword} = useAuth();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();


    async function resetPasswordHandler(event) {
        event.preventDefault();

        try {
            setSuccess('');
            setError('');
            setLoading(true);
            await resetPassword(
                emailRef.current.value
            );
            setSuccess('Check your email to reset password');
        } catch {
            setError('Failed to reset password.');
        }

        setLoading(false);
    }

    return (
        <>
            <div style={{display: 'flex', justifyContent:'center', alignContent:'center'}}>
                <Card style={{minWidth: 600}}>
                    <Card.Body>
                        <h1 style={{textAlign: 'center'}}>Reset Password</h1>
                        {error && <Alert variant='danger'>{error}</Alert>}
                        {success && <Alert variant='success'>{success}</Alert>}
                        <Form onSubmit={resetPasswordHandler}>
                            <Form.Group id='email'>
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                    type='email'
                                    placeholder='Enter email'
                                    ref={emailRef}
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
                        <div className='w-100 text-center mt-4'>
                            <Link to='/login'>Login</Link>
                        </div>
                    </Card.Body>
                </Card>
            </div>
            <div className='w-100 text-center mt-2'>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </div>
        </>
    );
}

export default ForgotPassword;