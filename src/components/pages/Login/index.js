import React, { useState } from "react";
import Button from '../../atoms/Button';
import NavBar from '../../molecules/NavBar';

const Login = () => { 
    const [username, setUsername] = useState ("");
    const [password, setPassword] = useState("");

    const handleSubmit = () => {
        const data = {
            username: username,
            password: password,
        };
        console.log(data);
    };


    return (

        <div className="container mt-5">
            <NavBar/>
            <h3 className="mb-4">Login</h3>
            <p className="form-label">Username</p>
            <input
                className="form-control"
                placeholder="Input email" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                
            />
            <br/>
            <p className="form-label">Password</p>
            <input
                className="form-control" 
                placeholder="Input password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            <br/> 
            <Button saveData={handleSubmit} label="Login"/>           
        </div>
    );
};
export default Login;


