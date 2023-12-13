/*<Navbar.Brand href="/">My Books App</Navbar.Brand>*/

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const AppNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav className="mr-auto">
        <Nav.Link href="/home">MyBooksApp</Nav.Link>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/add-book">Add Book</Nav.Link>
        
      </Nav>
    </Navbar>
  );
};

export default AppNavbar;
