import React, { useState, useEffect } from 'react'
import User from './User'

const Users_Container = ({ name, email, id, navigation }) => {

    const [posts, setPosts] = useState([]);
    let postsCount = 0;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json))
            .catch((error) => alert(error))
    }, []);

    posts.map(p => p.userId === id && postsCount++);

    return <User name={name} email={email} postsCount={postsCount} navigation={navigation} id={id} />
};

export default Users_Container