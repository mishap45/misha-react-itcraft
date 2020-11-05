import React from 'react'
import { View } from 'react-native'
import Post from './Post'
import { ScrollView } from 'react-native-web'
import SearchInput, { createFilter } from 'react-native-search-filter'
import { stylesSearchInput } from '../Authors/Authors'

const KEYS_TO_FILTERS = ['title', 'body'];

const Posts = ({ search, setSearch, posts }) => {

    const filteredList = posts.filter(createFilter(search, KEYS_TO_FILTERS));
    const filteredUsersList = filteredList.map(f => <Post key={f.id} postTitle={f.title} postText={f.body} />);

    return (
        <View>
            <SearchInput
                onChangeText={(term) => {
                    setSearch(term)
                }}
                placeholder="Search"
                style={stylesSearchInput.search}
            />

            <ScrollView>
                { filteredUsersList }
            </ScrollView>
        </View>
    );
};

export default Posts