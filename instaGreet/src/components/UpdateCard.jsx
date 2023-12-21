import { useState, useEffect } from "react";
import axios from 'axios'
import Card from './Card'
import NavBar from "./NavBar";
import { useNavigate, useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


const UpdateCard = ({ token, setCardID, username }) => {
    const [form, setForm] = useState({
        front_text:'',
        back_text:'',
        background_color:'',
})
const [card, setCard] = useState([])
const { id } = useParams()
const navigate = useNavigate()

useEffect(() => {
    axios
      .get(`https://social-cards.fly.dev/api/cards/${id}`)
      .then((res) => {
          setForm(res.data)
          console.log("Inside then", res.data)
        })
  }, [id])

// add .lowercase
const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.id]: e.target.value,
    })
}
const handleSubmit = (e) => {
    console.log(token)
    e.preventDefault();
    axios.put(`https://social-cards.fly.dev/api/cards/${id}/`,
    {...form,},
    {
        headers: {
            Authorization: `Token ${token}`
        }
    }
    )
    .then(() => {
        navigate('/')
    })
}

    return(
        <>
        <NavBar />
            <p>This is the Create Card Page</p>
            <form method="post" onSubmit={handleSubmit}>
                <label> Greeting:<input id="front_text" value={form.front_text} onChange={handleChange} /></label>
                
                <label htmlFor="background_color">Color Picker:</label>
                <input type="color" id="background_color" value={"#ffffff"} onChange={handleChange}/>
                {/* <label>Background Image:<input id="imageURL" value={form.imageURL} onChange={handleChange}/>
                </label> */}
                <label>Font:
                    <select id="font" onChange={handleChange}>
                        <option>------</option>
                        <option>Rubik</option>
                        <option>Playfair</option>
                        <option>Quicksand</option>
                    </select>
                </label>
                <label>Font Size:
                    <select id="font_size" onChange={handleChange}>
                        <option>-----</option>
                        <option>small</option>
                        <option>medium</option>
                        <option>large</option>
                        <option>larger</option>
                        <option>largest</option>
                    </select>
                </label>
                <label>Align text:
                    <select id="text_align" onChange={handleChange}>
                    <option>-----</option>
                    <option>center</option>
                    <option>left</option>
                    <option>right</option>
                    <option>top</option>
                    <option>bottom</option>
                    </select>
                </label>
                <Button className="ms-2" type="submit">Post!</Button>
            </form>
            <Card 
                front_text={form.front_text}
                back_text={form.back_text}
                background_color={form.background_color}
                font={form.font}
                font_size={form.font_size}
                text_align={form.text_align}
            />
            
        </>
    )
}

export default UpdateCard