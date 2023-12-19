import axios from "axios"
import Card from "./Card"
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"
import NavBar from "./NavBar"

const CardDetails = ({ token, setCardID, username }) => {
    const [card, setCard] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios
          .get(`https://social-cards.fly.dev/api/cards/${id}`)
          .then((res) => {
              setCard(res.data)
              console.log("Inside then", res.data)
            })
      }, [id])

    const goToDelete = (event, card) => {
        const key = card.id
        setCardID(key)
        navigate(`/delete-card/${key}`)
    }

    const goToUpdate = (event, card) => {
        const key = card.id
        setCardID(key)
        navigate(`/update-card/${key}`)
    }

    if (card.creator != username) {
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

    return (
        <>
        <NavBar />
            <Card 
                key={card.id}
                front_text={card.front_text}
                background_color={card.background_color}
                creator={card.creator}
            />
            <button onClick={((e) => goToUpdate(e, card))}>Update</button>
            <button onClick={((e) => goToDelete(e, card))}>Delete</button>
        </>
    )
}

export default CardDetails