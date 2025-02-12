import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native'
import React from 'react'
import tw from './src/lib/tailwind'
import Navbar from './src/components/Navbar'
import { SvgXml } from 'react-native-svg'
import { search } from './src/assets/icons/Icons'
import Banner from './src/components/Banner'
import Recomendation from './src/components/Recomendation'
import Footer from './src/components/Footer'


const App = () => {
  return (

    <View style={tw`h-screen bg-[#FAFFFF] p-2`}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <Navbar />

        {/* search bar */}
        <View style={tw`flex flex-row items-center w-full h-[50px] bg-[#E6ECEC4D] rounded-full p-[10px] `}>
          <SvgXml xml={search} />
          <TextInput style={tw`text-gray-600 text-xs p-2 font-semibold rounded-full flex-1  `} placeholder='Search' />
        </View>

        {/* banner section ----- */}
        <Banner />

        {/* Recomendation section ---------- */}
        <Recomendation />

        <Footer />
      </ScrollView>

    </View>
  )
}

export default App