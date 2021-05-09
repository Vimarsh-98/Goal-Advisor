import React from 'react'
import { Container, Row, Col, Image, Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';

const styles = {
    // backgroundColor: "background-color: #63a4ff
    backgroundImage: "linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%)",
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "80px",
    paddingTop: "40px",
    paddingBottom: "30px",
    borderRadius: "20px"
}

const barstyles = {    
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
}

const title = {
    fontSize: "45px",
    paddingBottom: "10px",
    fontWeight: "bolder"

}

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    updateEmail(input){
        this.setState({
            email: input
        })
    }

    updatePassword(input){
        this.setState({
            password: input
        })
    }

    checkDB(email, pass){
        axios.get('http://localhost:5000/signup')
        .then(response => {
        var jsonData = JSON.stringify(response.data);
        console.log(jsonData);
  });
    }

    render() {
        return (

            <div style={styles}>
                <p style={title}>Login </p>
                <InputGroup className="mb-3" style={barstyles}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        value={this.state.email} 
                        onChange={(e) => this.updateEmail(e.target.value)}
                    />
                </InputGroup>
                <br/>
                <InputGroup className="mb-3" style={barstyles}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Password</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        value={this.state.password} 
                        onChange={(e) => this.updatePassword(e.target.value)}
                    />
                </InputGroup>
                <br/>
                <Button as="input" type="submit" value="Submit" onClick={() => this.checkDB(this.state.email, this.state.password)} />{' '}
            </div>
        )
    }
}
export default Login
