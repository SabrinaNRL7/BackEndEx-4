import React, { useState } from "react";

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
        //JSX
        <div className="container mt-5">
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
            <button type="button" onClick={handleSubmit} className="btn btn-primary">
                Sign In
            </button>
        </div>
    );
};
export default Login;


