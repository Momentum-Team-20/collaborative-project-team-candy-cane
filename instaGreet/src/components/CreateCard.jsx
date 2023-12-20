import { useState } from "react";
import axios from 'axios'
import Card from './Card'
import NavBar from "./NavBar";
import { useNavigate } from 'react-router-dom'


const CreateCard = ({token}) => {
    const [form, setForm] = useState({
        front_text:'',
        back_text:'',
        background_color:'',
})
const navigate = useNavigate()

const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.id]: e.target.value,
    })
}
const handleSubmit = (e) => {
    console.log(token)
    e.preventDefault();
    axios.post('https://social-cards.fly.dev/api/cards/',
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
            <form method="post" onSubmit={handleSubmit}>
                <label> Greeting:<input id="front_text" value={form.front_text} onChange={handleChange} /></label>
                
                <label htmlFor="background_color">Color Picker:</label>
                <input type="color" id="background_color" value={"#ffffff"} onChange={handleChange}/>
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
                <button type="submit">Post!</button>
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

export default CreateCard