import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {

    return (
       <Nav className="navBar">
        <Nav.Link href="/">Main Feed</Nav.Link>
        <a href="/user-page">User Page</a>
        <a href="/create-card">Create A New Card</a>
        <a href="/following-feed">Following Feed</a>
        <a href="/logout">Logout</a>
       </Nav>
       
    )
}

export default NavBar