import { View, TouchableOpacity } from "react-native"
import { SvgXml } from "react-native-svg"
import { Homeicon, items, location, user } from "../assets/icons/Icons"
import tw from "../lib/tailwind"

const Footer = () => {
  return (
    <View style={tw`h-[66px] bg-[#064145] flex-row items-center justify-around absolute bottom-0 left-0 right-0`}>
      <TouchableOpacity style={tw`items-center justify-center`}>
       <SvgXml xml={Homeicon} />
      </TouchableOpacity>

      <TouchableOpacity style={tw`items-center justify-center`}>
      <SvgXml xml={items} />
      </TouchableOpacity>

      <TouchableOpacity style={tw`items-center justify-center`}>
      <SvgXml xml={location} />
      </TouchableOpacity>

      <TouchableOpacity style={tw`items-center justify-center`}>
      <SvgXml xml={user} />
      </TouchableOpacity>
    </View>
  )
}

export default Footer

