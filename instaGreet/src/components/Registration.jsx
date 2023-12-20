import { useState } from 'react'
import axios from 'axios'
import validator from 'validator'
import NavBar from './NavBar'
import{ useNavigate, useOutletContext } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

//TODO:
// Add post request, and validation to ensure username isn't taken and email not already in use

const Register = () => {
    const [newUserName, setNewUserName] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confNewPassword, setConfNewPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    //Perform Post request to databate to add new user and username and password after validations
    const submitToDB = () => {
        if (newUserName === '') {
            alert("Please input a username!")
        } else if (newPassword === '') {
            alert("Please input a password!")
        } else if (confNewPassword === '') {
            alert("Please confirm your password!")
        } else if (newPassword != confNewPassword) {
            alert("Your Passwords Do Not Match!!!")
        } else if (!validator.isEmail(email)) {
            alert("Please enter a valid email!")
        } else(
        axios.post('https://social-cards.fly.dev/api/auth/users/',
        {
            "username": newUserName,
            "password": newPassword,
            "email": email
        }).then((res) => {
        navigate('/login')}
        ).catch((err) => {
            console.log("The error ", {err})
            setError(err.response.data.username[0]
                )}))
    }


    //Updates the state to reflect the new letter typed by the user
    const updateUserName = (event) => {
        const newLetter = event.target.value
        setNewUserName(newLetter)
    }

    //Updates state to type password
    const updatePassword = (event) => {
        const newLetter = event.target.value
        setNewPassword(newLetter)
    }

    //Updates state to type password confirmation
    const updatePasswordConf = (event) => {
        const newLetter = event.target.value 
        setConfNewPassword(newLetter)
    }

    //Update state to hold email when typed
    const updateEmail = (event) => {
        const newChar = event.target.value 
        setEmail(newChar)
    }

    return (
        <Form>
            <h1 className="instagreetTitle">New User Registration</h1>
            {error && <p style={{ color: 'red' }}> {error} </p>}
            <Container>
            <Col xs={5}>
            <Row>
            <Form.Label for='email'>Enter your email address:{" "}
            <br />
            <br />
                <Form.Control type="email" name="email" onChange={updateEmail} maxLength={254}></Form.Control>
            </Form.Label>
            </Row>
            <br />
            <br />
            <p>Please type a username and password: </p>
            <Row>
            <Form.Label for='userName'>    
                Username:
                <Form.Control type='text' name='userName' onChange={updateUserName} maxLength={150} required></Form.Control>
            </Form.Label>
            </Row>
            <Row>
            <Form.Label for='password'>    
                Password:
                <Form.Control type='password' name='password' onChange={updatePassword}></Form.Control>
            </Form.Label>
            </Row>
            <Row>
            <Form.Label for='confPass'>    
                Confirm Password:
                <Form.Control type='password' name='confPassword' onChange={updatePasswordConf}></Form.Control>
            </Form.Label>
            </Row>
            </Col>
            <br />
            <br />
            <Button onClick={submitToDB}>Submit</Button>
            <br />
            <br />
            <p>Already have an account?  Log in here: <a href="/login">Login</a></p>
            <a href="/">Home</a>
            </Container>
        </Form>
    )

}

export default Register