import React, { useState, useEffect, useContext } from 'react'
import Posts from './Posts'
import { UserIdContext } from '../../context/context'

const Posts_Container = () => {

    const [search, setSearch] = useState(' ');
    const [allPosts, setAllPosts] = useState([]);

    const userId = useContext(UserIdContext);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setAllPosts(json))
            .catch((error) => alert(error));
    }, []);

    const posts = allPosts.map(a => a.userId === userId && {userId: a.userId, id: a.id, title: a.title, body: a.body});

    return <Posts search={search} setSearch={setSearch} posts={posts} />
};

export default Posts_Container