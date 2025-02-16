import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import App from '../../App';
import ShopingPage from '../pages/ShopingPage';
import Profile from '../pages/HomePage';
import Recomendation from '../components/Recomendation';
import BottomRoutes from './bottomRoutes';

const AppRoutes = () => {
  const Stack = createNativeStackNavigator();

  return (

  
          <NavigationContainer>
            <Stack.Navigator  screenOptions={{headerShown:false}}>
            <Stack.Screen name="BottomRoutes" component={BottomRoutes} />
              {/* <Stack.Screen name="BottomRoutes" component={BottomRoutes} /> */}
              <Stack.Screen name="Home" component={App}/>
              <Stack.Screen  name='shopnow' component={ShopingPage} />
              <Stack.Screen name='profile' component={Profile} />
              <Stack.Screen name='allrecomendation' component={Recomendation} />
             
            </Stack.Navigator> 
          </NavigationContainer>
      

  );
};

export default AppRoutes;