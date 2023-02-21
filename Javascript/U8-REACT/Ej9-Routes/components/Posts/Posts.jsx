import React, { useState, useEffect } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
const Posts = () => {
    const [posts, setPosts] = useState([]);
    let { userId } = useParams();
    useEffect(() => {
        fetchData();
    },[userId])
    const fetchData = async () => {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${userId}/comments`;
            const response = await fetch(url);
            const json = await response.json();
            setPosts(json);
            console.log("Posts: " + posts);
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <p>Name: {post.name}</p>
              <p>Email: {post.email}</p>
              <p>Body: {post.body}</p>
            </li>
          ))}
        </ul>
        
      </div>)
}
export default Posts;