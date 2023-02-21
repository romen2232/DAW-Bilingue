import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Posts from '../Posts';
import "./User.css";
const User = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async () => {
        try {
            const url = `https://jsonplaceholder.typicode.com/users`;
            const response = await fetch(url);
            const json = await response.json();
            setUsers(json);
            console.log("Users: " + users);
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className="all">
            <ul className="users">
                {
                    users.map(user => <li ><Link to={`posts/${user.id}`} >Name: {user.name} - Email: {user.email}</Link></li>)
                }
            </ul>
            <aside className="posts" >
                <Posts/>
            </aside>
        </div>

    )
}
export default User;