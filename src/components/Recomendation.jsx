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

            <View style={tw`flex flex-row flex-wrap justify-around gap-6`}>
                {
                    Array.from({ length }).map((_, index) => (
                        <ProductCard key={index} />
                    ))
                }

            </View>
        </View>
    )
}

export default Recomendation