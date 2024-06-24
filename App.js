import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './screens/HomeScreen.jsx'
import { DetailsScreen } from './screens/DetailScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { UsersScreen } from './screens/UsersScreen.jsx';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name='Users' component={UsersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
