import React, { useState, useEffect } from "react";

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const usersData = data.map((user) => ({
          name: user.name,
          email: user.email,
        }));
        setUsers(usersData);
      });
  }, []);

  return (
    <div>
      <h2>Lista de usuarios</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            Nombre:{user.name} Email:{user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
