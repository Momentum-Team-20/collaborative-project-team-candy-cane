import CreateCard from "./CreateCard"
import Card from "./Card"


const UserPage = () =>{
    return (
        <>
        <p>This is the User's Home Page</p>
            <CreateCard

            />
            <div className="card">
                <Card />
                User's Card Placeholder</div>
        </>
    )
}

export default UserPage