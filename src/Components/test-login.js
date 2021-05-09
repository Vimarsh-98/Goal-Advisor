import React, { useState } from 'react'

const Login = () => {
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[emailError, setEmailError] = useState('');
    const[passwordError, setPasswordError] = useState('');

    const submitHelper = async e => {
        e.preventDefault();
        try{
            const res = await fetch('http://localhost:5000/login', {
                mode: 'cors',
                method: 'POST',
                credentials: 'omit',
                body:JSON.stringify({email, password}),
                headers:{'Content-Type': 'application/json'}
            });

            const data = await res.json();
            if(data.err){
                if(data.err === "Incorrect Email"){
                  setEmailError(data.err);
                }
                if(data.err === "Incorrect Password") {
                  setPasswordError(data.err)
                }
            }

        }catch (error){
            alert("An error occured while loging in.")
        }
    }

    return (

        <div className="row">
          <form className="col s12" onSubmit={submitHelper}>
            <div className="row">
            <label htmlFor="email">Email</label>
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" 
                 value={email} onChange={e=>setEmail(e.target.value)}
                />
              </div>
              <div>{emailError}</div>
            </div>
            <div className="row">
            <label htmlFor="password">Password</label>
              <div className="input-field col s12">
                <input id="password" type="password" className="validate"
                value={password} onChange={e=>setPassword(e.target.value)} 
                />
              </div>
              <div>{passwordError}</div>
            </div>
            <button href="/main" className="btn">Login</button>
          </form>
        </div>
      );
}

export default Login