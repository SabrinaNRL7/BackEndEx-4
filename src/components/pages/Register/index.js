import React, { useState } from "react";
import Button from '../../atoms/Button';
import Axios from 'axios';
import NavBar from '../../molecules/NavBar';
const Login = () => { 
    const [first_name, setFirstName] = useState ("");
    const [last_name, setLastName] = useState ("");
    const [email, setEmail] = useState ("");
   
    
    const handleSubmit = () => {
        const data = {
            first_name: first_name,
            last_name: last_name,
            email: email,   
            avatar: 'https://source.unsplash.com/user/erondu',       
        };
        Axios.post('http://localhost:3004/users', data);
    };


    return (
        <div className="container">
            <NavBar/>
            <h3 className="mb-4">Register</h3>
            <p className="form-label">First Name</p>
            <input
                className="form-control"
                placeholder="Input your first name"
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}

            />
            <br/>
            <p className="form-label">Last Name</p>
            <input
                className="form-control" 
                placeholder="Input your username" 
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
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
            <Button saveData={handleSubmit} label="Register"/>
        </div>
    );
};
export default Login;