import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../containers/HomeScreen';
import {DetailScreen} from '../containers/DetailScreen';
import {Movie} from '../interfaces/IMovie';

export type RootStackParams = {
  Home: undefined;
  Detail: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};
