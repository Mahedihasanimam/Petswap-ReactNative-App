/**
 * @format
 */

import React from 'react';
import { AppRegistry, SafeAreaView, StyleSheet } from 'react-native';
import { name as appName } from './app.json';

import tw from './src/lib/tailwind';
import AppRoutes from './src/routes/AppRoutes';


const MainApp = () => (
  <SafeAreaView style={tw`flex-1`}>
    <AppRoutes />
  </SafeAreaView>
);


AppRegistry.registerComponent(appName, () => MainApp);