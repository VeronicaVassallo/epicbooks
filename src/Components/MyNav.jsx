import React,{Component} from "react";

//elementi bootstrap
import {Container, Row} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

//importro nanoid qui
import { nanoid } from "nanoid";

//importO L'array di oggettti NavLinks
import { navLinks } from "./navLinks";

class MyNav extends Component {
    render(){
        return(
            <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="bg-info MyColor" >
        <Row>
          <Navbar.Brand className="text-white" href="#">EpicBooks</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {navLinks.map(link => 
                <Nav.Link key={nanoid()} href={link.url}>
                  {link.label}
                </Nav.Link>
                )}  
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Container>
    </Navbar>
        )
    }
}
export default MyNav;