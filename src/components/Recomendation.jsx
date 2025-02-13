import { View, Text } from 'react-native'
import React from 'react'
import tw from '../lib/tailwind'
import ProductCard from './ProductCard'

const Recomendation = () => {

    const length = 20
    return (
        <View>
            <View style={tw`flex flex-row items-center justify-between p-[10px]`}>
                <Text style={tw`text-[#000000] text-[16px] font-[600] font-semibold`}>
                    Recommended for you
                </Text>
                <Text style={tw`text-[#064145] text-[12px] font-[500] font-semibold`}>
                    Sea all
                </Text>
            </View>

            <View style={tw`flex flex-row flex-wrap justify-between`}>
                {Array.from({ length: 20 }).map((_, index) => (
                    <View key={index} style={tw`w-[48%] mb-6`}>
                        <ProductCard />
                    </View>
                ))}
            </View>


        </View>
    )
}

export default Recomendation