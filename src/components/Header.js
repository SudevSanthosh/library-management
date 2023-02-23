import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const Header = () => {
  const selectedUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const initials = selectedUser.name.match(/\b(\w)/g).join("");
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Central Library</Navbar.Brand>

          <Nav>
            <Nav.Link href="/welcomePage" className="bg-primary text-white">
              Home
            </Nav.Link>


            {
              selectedUser.isStudent === true || selectedUser.isAdmin === true ? null : (  <Nav.Link href="/studentList" className="bg-primary text-white">
              Students List
            </Nav.Link>)
            }
          
            <Nav.Link href="/" className="bg-danger text-white ">
              Logout
            </Nav.Link>
            <Navbar.Text className="ml-4 p-2  font-weight-bold  text-white bg-primary ">
              {initials}
            </Navbar.Text>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
