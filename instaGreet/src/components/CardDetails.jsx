import axios from "axios"
import Card from "./Card"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import NavBar from "./NavBar"

const CardDetails = ({ token }) => {
    const [card, setCard] = useState([])
    const { id } = useParams()

    useEffect(() => {
        axios
          .get(`https://social-cards.fly.dev/api/cards/${id}`)
          .then((res) => {
              setCard(res.data)
              console.log("Inside then", res.data)
            })
      }, [id])

    return (
        <>
        <NavBar />
            <Card 
            key={card.id}
            front_text={card.front_text}
            background_color={card.background_color}
            creator={card.creator}
            />
        </>
    )
}

export default CardDetails