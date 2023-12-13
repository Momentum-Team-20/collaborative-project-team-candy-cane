import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import MainFeed from './components/MainFeed'
import NavBar from './components/NavBar'
import Login from './components/Login'

function App() {
  const [token, setToken] = useState(null)
  const [username, setUsername] = useState('')
  const [cardInfo, setCardInfo] = useState([])

  const setAuth = (username, token) => {
    setUsername(username)
    setToken(token)
    console.log(token)
  }

  // useEffect(() => {
  //   axios
  //     .get('https://social-cards.fly.dev/api/cards/', {
  //       headers: {
  //         Authorization: `Token ${token}`,
  //       },
  //     })
  //     .then((res) => {
  //       setCardInfo(res.data)
  //     })
  // }, [token])

  return (
    <>
      <NavBar

      />
      <Login 
        setAuth={setAuth}
      />
      <MainFeed
      token={token}
      />
      {/* <h1>Cards</h1>
      {token ? (
        <ul>
          {cardInfo.map((card) => {
            return <li key={card.id}>{card.front_text}, {card.background_color}</li>
          })}
        </ul>
      ) : (
      <Login 
        setAuth={setAuth}/>
        )} */}
        </>
  )
}

export default App
