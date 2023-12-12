import Card from './Card'
import FollowingFeed from './FollowingFeed'
import UserPage from './UserPage'
import Login from './Login'

const MainFeed = () => {
    console.log("This is main feed")
    return (
        <>
            <Login />
            <p>This is MainFeed</p>
            <div className="cardFrame">
                <div className="card">
                    <Card />
                Card and Frame Placeholder</div>
            </div>
            <FollowingFeed

            />
            <UserPage

            />
        </>
)}

export default MainFeed