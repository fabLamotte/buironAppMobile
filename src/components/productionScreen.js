import React from 'react'
import Header from './../templates/Header'
import Production from './Production'
import { createStackNavigator } from '@react-navigation/stack'

const ProductionScreen = () => {
    const Stack = createStackNavigator();
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Production"
                component={Production}
                options={{
                    header : () => 
                    <Header 
                        title="Nos offres"
                        image="https://le-de.cdn-website.com/cd078f4673fa4088943e04d5eb04342d/dms3rep/multi/opt/42090ce447304829a086700e2ffe04f4-640w.jpg"
                    />
                }}
            />
        </Stack.Navigator>
    )
}

export default ProductionScreen