import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainFeed from './components/MainFeed'
import NavBar from './components/NavBar'
import Login from './components/Login'

function App() {
  const [token, setToken] = useState(null)
  const [username, setUsername] = useState('')

  const setAuth = (username, token) => {
    setUsername(username)
    setToken(token)
  }

  return (
    <>
      <NavBar

      />
      <MainFeed

      />
      <Login 
        setAuth={setAuth}/>
    </>
  )
}

export default App
