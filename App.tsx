import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoadingScreen from './Screens/LoadingScreen';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" screenOptions={{ headerShown: false, animation: 'fade_from_bottom' }}>
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;