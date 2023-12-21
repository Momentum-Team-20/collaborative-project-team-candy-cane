import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

//we need to pass username and token in through props

const UserPage = (props) => {
  const [userCards, setUserCards] = useState([]);
  const [showFollowers, setShowFollowers] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate()

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
        setShowFollowers(results.data.results);
      });
  }, [props.token]);

  const handleFollowerListExpandedClick = () => {
    setExpanded(!expanded);
  };

  const handleUnfollowUserClick = (followerID) => {
    axios
      .delete(
        `https://social-cards.fly.dev/api/unfollow/${followerID}`,
        {
          headers: {
            Authorization: `Token ${props.token}`,
          },
        }
      )
      .then((results) => {
        console.log("this is deleted, maybe?", results);
      }, [])
      .catch((error) => {
        console.log(error);
      });
  };

  const goToDetails = (event, card) => {
    const key = card.id;
    props.setCardID(key);
    console.log(`Card Id in key ${key}`);
    navigate(`/card-details/${key}`);
  };

  return (
    <>
      <NavBar />
      <div className="userPageContainer">
        <h1 className="instagreetTitle">
          {props.username}&#39;s InstaGreet Page
        </h1>
        {/* link to followers list below */}
        <div className="userPageFollowingText">
          <h2>Who is {props.username} following? </h2>
          <Button
            onClick={handleFollowerListExpandedClick}
            className="followingButton"
          >
            {expanded ? "Hide Following" : "Show Following"}
          </Button>
          {expanded && (
            <div className="userPageFollowingText">
              {showFollowers.map((follower) => (
                <div key={follower.id}>
                  {follower.username}
                  <Button className="my-2 ms-2" onClick={() => handleUnfollowUserClick(follower.id)}>Unfollow?</Button>
                </div>
              ))}
            </div>
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
                <div onClick={(e) => goToDetails(e, card)} value={card.id}>
                <Card
                    key={card.id}
                    front_text={card.front_text}
                    background_color={card.background_color}
                    font={card.font}
                    font_size={card.font_size}
                    text_align={card.text_align}
                    show_follow_button={false}
                />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
