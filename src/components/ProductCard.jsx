import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { hurtIcon, verified } from '../assets/icons/Icons'

const ProductCard = () => {
    return (
        <View style={tw`bg-[#E6ECEC4D] w-full rounded-[10px] p-[10px] cursor-pointer `}>


            <Image style={tw` bg-[#82A0A21A]  rounded-lg flex-1 w-full  `} source={require('../assets/images/product.png')} />

            <View style={tw`flex flex-row justify-between items-center mt-2`}>
                <Text style={tw`text-[#000000] text-[14px] font-[700] font-semibold`}>
                    Dog Food
                </Text>
                <SvgXml xml={hurtIcon} />
            </View>
            <View style={tw`flex flex-row justify-between items-center pt-[5px]`}>
                <Text style={tw`text-[#000000] text-[10px] font-[400] font-semibold`}>
                    Condition
                </Text>
                <Text style={tw`text-[#064145] text-[10px] font-[400] font-semibold`}>Good</Text>


            </View>
            <View style={tw`flex flex-row justify-between items-center pt-[5px]`}>
                <Text style={tw`text-[#272727] text-[12px] font-[400] font-semibold`}>
                    $35.00
                </Text>
                <View style={tw`flex flex-row items-center gap-1`}> <Text style={tw`text-[#272727] text-[12px] font-[700] font-semibold`}>$50.00</Text> <SvgXml xml={verified} /> </View>


            </View>



        </View>
    )
}

export default ProductCard