import React from 'react';
//import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Jumbotron, Button } from 'react-bootstrap';
import { Bottomtext } from "./Bottomtext";

const title = {
    fontSize: "55px",
    marginBottom: "15px"
}

const jumbostyle = {
    backgroundImage: "url('https://knowledgeone.ca/wp-content/uploads/2019/10/motivation_oct2019.jpg')", 
    backgroundSize: "cover", 
    height: "70vh"
}

export const Jumbo = () => ( 
    <div>
        <Jumbotron style={jumbostyle}> 
            <div class = "jumbotroncontent" style={{paddingRight: "40px"}}>
                <h1 style={title}>Goal Advisor</h1>
                <p class= "paragraph" style={{fontSize: "20px"}}>
                A new way to stay motivated and achieve personal goals!
                </p>
                <p>
                <Button href="/signup" variant="primary">Learn more</Button>
                </p>
            </div>
        </Jumbotron>
        <Bottomtext/>
    </div>
)