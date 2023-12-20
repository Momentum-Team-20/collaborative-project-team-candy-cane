import Card from "./Card";
import FollowingFeed from "./FollowingFeed";
import UserPage from "./UserPage";
import Login from "./Login";
import { useState, useEffect } from "react";
import axios from "axios";
import Register from "./Registration";
import NavBar from "./NavBar";
import CreateCard from "./CreateCard";
import { useNavigate } from "react-router-dom";

const MainFeed = ({ token, setCardID }) => {
  const [cardInfo, setCardInfo] = useState([]);
  // const [token, setToken] = useState(null)
  const [username, setUsername] = useState("");
  const [following, setFollowing] = useState([]);
  const navigate = useNavigate();

  console.log(`this is main feed ${token}`);

  useEffect(() => {
    axios.get("https://social-cards.fly.dev/api/cards/").then((res) => {
      setCardInfo(res.data.results);
    });
    axios
      .get(
        "https://social-cards.fly.dev/api/users/followed",

        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((results) => {
        console.log("this is followers results", results);
        setFollowing(results.data.results);
      });
  }, [token]);
  console.log("This is main feed");
  console.log(typeof cardInfo);

  const goToDetails = (event, card) => {
    const key = card.id;
    setCardID(key);
    console.log(`Card Id in key ${key}`);
    navigate(`/card-details/${key}`);
  };

  return (
    <>
      {!token ? (
        <div className="logInBar">
          <a href="/login">Log In</a>
          <a href="/register">Register</a>
        </div>
      ) : (
        <NavBar />
      )}
      <h1>Cards</h1>
      <div>
        {/* // <p>{cardInfo}</p> */}
        {cardInfo.map((card) => {
          const foundUser = following.find(
            (user) => user.id === card.creator_id
          );
          console.log(foundUser);
          let show_follow_button;
          if (foundUser === undefined) {
            show_follow_button = true;
          } else {
            show_follow_button = false;
          }
          return (
            <>
              <div onClick={(e) => goToDetails(e, card)} value={card.id}>
                <Card
                  key={card.id}
                  front_text={card.front_text}
                  background_color={card.background_color}
                  creator={card.creator}
                  creatorID={card.creator_id}
                  token={token}
                  font={card.font}
                  font_size={card.font_size}
                  text_align={card.text_align}
                  show_follow_button={show_follow_button}
                />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default MainFeed;
