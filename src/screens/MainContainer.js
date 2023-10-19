import React from 'react'
import { View, Button, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons' 

import HomeScreen from './navigation/HomeScreen';
import AnswersScreen from './navigation/AnswersScreen';
import ScannerScreen from './navigation/ScannerScreen';
import SettingsScreen from './navigation/SettingScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createBottomTabNavigator();
const TTab = createMaterialTopTabNavigator();

const MainContainer = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Answers') {
                iconName = focused ? 'menu' : 'menu';
              } else if (route.name === "Scanner") {
                iconName = focused ? 'camera' : 'camera-outline'
              }
  
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{headerTitleAlign: 'left'}} />
          <Tab.Screen name="Scanner" component={ScannerScreen} options={{headerTitleAlign: 'left'}} />
          <Tab.Screen name="Answers" component={AnswersScreen} options={{headerTitleAlign: 'left'}} />
        </Tab.Navigator>
      </NavigationContainer>
    )
}

const ScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%'
    }
})

export default MainContainer