import axios from "axios"
import Card from "./Card"
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"
import NavBar from "./NavBar"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

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
            <Container>
                <Card 
                    key={card.id}
                    front_text={card.front_text}
                    background_color={card.background_color}
                    creator={card.creator}
                    font={card.font}
                    font_size={card.font_size}
                    text_align={card.text_align}
                />
            </Container>
            </>

        )

    }

    return (
        <>
        <NavBar />
        <Container>
            <Card 
                key={card.id}
                front_text={card.front_text}
                background_color={card.background_color}
                creator={card.creator}
                font={card.font}
                font_size={card.font_size}
                text_align={card.text_align}
            />
            <Button className="me-2" onClick={((e) => goToUpdate(e, card))}>Update</Button>
            <Button onClick={((e) => goToDelete(e, card))}>Delete</Button>
        </Container>
        </>
    )
}

export default CardDetails