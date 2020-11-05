import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {ScrollView} from 'react-native-web'
import SearchInput, {createFilter} from 'react-native-search-filter'
import Users_Container from './User_Container'
import {useFonts} from 'expo-font'

const KEYS_TO_FILTERS = ['name', 'email'];

const Authors = ({navigation, users, search, setSearch}) => {

    const [loaded] = useFonts({
        Roboto: require('../../assets/fonts/Roboto-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    const filteredList = users.filter(createFilter(search, KEYS_TO_FILTERS));
    const filteredUsersList = filteredList.map(f => <Users_Container key={f.id} id={f.id} name={f.name} email={f.email}
                                                                     postsCount={f.id} navigation={navigation} />);

    return (
        <View>
            <SearchInput
                onChangeText={(term) => {
                    setSearch(term)
                }}
                placeholder="Search"
                style={stylesSearchInput.search}
            />

            <ScrollView>{ filteredUsersList }</ScrollView>
        </View>
    );
};

export const stylesSearchInput = StyleSheet.create({
    search: {
        fontFamily: 'Roboto',
        color: '#382A2C',
        marginHorizontal: 16,
        backgroundColor: '#eee',
        fontSize: 16,
        height: 40,
        marginTop: 12,
        padding: 15
    }
});

export default Authors