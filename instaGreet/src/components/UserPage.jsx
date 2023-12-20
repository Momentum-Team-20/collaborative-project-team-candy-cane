import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";

//we need to pass username and token in through props

const UserPage = (props) => {
  const [userCards, setUserCards] = useState([]);
  const [showFollowers, setShowFollowers] = useState([]);

  useEffect(() => {
// do a thing

    axios
      .get(
        "https://social-cards.fly.dev/api/cards/me/",

        {
          headers: {
            Authorization: `Token ${props.token}`,
          },
        }
      )
      .then((results) => {
        console.log("this is results", results);
        setUserCards(results.data);
      });


      axios
      .get(
        "https://social-cards.fly.dev/api/users/followed",

        {
          headers: {
            Authorization: `Token ${props.token}`,
          },
        }
      )
      .then((results) => {
        console.log("this is followers results", results);
        setShowFollowers(results.data.results)
      });
  }, [props.token]);

  const [expanded, setExpanded] = useState(false);
  const handleFollowerListExpandedClick = () => {
    setExpanded(!expanded);
  };


  return (
    <>
      <NavBar />
      <div className="userPageContainer">
        <h1 className="userPageTitle">
          {props.username}&#39;s InstaGreet Page
        </h1>
        {/* link to followers list below */}
        <div className="userPageFollowingText">
          <h2>Who is {props.username} following?{" "}</h2>
        <button onClick={handleFollowerListExpandedClick} className="followingButton" >
          {expanded ? "Hide Following" : "Show Following"}
        </button>
        {expanded && (
          <div className="userPageFollowingText">{showFollowers.map((follower) => (
            <div key={follower.id}>{follower.username}</div>
            ))}</div>
            )}
            </div>
            <br></br>
        <div className="userPageCardContainer">
          {/* the button below needs to be routed to CreateCard */}
          <div className="userCards">
            <div className="cardFrame">
              <div className="userPagecreateCardLink">
                <a href="/create-card">Create A New Card</a>
              </div>
            </div>
            {/* hide the button */}
            {userCards.map((card) => {
              return (
                <Card
                    key={card.id}
                    front_text={card.front_text}
                    background_color={card.background_color}
                    font={card.font}
                    font_size={card.font_size}
                    text_align={card.text_align}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
