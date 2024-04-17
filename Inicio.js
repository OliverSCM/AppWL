import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LOGIN from "./Login";
import USUARIO from "./Usuario";
//USUARIO from "./ManejoTabs"
export default class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={LOGIN} />
          <Stack.Screen name="Usuario" component={USUARIO} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
