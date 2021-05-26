import React from 'react'
import { StyleSheet, View, StatusBar, Platform } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import ContactScreen from './src/components/ContactScreen'
import KnowledgeScreen from './src/components/KnowledgeScreen'
import ProductionScreen from './src/components/ProductionScreen'
import HomeScreen from './src/components/HomeScreen'

import Icon from 'react-native-vector-icons/Ionicons'

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator            
          screenOptions={({ route }) => ({
            tabBarIcon: () => {
              let iconName;

              switch(route.name){
                case 'Accueil': 
                  (Platform.OS === 'ios')? iconName="ios-home" : iconName="md-home" ;break;
                case 'Savoir-faire': 
                  (Platform.OS === 'ios')? iconName="ios-bulb" : iconName="md-bulb" ;break;
                case 'Réalisations': 
                  (Platform.OS === 'ios')? iconName="ios-hammer" : iconName="md-hammer" ;break;
                case 'Contact': 
                  (Platform.OS === 'ios')? iconName="ios-chatbubbles" : iconName="md-chatbubbles" ;break;
              }

              // You can return any component that you like here!
              return <Icon name={iconName} size={25} color='white' />;
            },
          })}           
          tabBarOptions={{
            activeTintColor: '#DBDBDB',
            inactiveTintColor: 'white',
            style:{
              backgroundColor:'#C82972',
              height:70,
              paddingBottom:15,
              paddingTop:15,
            }
          }}
        >
          <Tab.Screen name="Accueil" component={HomeScreen} />
          <Tab.Screen name="Savoir-faire" component={KnowledgeScreen} />
          <Tab.Screen name="Réalisations" component={ProductionScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  tab:{
    backgroundColor:'red'
  }
});
export default App
