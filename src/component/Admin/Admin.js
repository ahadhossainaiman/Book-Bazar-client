import React from "react";
import { Nav, Navbar } from "react-bootstrap";
const Admin = () => {
  return (
    <div>
      <Navbar variant="light" bg="light">
        <Nav className="ml-auto">
          <Nav.Link href="/manageBook">Manage Book</Nav.Link>
          <Nav.Link href="/addBook">Add Book</Nav.Link>
          <Nav.Link href="/editBook">Edit Book</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default Admin;
