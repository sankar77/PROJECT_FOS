import firebase from '../firebase'
import { Form, Button } from 'react-bootstrap'
import { useState } from "react";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hasAccount, setAccount] = useState(false);
    const [user, setUser] = useState(null);

    const onChangeHandler = (event) => {
        const {name, value} = event.currentTarget;
        if (name === 'Email') {
            console.log({email});
            setEmail(email);
        }
        else if (name === 'Password') {
            setPassword(password);
        }

    }

    const registerHandler = () => {
        firebase.auth().createUserWithEmailAndPassword(email, password);
    };

    return (
        <Form className='container'>
            <Form.Group controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type='email'
                    placeholder='Enter email'
                    name='Email'
                    value={email}
                    onChange={event => onChangeHandler(event)}
                    required
                />
                <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    name='Password'
                    placeholder='Password'
                    value={password}
                    onChange={event => onChangeHandler(event)}
                />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='password' placeholder='Password'/>
            </Form.Group>

            <Button
                as="input"
                type="submit"
                value="Submit"
                onChange={() => registerHandler()}
            />
        </Form>
    );
}

export default Register;