import { useState } from "react";
import axios from 'axios';
import Card from './Card';
import NavBar from "./NavBar";
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const CreateCard = ({token}) => {
    const [form, setForm] = useState({
        front_text:'',
        back_text:'',
        background_color:'',
        font:'',
        font_size:'',
        text_align:'',
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
        <Card 
        front_text={form.front_text}
        back_text={form.back_text}
        background_color={form.background_color}
        font={form.font}
        font_size={form.font_size}
        text_align={form.text_align}
        />
        <Form>
        <Form.Group method="post" onSubmit={handleSubmit}>
            <Form.Label> Greeting:<Form.Control id="front_text" value={form.front_text} onChange={handleChange} /></Form.Label>
        </Form.Group>
        <Form.Group>    
            <Form.Label htmlFor="background_color">Color Picker:</Form.Label>
            <Form.Control type="color" id="background_color" value={"#ffffff"} onChange={handleChange}/>
        </Form.Group>
        <Form.Group>
            <Form.Label>Font:
                <Form.Select id="font" onChange={handleChange}>
                    <option>------</option>
                    <option>Rubik</option>
                    <option>Playfair</option>
                    <option>Quicksand</option>
                </Form.Select>
            </Form.Label>
        </Form.Group>
        <Form.Group>
            <Form.Label>Font Size:
                <Form.Select id="font_size" onChange={handleChange}>
                    <option>-----</option>
                    <option>small</option>
                    <option>medium</option>
                    <option>large</option>
                    <option>larger</option>
                    <option>largest</option>
                </Form.Select>
            </Form.Label>
        </Form.Group>
        <Form.Group>
            <Form.Label>Align text:
                <Form.Select id="text_align" onChange={handleChange}>
                <option>-----</option>
                <option>center</option>
                <option>left</option>
                <option>right</option>
                <option>top</option>
                <option>bottom</option>
                </Form.Select>
            </Form.Label>
        </Form.Group>
        <Form.Group>
            <Button type="submit">Post!</Button>
        </Form.Group>
        </Form>
            
        </>
    )
}

export default CreateCard