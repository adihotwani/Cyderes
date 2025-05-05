import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import ProductDetails from './src/screens/ProductDetails';
import { StatusBar } from 'react-native';

const stack = createNativeStackNavigator();
function App(){
  useEffect(()=>{
    GoogleSignin.configure({
      webClientId: '404586675449-01mc20clc93777e428pf0v9g8vfc2c5v.apps.googleusercontent.com',
      offlineAccess: true,
      forceCodeForRefreshToken: true
    })
  },[])
  return(
    <Provider store={store}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        translucent={false}
      />
      <NavigationContainer>
        <stack.Navigator screenOptions={{}}>
          <stack.Screen name='Login' component={Login} />
          <stack.Screen name='Home' component={Home} />
          <stack.Screen name='ProductDetails' component={ProductDetails} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}

export default App;
