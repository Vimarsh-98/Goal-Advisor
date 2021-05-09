import React from 'react'
import { Button } from 'react-bootstrap';
import { Container, Row, Col, Modal, InputGroup, FormControl } from 'react-bootstrap';

const style={
    display: "flex",
    justifyContent: "space-around",
    marginTop: "80px",
    marginLeft: "50px",
    marginRight: "50px"
}

class Goal extends React.Component{

    render(){
        return(
        <div>
            <Row style={{ textAlign: "center" }}>
                <Col>
                    <label>
                        <input type="checkbox" name="checkbox" value="value" onClick={(e) => { this.checkBox(e, this.props.id) }} />
                        <strong style={{}}> {this.props.inputGoal}</strong>
                    </label>
                </Col>
                <Col style={{}}>Finish By:<strong>{this.props.inputDate}</strong></Col>
                <Col><Button variant="danger" style={{}} >Delete</Button></Col>
            </Row>
            <hr />
        </div>
        );
    }
}

export default Goal