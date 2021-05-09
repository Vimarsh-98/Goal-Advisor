import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHourglassHalf } from '@fortawesome/free-solid-svg-icons';

const styles = {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "lightskyblue"
}


export const Navigation = () => (
   <div class = "main">
      <Navbar class="nav" collapseOnSelect expand="lg" bg="dark" variant="info" fixed="top" >
         <Nav.Link eventKey={2} href="#memes" style={{ color: "#282828" }}>Dank</Nav.Link>
         <Navbar.Brand class="navtitle" href="/"><FontAwesomeIcon icon={faHourglassHalf} size='lg' /><strong> Goal-Advisor</strong></Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
               <Nav.Link eventKey={2} href="#memes" style={{ color: "#282828" }}><Link to="/main" style={{ color: "white" }}>MAIN.JS</Link></Nav.Link>
               <Nav.Link eventKey={2} href="#memes" style={{ color: "#282828" }}><Link to="/goal" style={{ color: "white" }}>GOAL.JS</Link></Nav.Link>
               <Nav.Link eventKey={2} href="#memes" style={{ color: "#282828" }}>Dank memes</Nav.Link>
               <Nav.Link eventKey={2} href="#memes" style={{ color: "#282828" }}>Dank memes</Nav.Link>
               <Nav.Link eventKey={2} href="#memes" style={{ color: "#282828" }}>Dank memes</Nav.Link>
               <Nav.Link eventKey={2} href="#memes" style={{ color: "#282828" }}>Dank memes</Nav.Link>
               <Nav.Link eventKey={2} href="#memes" style={{ color: "#282828" }}>Dank memes</Nav.Link>
               <Nav.Link eventKey={2} href="#memes" style={{ color: "#282828" }}>Dank memes</Nav.Link>
               <Nav.Link eventKey={2} href="#memes" style={{ color: "#282828" }}>Dank memes</Nav.Link>
               <Nav.Link eventKey={2} href="#memes" style={{ color: "#282828" }}>Dank memes4life</Nav.Link>
            </Nav>
            <Nav>

            <Nav.Link>
            <Button variant="success"><Link to="/signup" style={{ color: "white" }}>Sign Up</Link></Button>
            </Nav.Link>
            <Nav.Link>
            <Button variant="dark"><Link to="/login" style={{ color: "white" }}>Login</Link></Button>
         </Nav.Link>
         </Nav>
         </Navbar.Collapse>
      </Navbar>
   </div>
)