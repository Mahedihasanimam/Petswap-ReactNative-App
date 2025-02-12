import { View, Text } from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'

const Footer = () => {
  return (
    <View style={tw`h-[50px] bg-[#064145] items-center justify-center abs`}>
      <Text style={tw`text-white`}>Footer</Text>
    </View>
  )
}

export default Footer
