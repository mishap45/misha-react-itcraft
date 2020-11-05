import React, { useState, useEffect } from 'react'
import Authors from './Authors'

const Authors_Container = ({ navigation }) => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setUsers(json))
            .catch((error) => alert(error))
    }, []);

    return <Authors users={users} search={search} setSearch={setSearch} navigation={navigation} />
};

export default Authors_Container