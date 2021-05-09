import React, { useState } from 'react'
import { Container, Row, Col, Image, Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import axios from 'axios';

const style = {

    backgroundImage: "linear-gradient(315deg, #63a4ff 0%, #83eaf1 74%)",
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "80px",
    paddingTop: "40px",
    paddingBottom: "30px",
    borderRadius: "20px"
}


const barstyle = {    
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
}

const title = {
    fontSize: "45px",
    paddingBottom: "10px",
    fontWeight: "bolder"

}

const Signup = () => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
}


class signup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',    //in array collection of goals
        }
    }

    updateFirstname(input){
        this.setState({
            firstName: input
        })
    }

    updateLastname(input){
        this.setState({
            lastName: input
        })
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

    updateConfirmPass(input){
        this.setState({
            confirmPassword: input
        })
    }

    async checkDB(){
        if (this.state.password == this.state.confirmPassword){
            //console.log(true)
            // axios.post('http://localhost:5000/signup', {
            //     // _id: Math.random() * Number.MIN_SAFE_INTEGER,
            //     name: (this.state.firstName + " " + this.state.lastName).slice(),
            //     email: (this.state.email).slice(),
            //     password: (this.state.password).slice()
            // });
            try{
                const res = await fetch ('http://localhost:5000/signup', {
                method:'POST',
               // body: JSON.stringify((this.state.firstName + " " + this.state.lastName).slice(), (this.state.email).slice(), (this.state.password).slice()),
                body: JSON.parse(JSON.stringify("abc", "test")),
                headers: {'Content-Type':'application/json'}
            })
            const data = await res.json();
            console.log(data)
            }catch (error){
                console.log(error)
            }
        }else{
            alert("Passwords must match!")
        }
    }

    render() {
        return (
            <div style = {style}>
                <h1 style={title}>Sign Up</h1>
                <br />
                <InputGroup className="mb-3" style={barstyle}>
                    <InputGroup.Prepend>
                        <InputGroup.Text>First and last name</InputGroup.Text>
                    </InputGroup.Prepend>
                    {/* <FormControl placeholder="First Name" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={window.name} onChange={e => setName(e.target.value)} /> */}
                    <FormControl placeholder="Last Name" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={this.state.lastName} onChange={(e) => this.updateLastname(e.target.value)} />
                </InputGroup>
                <br />
                <InputGroup className="mb-3" style={barstyle}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Email</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Email" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={this.state.email} onChange={(e) => this.updateEmail(e.target.value)} />
                </InputGroup>
                <br />
                <InputGroup className="mb-3" style={barstyle}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Password</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Password" aria-label="Default" type="password" aria-describedby="inputGroup-sizing-default" value={this.state.password} onChange={(e) => this.updatePassword(e.target.value)} />
                </InputGroup>
                <br />
                <InputGroup className="mb-3" style={barstyle}>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default">Re-Type Password</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Confirm Password" aria-label="Default" aria-describedby="inputGroup-sizing-default" type="password" value={this.state.confirmPassword} onChange={(e) => this.updateConfirmPass(e.target.value)} />
                </InputGroup>
                <br />
                <Button onClick={() => this.checkDB()} variant="success">Sign Up</Button>{' '}
            </div>


        )
    }
}
export default signup