import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { hamburger, IconNotification } from '../assets/icons/Icons'

const Navbar = () => {
    return (
        <View style={tw`py-[24px] px-[16px]`}>
            <View></View>
            <View style={tw`flex flex-row justify-between items-center`}>
                <View style={tw`flex flex-row items-center gap-2`}>
                    <SvgXml xml={hamburger} />
                    <View>
                        <Text style={tw`text-[#272727] text-[16px] font-[500] font-semibold `}>Hi, Jenifer</Text>
                        <Text style={tw`text-[#A8A8A8] text-[12px] font-[500] font-semibold `}>Los Angles, USA</Text>
                    </View>
                </View>
                <View style={tw` flex flex-row items-center gap-2`}>
                <SvgXml xml={IconNotification} />
                    <Image source={require('../assets/images/Cat-drees.png')} style={tw`h-[34px] w-[34px] rounded-full bg-gray-400 mx-auto`} />
                </View>
            </View>
        </View>
    )
}

export default Navbar