import axios from "axios"
import Card from "./Card"
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react"
import NavBar from "./NavBar"
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
            <Container className="d-flex justify-content-center">
            <Row>
                <Card 
                    key={card.id}
                    front_text={card.front_text}
                    background_color={card.background_color}
                    creator={card.creator}
                    font={card.font}
                    font_size={card.font_size}
                    text_align={card.text_align}
                />
            </Row>
            </Container>
            </>

        )

    }

    return (
        <>
        <NavBar />
        <Container className="centerAllCards" >
            <Card 
                key={card.id}
                front_text={card.front_text}
                background_color={card.background_color}
                creator={card.creator}
                font={card.font}
                font_size={card.font_size}
                text_align={card.text_align}
            />
            <Row>
                <Col>
                    <Button className="me-2" onClick={((e) => goToUpdate(e, card))}>Update</Button>
                </Col>
                <Col className="followButton">
                    <Button onClick={((e) => goToDelete(e, card))}>Delete</Button>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default CardDetails