import React  from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useFonts } from 'expo-font'

const Post = ({ postTitle, postText }) => {

    const [loaded] = useFonts({
        Roboto: require('../../assets/fonts/Roboto-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }


    return (
        <View style={styles.container}>
            <Text style={styles.postTitle}>{postTitle}</Text>
            <Text style={styles.postText}>{postText}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
        paddingVertical: 12,
        paddingHorizontal: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },

    postTitle: {
        fontFamily: 'Roboto',
        fontSize: 16,
        marginBottom: 9
    },

    postText: {
        fontFamily: 'Roboto',
        fontSize: 12,
        color: '#382A2C',
        opacity: .54
    }
});

export default Post