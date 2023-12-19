import { useState, useEffect } from "react";
import axios from "axios";
import Card as ReactCard from 'react-bootstrap/Card';

const Card = ({ key, front_text, background_color, creator, token, creatorID, font, font_size, text_align }) => { 


  console.log("this is key", key);
  console.log("this is front_text", front_text);
  console.log("this is background_color", background_color);
  console.log('the font is:', font)


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
      <Card className="cardFrame">
          <ReactCard
            style={{ backgroundColor: `${background_color}` }}
            className={`${background_color} outerCardDiv`}
          >
            <p className={`${font} ${font_size} ${text_align} frontCardText`}>{front_text}</p>
          </ReactCard>
          <button onClick={handleFollowUserClick}>Follow {creator}</button>
      </Card>
    </>
  );
};

export default Card;
