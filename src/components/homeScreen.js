import React from 'react'
import {View, StyleSheet, Text, ScrollView, Button, StatusBar } from 'react-native'
import Header from './../templates/Header'
import Home from './Home'

import { createStackNavigator } from '@react-navigation/stack'

const HomeScreen = ({navigation}) => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{
                    header : () => 
                    <Header 
                        title="Charcuterie Artisanale Buirons"
                        image="https://le-de.cdn-website.com/cd078f4673fa4088943e04d5eb04342d/dms3rep/multi/opt/5badb2e68af64a8e8c3d5d5af1613e36-640w.jpg"
                    />
                }}
            />
        </Stack.Navigator>
    )
}
export default HomeScreen