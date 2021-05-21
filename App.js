import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="HomeScreen" component={HomeScreen} />
          <Tab.Screen name="KnowledgeScreen" component={KnowledgeScreen} />
          <Tab.Screen name="productionScreen" component={productionScreen} />
          <Tab.Screen name="contactScreen" component={contactScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
