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
            <p>This is FollowingFeed</p>
            <div className="cardFrame">
                <div className="card">
                    <Card />
                Card and Frame Placeholder</div>
                </div>
        </>
)}

export default FollowingFeed