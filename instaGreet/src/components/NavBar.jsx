import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {

    return (
       <Nav className="navBar">
        <Nav.Link href="/">Main Feed</Nav.Link>
        <Nav.Link href="/user-page">User Page</Nav.Link>
        <Nav.Link href="/create-card">Create A New Card</Nav.Link>
        <Nav.Link href="/following-feed">Following Feed</Nav.Link>
        <Nav.Link href="/logout">Logout</Nav.Link>
       </Nav>
       
    )
}

export default NavBar