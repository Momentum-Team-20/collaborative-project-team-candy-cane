import { useNavigate, useOutletContext } from 'react-router-dom'
import axios from 'axios'

const Logout = ({ token, setAuth, username }) => {
    const navigate = useNavigate()

    console.log({token})

const handleClick = () => {
    axios.post('https://social-cards.fly.dev/api/auth/token/logout/', {
       authorization: `Token ${token}`,
    })
    .then(() => {
        setAuth("", null)
        console.log(`After logout ${token}`)
        navigate('/')
    }, [token])

}

    return (
        <>
            <h1>Are you ready to log out?</h1>
            <button type="submit" onClick={handleClick}>Logout</button>
            <br></br>
            <br></br>
            <a href="/">Cancel</a>
        </>
    )
} 

export default Logout