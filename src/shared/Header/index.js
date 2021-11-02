import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import history from "../../History";
import "./styles.scss";
export default function Header() {
  function handleClick(path) {
    history.push(path);
  }
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="mainNav">
      <Container fluid>
        <Navbar.Brand style={{cursor: "pointer"}} onClick={() => handleClick("/")}>Sports Live</Navbar.Brand>
        <Navbar>
          <Nav className="me-auto">
            <Button variant="secondary" onClick={() => handleClick("/callAPI")}>call api</Button>
            <Nav.Link><i className="fa fa-bell-o" aria-hidden="true"></i></Nav.Link>
            <Nav.Link ><i className="fa fa-search" aria-hidden="true"></i></Nav.Link>
            <Nav.Link ><i className="fa fa-user" aria-hidden="true"></i></Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </Navbar>
  );
}
