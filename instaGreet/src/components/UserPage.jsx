import CreateCard from "./CreateCard";
import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";

//we need to pass username and token in through props

const UserPage = (props) => {
  const [userCards, setUserCards] = useState([]);
  useEffect(() => {
    axios
      .get("https://social-cards.fly.dev/api/cards/me/", {
        headers: {
          Authorization: `Token ${props.token}`,
        },
      })
      .then((results) => {
        console.log("this is results", results);
        setUserCards(results.data);
      });
  }, [props.token]);

  return (
    <div className="userPageContainer">
      <h1 className="userPageTitle">{props.username}'s InstaGreet Page</h1>
      {/* link to followers below */}
      <h2 className="userPageFollowingText">
        Who is {props.username} following?
      </h2>
      {/* <CreateCard /> */}
      <div className="userPageCardContainer">
        {/* the button below needs to be routed to CreateCard */}
        <div className="userCards">
        <button className="userPagecreateCardButton">
          + CREATE A CARD
        </button>
          {userCards.map((card) => {
            return (
              <Card
                key={card.id}
                front_text={card.front_text}
                background_color={card.background_color}
              />
            );
          })}
          </div>
      </div>
    </div>
  );
};

export default UserPage;
