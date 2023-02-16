import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Central Library</Navbar.Brand>

          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Features</Nav.Link>
            <Nav.Link href="/">Pricing</Nav.Link>
            <Navbar.Text className="h4 ml-8 bg-white text-black p-1  cursor-pointer border-4 border-secondary">
           SS
          </Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
