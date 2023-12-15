import Card from "./Card";
import FollowingFeed from "./FollowingFeed";
import UserPage from "./UserPage";
import Login from "./Login";
import { useState, useEffect } from "react";
import axios from "axios";
import Register from './Registration'
import NavBar from "./NavBar";


const MainFeed = ({ token, loggedIn }) => {
  const [cardInfo, setCardInfo] = useState([]);
  // const [token, setToken] = useState(null)
  const [username, setUsername] = useState("");

  

  console.log(`this is main feed ${token}`);

  useEffect(() => {
    axios
      .get("https://social-cards.fly.dev/api/cards/", {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((res) => {
        setCardInfo(res.data.results);
      });
  }, [token]);
  console.log("This is main feed");
  console.log(typeof cardInfo);

  // if (loggedIn === false) {
  //   return (
  //     <>
  //       <div className='logInBar'>
  //         <a>Log In</a>
  //         <a>Register</a>
  //       </div>
  //     </>
  //   )
  // }

  return (
    <>
      {!loggedIn ?  
        <div className='logInBar'>
          <a href="/login">Log In</a>
          <a>Register</a>
        </div>:
      <NavBar />}
      <Register />
      <h1>Cards</h1>
      {token && (
        <div>
          {/* // <p>{cardInfo}</p> */}
          {cardInfo.map((card) => {
            return (
              <Card
                key={card.id}
                front_text={card.front_text}
                background_color={card.background_color}
              />
            );
          })}
        </div>
      )}
      {/* <p>This is MainFeed</p>
            <div className="cardFrame">
                <div className="card">
                    <Card />
                Card and Frame Placeholder</div>
            </div>
            <FollowingFeed

            />
            <UserPage

            /> */}
      <UserPage />
    </>
  );
};

export default MainFeed;
