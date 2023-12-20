import { useState } from 'react'
import axios from 'axios'
import { useNavigate, useOutletContext } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container';


const Login = ({ setAuth }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('submitting form')
        console.log(username)
        console.log(password)
        axios
          .post('https://social-cards.fly.dev/api/auth/token/login', {
            username: username,
            password: password,
          })
          .then((res) => {
            setAuth(username, res.data.auth_token)
            navigate('/')
          })
          .catch((err) => setError(err.response.data.non_field_errors[0]))
      }
    
    
    return(
      <>
      <h1 className="instagreetTitle">Login</h1>
      {error && <p style={{ color: 'red' }}> {error} </p>}
      <Container>
      <Form onSubmit={handleSubmit}>
      <Col xs={5}>
        <div className="form-controls">
          <Form.Label htmlFor="username-field">username</Form.Label>
          <Form.Control
            id="username-field"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-controls">
          <Form.Label htmlFor="password-field">password</Form.Label>
          <Form.Control
            id="password-field"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        </Col>
        <br></br>
        <div className="form-submit">
          <Button type="submit" value="Log In">Log in</Button>
        </div>
      </Form>
      <br></br>
      
      <p>New User?  Create an account here: <a href="/register">Registration</a></p>
      <a href="/">Home</a>
      </Container>
    </>
    )
}

export default Login