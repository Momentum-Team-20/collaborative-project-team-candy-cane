import { useState } from 'react'
import axios from 'axios'
import validator from 'validator'
import{ useNavigate, useOutletContext } from 'react-router-dom'

//TODO:
// Add post request, and validation to ensure username isn't taken and email not already in use

const Register = () => {
    const [newUserName, setNewUserName] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confNewPassword, setConfNewPassword] = useState('')
    const [email, setEmail] = useState('')
    // const navigate = useNavigate()

    //Perform Post request to databate to add new user and username and password
    const submitToDB = (event) => {
        event.preventDefault()
        if (newUserName === '') {
            alert("Please input a username!")
        }
        if (newPassword === '') {
            alert("Please input a password!")
        }
        if (confNewPassword === '') {
            alert("Please confirm your password!")
        }
        if (newPassword != confNewPassword) {
            alert("Your Passwords Do Not Match!!!")
        }
        if (!validator.isEmail(email)) {
            alert("Please enter a valid email!")
        }
        axios.post('https://social-cards.fly.dev/api/auth/users/',
        {
            "username": newUserName,
            "password": newPassword,
            "email": email
        })
        // Commented out navigate until POST method is implemented to avoid unwanted re-routing
        // navigate('/')
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
        <>
            <h1>New User Registration</h1>
            <p>Enter your email address:</p>
            <label for='email'>
                <p>Email:</p>
                <input type="email" name="email" onChange={updateEmail} maxLength={254}></input>
            </label>
            <p>Please type a username and password: </p>
            <label for='userName'>    
                <p>Username:</p>
                <input type='text' name='userName' onChange={updateUserName} maxLength={150} required></input>
            </label>
            <label for='password'>    
                <p>Password:</p>
                <input type='password' name='password' onChange={updatePassword}></input>
            </label>
            <label for='confPass'>    
                <p>Confirm Password:</p>
                <input type='password' name='confPassword' onChange={updatePasswordConf}></input>
            </label>
            <br></br>
            <button onClick={submitToDB}>Submit</button>
        </>
    )

}

export default Register