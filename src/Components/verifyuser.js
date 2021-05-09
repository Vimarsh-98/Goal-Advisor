import React from 'react'

const Verifyuser = () => {

    const verifyUser = async () => {
        try{
            const res = await fetch('http://localhost:5000/verifyUser', {
                credentials: 'omit',
                headers:{'Content-Type': 'application/json'}
            });

            const data = await res.json();
            console.log(data)

        }catch (error){
            alert("An error occured in verify page.")
        }
    }

    return (
        <div>
            Verify User Page {verifyUser()}
        </div>
      );
}

export default Verifyuser