import React from 'react'
import Header from './../templates/Header'
import Knowledge from './Knowledge'
import { createStackNavigator } from '@react-navigation/stack'

const KnowledgeScreen = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Knowledge"
                component={Knowledge}
                options={{
                    header : () => 
                    <Header 
                        title="Savoir-faire"
                        image="https://i.pinimg.com/originals/29/e5/aa/29e5aab91b9a26eccc286b5de68ce801.jpg"
                    />
                }}
            />
        </Stack.Navigator>
    )
}
export default KnowledgeScreen