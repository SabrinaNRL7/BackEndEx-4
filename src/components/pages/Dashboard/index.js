import React, { useEffect, useState } from 'react';
import NavBar from '../../molecules/NavBar';
import Card from '../../molecules/Card';
import Axios from "axios";

const Dashboard = () => {

    const [users, setUsers] = useState ([]);

    useEffect(() => {
        Axios.get('http://localhost:3004/users').then((res) => setUsers(res.data));
    }, [users]);

    return (
        <div className="container">
        <NavBar />
            <h3>Dashboard</h3>  
            <br/>
            <div className="row align-items-start">
                {
                    users.map(item => (
                    <Card
                    avatar={item.avatar}
                    fullName={`${item.first_name} ${item.last_name}`}
                    email={item.email}
                    />
                    ))
                }                
            </div>          
        </div>
    ); 
};

export default Dashboard;