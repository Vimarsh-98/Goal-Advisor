import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheck, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

const style={
    marginTop: "20px"
}

export const Bottomtext = () => (
    <Container style={style}>
        <br/>
        <Row style={{ textAlign: "center", fontWeight: "bolder", fontSize: "1.1em", backgroundColor: "lightskyblue", padding: "40px", borderRadius:"20px", marginBottom: "40px" }}>
            <Col sm={5}>
                <FontAwesomeIcon icon={faMoneyCheck} size='3x' /> <br/><br/>
                <p>Set your personal gains and complete your goals within a timeframe or else a fee will be inflicted.</p>
            </Col>
            <Col sm={2}></Col>
            <Col sm={5}>
                <FontAwesomeIcon icon={faHandHoldingHeart} size='3x' /> <br/><br/>
                <p>100% of all profits made off the user will be sent to the charity of choice.</p>
            </Col>
        </Row>
    </Container>
)

