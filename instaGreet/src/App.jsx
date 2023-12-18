import { useState, useEffect } from "react";
import "./App.css";
import MainFeed from "./components/MainFeed";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import { Navigate, Route, Routes } from 'react-router-dom'
import Register from "./components/Registration";
import CreateCard from "./components/CreateCard";
import UserPage from "./components/UserPage";
import useLocalStorageState from 'use-local-storage-state'
import Logout from "./components/Logout";


function App() {
  const [token, setToken] = useLocalStorageState(null);
  const [username, setUsername] = useLocalStorageState("");
  const [cardInfo, setCardInfo] = useState([]);
  

  const setAuth = (username, token) => {
    setUsername(username);
    setToken(token);
    console.log(token);
  };

  return (
    <>
      <Routes>
        <Route 
          path="/"
          element={<MainFeed token={token} />}
        />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-card" element={!token ? <Navigate to="/login" /> : <CreateCard token={token} />} />
        <Route path="/user-page" element={!token ? <Navigate  to="/login" /> : <UserPage token={token} /> } />
        <Route path="/logout" element={!token ? <Navigate to="/" /> : <Logout token={token} setAuth={setAuth} username={username} />} />
      </Routes>
    </>
  );
}

export default App;
