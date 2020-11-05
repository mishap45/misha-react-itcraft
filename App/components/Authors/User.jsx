import React, { useContext } from 'react'
import { Image, Text, View, StyleSheet } from 'react-native'
import { AuthorContextSet, SetUserIdContext } from '../../context/context'
import { useFonts } from 'expo-font'

const User = ({ name, email, postsCount, navigation, id }) => {

    const [loaded] = useFonts({
        Roboto: require('../../assets/fonts/Roboto-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    let photo = name.split(' ');
    const authorSet = useContext(AuthorContextSet);
    const userIdSet = useContext(SetUserIdContext);

    const onPressAction = () => {
        authorSet(name);
        userIdSet(id);
        return navigation.navigate('Posts')
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerSmall}>
                <View style={styles.photo}>{photo[0][0]}{photo[1][0]}</View>
                <View>
                    <Text style={styles.textOne} onPress={onPressAction}>{name}</Text>
                    <Text style={styles.textTwo}>{email}</Text>
                </View>
            </View>

            <View style={styles.postsCount}>
                <Text style={styles.textPosts} onPress={onPressAction}>{postsCount} posts</Text>
                <Image
                    style={{width: 12, height: 12, marginBottom: 6}}
                    source={require('./../../assets/img/rightArrow.svg')}
                />
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 72
    },

    containerSmall: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        flexDirection: 'row',
        height: 72
    },

    photo: {
        backgroundColor: '#6FCF97',
        fontFamily: 'Roboto',
        height: 40,
        width: 40,
        borderRadius: 99,
        color: '#382A2C',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 16
    },

    textOne: {
        fontFamily: 'Roboto',
        height: 24,
        fontSize: 16,
        color: '#382A2C',
    },

    textTwo: {
        fontFamily: 'Roboto',
        height: 24,
        fontSize: 12,
        color: '#382A2C',
        opacity: .54
    },

    textPosts: {
        fontFamily: 'Roboto',
        fontSize: 16,
        color: '#382A2C',
        marginRight: 16,
        height: 27
    },

    postsCount: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
});

export default User