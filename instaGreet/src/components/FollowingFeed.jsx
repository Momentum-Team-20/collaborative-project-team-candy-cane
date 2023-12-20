import React from "react"
import { useState } from "react"
import axios from "axios"
import Card from "./Card"
import NavBar from "./NavBar"

const FollowingFeed = ({ token }) => {
const [followingIDs, setFollowingIDs] = useState([])
const [getCards, setGetCards] = useState([])

axios.get("https://social-cards.fly.dev/api/users/followed",
  {
    headers: {
      Authorization: `Token ${token}`,
    }
  }
).then((results) => {
  console.log("this is followers results in following feed", results.data.results);
  setFollowingIDs(results.data.results);
}, [token]);

axios.get("https://social-cards.fly.dev/api/cards",
      ).then((results) => {
        console.log("this is cards results in Following feed", results.data.results);
        setGetCards(results.data.results);
      }, [token]);


console.log("This is following feed")
    return (
        <>
        <NavBar />
            <p>Card's of people you are following:</p>
            {followingIDs.map((following) => {
                return (
                    <>
                    {getCards.map((card) => {
                        if (following.username === card.creator)
                            return(
                            <>
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
                                />
                                <p>Created by: {card.creator}</p>
                            </>
                            )
                        }) }
                    </>
                )
            })}
        </>
)}

export default FollowingFeed