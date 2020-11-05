import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Animated } from 'react-native'

import Authors_Container from '../components/Authors/Authors_Container'
import Posts_Container from '../components/Posts/Posts_Container'
import{ AuthorContext } from '../context/context'

const forFade = ({ current, next }) => {
    const opacity = Animated.add(
        current.progress,
        next ? next.progress : 0
    ).interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0],
    });

    return {
        leftButtonStyle: {opacity},
        rightButtonStyle: {opacity},
        titleStyle: {opacity},
        backgroundStyle: {opacity},
    };
};

const Stack = createStackNavigator();

const AppScreens = () => {

    const nameAuthor = useContext(AuthorContext);

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Authors"
                component={Authors_Container}
            />
            <Stack.Screen
                name="Posts"
                component={Posts_Container}
                options={{
                    headerStyleInterpolator: forFade,
                    title: nameAuthor + '`s Posts'
                }}
            />
        </Stack.Navigator>
    );
};

export default AppScreens