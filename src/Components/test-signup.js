import React, { useState } from 'react'
import { Container } from 'react-bootstrap';

const style = {
  backgroundColor: "#4CAF50", /* Green */
  border: "none",
  color: "white",
  padding: "16px 32px",
  textAlign: "center",
  textDecoration: "none",
  display: "inline-block",
  fontSize: "16px",
  margin: "4px 2px",
  transitionDuration: "0.4s",
  cursor: "pointer",
}

const Signup = () => {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[nameError, setNameError] = useState('');
    const[emailError, setEmailError] = useState('');
    const[passwordError, setPasswordError] = useState('');

    const submitHelper = async e => {
        e.preventDefault();
        try{
            const res = await fetch('http://localhost:5000/signup', {
                method: 'POST',
                body:JSON.stringify({name, email, password}),
                headers:{'Content-Type': 'application/json'}
            });

            const data = await res.json();
            if(data.err){
                setEmailError(data.err.email);
                setNameError(data.err.name);
                setPasswordError(data.err.password)
            }else{
              alert("Success")
              window.location.href="/login"
            }

        }catch (error){
            alert("An error occured with your account creation.")
        }
    }

    return (
      <div>
        <br/><br/>
        <Container style={{backgroundColor:"#F0F6F7"}}>
        <div className="row">
          <form className="col s12" onSubmit={submitHelper}>
          <br/><br/>
          <h1>Sign Up</h1><br/>
            <div className="row">
            <label style={{textAlign:"left"}} htmlFor="first_name">Enter Your Full Name:</label>
              <div className="input-field col s6">
                <input style={{width: "100%"}} placeholder="Full Name" id="name" type="text" className="validate" 
                 value={name} onChange={e=>setName(e.target.value)}
                />
              </div>
              <div style={{color:"red"}}>{nameError}</div>
            </div>
            <br/>
            <div className="row">
            <label style={{textAlign:"left"}} htmlFor="email">Enter Your Email</label>
              <div className="input-field col s12">
                <input style={{width: "100%"}} placeholder="Email" id="email" type="email" className="validate" 
                 value={email} onChange={e=>setEmail(e.target.value)}
                />
              </div>
              <div style={{color:"red"}}>{emailError}</div>
            </div>
            <br/>
            <div className="row">
            <label style={{textAlign:"left"}} htmlFor="password">Enter Your Password</label>
              <div className="input-field col s12">
                <input style={{width: "100%"}} placeholder="Password" id="password" type="password" className="validate"
                value={password} onChange={e=>setPassword(e.target.value)} 
                />
              </div>
              <div style={{color:"red"}}>{passwordError}</div>
            </div>
            <br/>
            <button className="btn" style={style}>Sign up</button>
          </form>
        </div>
        <br/>
        </Container>
        </div>
      );
}

export default Signup