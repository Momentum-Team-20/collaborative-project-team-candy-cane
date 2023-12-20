import { useState, useEffect } from "react";
import axios from "axios";
import ReactCard from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Card = ({ key, front_text, background_color, creator, token, creatorID, font, font_size, text_align, show_follow_button }) => { 


  console.log("this is key", key);
  console.log("this is front_text", front_text);
  console.log("this is background_color", background_color);
  console.log('the font is:', font)

  //we need to know who a logged in user follows in order to display a follow or unfollow button -- that might be our status

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
          <ReactCard
            style={{ height: '300px', backgroundColor: `${background_color}` }}
            className={`${background_color} outerCardDiv`}
          >
            <ReactCard.Text className={`${font} ${font_size} ${text_align} frontCardText`}>{front_text}</ReactCard.Text>
          </ReactCard>
          <Row>
            <Col>
          <p className="creatorName">{creator}</p>
          </Col>
          <Col className="followButton">
          <Button onClick={handleFollowUserClick}>Follow</Button>
          </Col>
          </Row>
      </div>
    </>
  );
};
export default Card;
