import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderNavigator } from '../components';
import SessionProvider from '../api/session/context';

import InitScreen from "./menu";
import SignIn from "./signIn";
import HomeScreen from "./home";



const Stack = createNativeStackNavigator();

function App() {
  const  { auth, onLogout } = React.useContext(SessionProvider);
  const newLocal = "bars";
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'> 
      { auth.jwt ? 
          <>
            <Stack.Screen name="Init" component={InitScreen}  options={(options) =>
                HeaderNavigator(
                  () => options.navigation("Setting"),
                  () => onLogout(),
                  'Home',
                  "share-square",
                  `Home`
                )
              }  />
          </> :
          <>
            <Stack.Screen name="Home" component={HomeScreen}  options={{ headerShown: false }}  />
            <Stack.Screen name="SignIn" component={SignIn}  options={{ headerShown: false }}  />
          </> 
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;