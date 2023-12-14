import { useState } from 'react'
import axios from 'axios'

const Register = () => {
    const [newUserName, setNewUserName] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confNewPassword, setConfNewPassword] = useState('')

    //Perform Post request to databate to add new user and username and password
    const submitToDB = () => {
        if (newUserName || newPassword || confNewPassword === '') {
            alert("Please input a username and password!")
        }
        if (newPassword != confNewPassword) {
            alert("Your Passwords Do Not Match!!!")
        }
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

    return (
        <>
            <h1>New User Registration</h1>
            <p>Please type a username and password: </p>
            <label for='userName'>    
                <p>Username:</p>
                <input type='text' name='userName' onChange={updateUserName}></input>
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