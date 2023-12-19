import { useState, useEffect } from "react";
import axios from "axios";

const Card = ({ key, front_text, background_color, creator, token, creatorID }) => { 

  // useEffect((e) => {
  //     e.preventDefault()
  //     axios.get("https://social-cards.fly.dev/api/cards").then((res) => {
  //         setCardInfo(res.data)
  //         console.log(res.data)
  //     } )
  // })

  // console.log("this is key", key);
  // console.log("this is front_text", front_text);
  // console.log("this is background_color", background_color);


  const handleFollowUserClick = () => {
    axios
      .post(
        "https://social-cards.fly.dev/api/follows/",
        {
          status: 1,
          followed_user: creatorID,
        },

        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      )
      .then((results) => {
        console.log("this is follower results", results);
      }, []);
  };

  return (
    <>
      <div className="cardFrame">
        <div
          style={{ backgroundColor: `${background_color}` }}
          className={`${background_color} outerCardDiv`}
        >
          <p className="frontCardText">{front_text}</p>
        </div>
        <button onClick={handleFollowUserClick}>Follow {creator}</button>
        {/* add a link to following */}
      </div>
    </>
  );
};

export default Card;
