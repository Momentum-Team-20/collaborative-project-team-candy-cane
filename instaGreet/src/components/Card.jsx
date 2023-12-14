import { useState, useEffect } from "react";
import axios from "axios";

const Card = ({ key, front_text, background_color }) => {
  // useEffect((e) => {
  //     e.preventDefault()
  //     axios.get("https://social-cards.fly.dev/api/cards").then((res) => {
  //         setCardInfo(res.data)
  //         console.log(res.data)
  //     } )
  // })

  console.log("this is key", key);
  console.log("this is front_text", front_text);
  console.log("this is background_color", background_color);

  return (
    <>
      <div className={`${background_color} outerCardDiv`} >
        <p className="frontCardText">{front_text}</p>
      </div>
    </>
  );
};

export default Card;
