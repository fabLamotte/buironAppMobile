import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Header from './../templates/Header'
import Contact from './Contact'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font';

const ContactScreen = () => {
    const [loaded] = useFonts({
        College: require('./../assets/fonts/college.ttf'),
    })
    if (!loaded) {
        return null;
    }
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Contact"
                component={Contact}
                options={{
                    header : () => 
                    <Header 
                        title="Contact"
                        image="https://prmeng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2019/10/16/node_43209/37235097/public/2019/10/16/B9721259555Z.1_20191016113852_000%2BG9KEMR765.2-0.jpg?itok=-vock0QB1571225489"
                    />
                }}
            />
        </Stack.Navigator>
    )
}
export default ContactScreen