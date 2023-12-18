import { useState, useEffect } from "react";
import axios from "axios";

const Card = ({ key, front_text, background_color, creator, font }) => {
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
  console.log("the font is:", font)

  return (
    <>
      <div className="cardFrame">
      <div style={{ backgroundColor: `${background_color}` }} className={`${background_color} outerCardDiv`} >
        <p className={`${font} frontCardText`}>{front_text}</p>
      </div>
      <p>{creator}</p>
      </div>
    </>
  );
};


// style={{ font: `${font}`}}
export default Card;
