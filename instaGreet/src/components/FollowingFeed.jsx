import Card from "./Card"
import NavBar from "./NavBar"

const FollowingFeed = () => {
    console.log("This is following feed")
    return (
        <>
        <NavBar />
            <p>This is FollowingFeed</p>
            <div className="cardFrame">
                <div className="card">
                    <Card />
                Card and Frame Placeholder</div>
                </div>
        </>
)}

export default FollowingFeed