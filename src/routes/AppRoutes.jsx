import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import App from '../../App';
import ShopingPage from '../pages/ShopingPage';

const AppRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (

  
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
              {/* <Stack.Screen name="BottomRoutes" component={BottomRoutes} /> */}
              <Stack.Screen name="Home" component={App}/>
              <Stack.Screen name='shopnow' component={ShopingPage} />
             
            </Stack.Navigator> 
          </NavigationContainer>
      

  );
};

export default AppRoutes;