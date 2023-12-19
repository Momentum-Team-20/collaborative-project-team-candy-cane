import axios from 'axios'
import Card from './Card'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'


const DeleteCard = ({ token }) => {
    const [card, setCard] = useState([])
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios
          .get(`https://social-cards.fly.dev/api/cards/${id}`
          )
          .then((res) => {
              setCard(res.data)
              console.log("Inside then", res.data)
            })
      }, [id])

      const confirmDelete = (event) => {
        axios.delete(`https://social-cards.fly.dev/api/cards/${id}`,
        {
            headers: {
              authorization: `Token ${token}`,
            }
          })
        .then((res) => {
            navigate('/')
        }, [id])
      }

    return (
        <>
            <h1>Do you want to delete this card?</h1>
                <Card 
                    key={card.id}
                    front_text={card.front_text}
                    background_color={card.background_color}
                    creator={card.creator}
                />
            <button type="submit" onClick={confirmDelete}>Delete</button>
            <a href={`/card-details/${id}`}>Cancel</a>
        </>
    )
}

export default DeleteCard