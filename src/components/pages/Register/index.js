import React, { useState } from "react";

const Login = () => { 
    const [fullName, setFullName] = useState ("");
    const [username, setUserName] = useState ("");
    const [phoneNumber, setPhoneNumber] = useState ("");
    const [email, setEmail] = useState ("");
    const [address, setAddress] = useState ("");
    
    const handleSubmit = () => {
        const data = {
            fullName: fullName,
            email: email,
            username: username,
            phoneNumber: phoneNumber,
            address: address,            
        };
        console.log(data);
    };


    return (
        //JSX
        <div className="container mt-5">
            <h3 className="mb-4">Register</h3>
            <p className="form-label">Full Name</p>
            <input
                className="form-control"
                placeholder="Input your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}

            />
            <br/>
            <p className="form-label">Username</p>
            <input
                className="form-control" 
                placeholder="Input your username" 
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                />
            <br/>

            <p className="form-label">Email</p>
            <input
                className="form-control"
                placeholder="Input email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
            />
            <br/>
            <p className="form-label">Phone Number</p>
            <input
                className="form-control" 
                placeholder="Input phone number" 
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} 
            />
            <br/>
            <p className="form-label">Address</p>
            <input
                className="form-control" 
                placeholder="Input address"  
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <button type="button" onClick={handleSubmit} className="btn btn-primary mt-4">
                Register
            </button>
        </div>
    );
};
export default Login;