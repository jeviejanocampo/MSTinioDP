import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Portal from './src/portal/portal';
import Login from './src/portal/login';
import ViewDetails from './src/portal/home/section/orders-section/view-details';
import Home from './src/portal/home/home';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Portal">
        <Stack.Screen name="Portal"  component={Portal}  options={{ headerShown: false }} />
        <Stack.Screen name="Login"  component={Login}  options={{ headerShown: false }} />
        <Stack.Screen name="Home"  component={Home}  options={{ headerShown: false }} />
        <Stack.Screen name="ViewDetails"  component={ViewDetails}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
