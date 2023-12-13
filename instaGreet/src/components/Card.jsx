import { useState, useEffect } from 'react'
import axios from 'axios'

const Card = () =>{


// useEffect((e) => {
//     e.preventDefault()
//     axios.get("https://social-cards.fly.dev/api/cards").then((res) => {
//         setCardInfo(res.data)
//         console.log(res.data)
//     } )
// })

    return(
        <>
            <div className="outerCardDiv">
                <p className="frontCardText">Merry Christmas ya Filthy Animals!</p>
            </div>
        </>
    )
}

export default Card