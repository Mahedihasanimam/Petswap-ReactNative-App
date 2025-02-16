import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import tw from '../lib/tailwind';
import App from '../../App';
import Chatings from '../pages/Chatings';
import Inspaction from '../pages/Inspaction';

import {
  ticketicon,
  ticketinactivicon,
  activechaticon,
  inactivechaticon,
  ActiveInspaction,
  InacInspaction,
  profileIcon
} from '../assets/icons/Icons';
import HomePage from '../pages/HomePage';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarButton: (props) => <TouchableOpacity {...props} />,
        tabBarStyle: {
          height: 70,  
          paddingVertical: 10, 
          backgroundColor: '#fff', 
          borderTopWidth: 0,
          elevation: 10, 
        },
        tabBarIcon: ({ focused }) => {
          let icon;
          switch (route.name) {
            case 'Tickets':
              icon = focused ? ticketicon : ticketinactivicon;
              break;
            case 'Chats':
              icon = focused ? activechaticon : inactivechaticon;
              break;
            case 'InspectionSheets':
              icon = focused ? ActiveInspaction : InacInspaction;
              break;
            case 'Profile':
              icon = profileIcon;
              break;
          }

          return (
            <View style={tw`items-center`}>
              <SvgXml xml={icon} />
            </View>
          );
        },
        tabBarLabel: ({ focused }) => {
          let label;
          switch (route.name) {
            case 'Tickets':
              label = 'Tickets';
              break;
            case 'Chats':
              label = 'Chats';
              break;
            case 'InspectionSheets':
              label = 'Inspection';
              break;
            case 'Profile':
              label = 'Profile';
              break;
          }

          return (
            <Text
              style={tw.style(
                'text-xs mt-1',
                focused ? 'text-[#ED1C24] font-bold' : 'text-gray-500'
              )}
            >
              {label}
            </Text>
          );
        },
      })}
    >
      <Tab.Screen name="Tickets" component={App} />
      <Tab.Screen name="Chats" component={Chatings} />
      <Tab.Screen name="InspectionSheets" component={Inspaction} />
      <Tab.Screen name="Profile" component={HomePage} />
    </Tab.Navigator>
  );
}
