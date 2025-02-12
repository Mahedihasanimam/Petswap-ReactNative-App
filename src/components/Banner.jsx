import { View, Text, Image, ImageBackground, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'
import { useNavigation } from '@react-navigation/native'

const Banner = () => {
    const Navigation = useNavigation();
    return (
        <View>
            <ImageBackground source={require('../assets/images/bannerbg.png')} style={tw`h-[170px] w-[100%] mt-[16px] `}>
                <View style={tw` p-[20px] flex flex-row `}>
                    <View style={tw`flex flex-row items-center w-[50%] `}>
                        <Image source={require('../assets/images/bannerimg.png')} style={tw` `} />
                    </View>
                    <View style={tw`flex-1 `}>
                        <Text style={tw`text-[#FFFFFF] text-[20px] font-[500] font-semibold `}>New!</Text>
                        <Text style={tw`text-[#FFFFFF] text-[12px] font-[500] font-semibold `}>Discover the Best for Your Furry Friends.</Text>

                        <View style={tw`flex flex-row items-center gap-2 mt-2 text-[#272727] `}>

                            <TouchableOpacity onPress={()=>Navigation.navigate('shopnow')} style={tw`bg-white px-4 py-2 rounded-2xl  `}>
                                <Text style={tw`text-[#272727] text-[12px] font-[700] font-bold `}>
                                    Shop Now
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

            </ImageBackground>
        </View>
    )
}

export default Banner