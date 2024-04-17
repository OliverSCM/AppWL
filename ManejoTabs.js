import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Usuario from './Usuario';
import usuario1 from './usuario1';
import usuario2 from './usuario2';


export default class MangeTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator>
      <Tab.Screen name="1" component={Usuario}  initialParams ={{varnombre1:this.props.route.params.varnombre}} options={headerShown}/>
      <Tab.Screen name="2" component={Usuario1} initialParams ={{varnombre1:this.props.route.params.varnombre}} options={headerShown}/>
      <Tab.Screen name="3" component={Usuario2} initialParams ={{varnombre1:this.props.route.params.varnombre}} options={headerShown}/>
    </Tab.Navigator>
    );
  }
  }
