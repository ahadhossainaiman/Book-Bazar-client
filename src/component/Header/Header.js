import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { UserContext } from "../../App";
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    return (
        <div className="header">
      <Navbar variant="light" bg="primary">
        <Navbar.Brand href="/home"><b>Book Bazar</b></Navbar.Brand>
        <Nav className="ml-auto">
        <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="/order">Order</Nav.Link>
          <Nav.Link href="/admin">Admin</Nav.Link>
          <Nav.Link href="/deal">Deal</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav> 
      </Navbar>
    </div>
    );
};

export default Header;