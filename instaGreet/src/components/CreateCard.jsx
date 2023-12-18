import { useState } from "react";
import axios from 'axios'
import Card from './Card'
import NavBar from "./NavBar";

const CreateCard = () => {
    const [form, setForm] = useState({

})

// add .lowercase
const handleChange = (e) => {
    setForm({
        ...form,
        [e.target.id]: e.target.value,
    })
}
const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://social-cards.fly.dev/api/cards/',
    {...form,},
    {
        headers: {
            Authorization: `Token ${token}`
        }
    }

    )
}

    return(
        <>
        <NavBar />
            <p>This is the Create Card Page</p>
            <form method="post" onSubmit={handleSubmit}>
                <label> Front of Card:<input id="front_text" value={form.front_text} onChange={handleChange} /></label>
                <label> Inside of Card:<input id="back_text" value={form.back_text} onChange={handleChange}/></label>
                <label> Background color:
                    <select id="background_color" name="selectedBackgroundColor" onChange={handleChange}>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                    </select>
                </label>
                <button type="submit">Post!</button>
            </form>
            <Card 
            front_text={form.front_text}
            background_color={form.background_color}/>
            {/* I think this button should actually go on the user page? - Freddie
            <button className="newCardButton">Create your new greeting card here!</button> */}
        </>
    )
}

export default CreateCard