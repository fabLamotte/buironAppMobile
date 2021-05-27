import React from 'react'
import { StyleSheet, View, StatusBar, Platform, Image, Text, ActivityIndicator  } from 'react-native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import ContactScreen from './src/components/ContactScreen'
import KnowledgeScreen from './src/components/KnowledgeScreen'
import ProductionScreen from './src/components/ProductionScreen'
import HomeScreen from './src/components/HomeScreen'

import Icon from 'react-native-vector-icons/Ionicons'

const App = () => {
  const Tab = createBottomTabNavigator();
  const [screen, setScreen] = React.useState(
    <View style={{flex:1, position:'relative', backgroundColor:'#C82972', justifyContent:'center', alignItems:'center'}}>
      <Image 
        style={{position:'absolute', height:'100%', width:'100%', zIndex:1}}
        source={{uri:'https://c.wallhere.com/photos/55/f9/meat_sausage_sliced_assorted_varieties-729027.jpg!d'}}
      />
      <View style={{position:'absolute', height:'100%', width:'100%', zIndex:2, backgroundColor:'black', opacity:0.4}}></View>
      <View style={{position:'absolute', zIndex:3}}>
        <Text style={{color:'white', fontSize:56, textAlign:'center'}}>Charcuterie Artisanale Buiron</Text>
        <ActivityIndicator size="large" color="#DBDBDB" />
      </View>
    </View>
  )
  setTimeout(() => setScreen(
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
  ), 2500)
  return screen
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  tab:{
    backgroundColor:'red'
  }
})

export default App
