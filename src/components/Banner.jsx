import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import tw from '../lib/tailwind';

const Banner = () => {
  const Navigation = useNavigation();

  return (
    <View style={tw`mt-[16px] h-[170px] w-[100%]`}>
      <Swiper
        autoplay
        autoplayTimeout={3}
        showsPagination={true}
        dotStyle={tw`bg-white w-[8px] h-[8px] rounded-full`}
        activeDotStyle={tw`bg-[#064145] w-[8px] h-[8px] rounded-full`}
      >
        {/* Slide 1 */}
        <View>
          <ImageBackground
            source={require('../assets/images/bannerbg.png')}
            style={tw`h-[170px] w-[100%]`}
          >
            <View style={tw`p-[20px] flex flex-row`}>
              <View style={tw`flex flex-row items-center w-[50%]`}>
                <Image
                  source={require('../assets/images/bannerimg.png')}
                  style={tw``}
                />
              </View>
              <View style={tw`flex-1`}>
                <Text style={tw`text-[#FFFFFF] text-[20px] font-semibold`}>
                  New!
                </Text>
                <Text style={tw`text-[#FFFFFF] text-[12px]`}>
                  Discover the Best for Your Furry Friends.
                </Text>
                <View style={tw`flex flex-row items-center gap-2 mt-2`}>
                  <TouchableOpacity
                    onPress={() => Navigation.navigate('shopnow')}
                    style={tw`bg-white px-4 py-2 rounded-2xl`}
                  >
                    <Text style={tw`text-[#272727] text-[12px] font-bold`}>
                      Shop Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Slide 2 */}
        <View>
          <ImageBackground
            source={require('../assets/images/bannerbg.png')}
            style={tw`h-[170px] w-[100%]`}
          >
            <View style={tw`p-[20px] flex flex-row`}>
              <View style={tw`flex flex-row items-center w-[50%]`}>
                <Image
                  source={require('../assets/images/bannerimg.png')}
                  style={tw``}
                />
              </View>
              <View style={tw`flex-1`}>
                <Text style={tw`text-[#FFFFFF] text-[20px] font-semibold`}>
                  New!
                </Text>
                <Text style={tw`text-[#FFFFFF] text-[12px]`}>
                  Discover the Best for Your Furry Friends.
                </Text>
                <View style={tw`flex flex-row items-center gap-2 mt-2`}>
                  <TouchableOpacity
                    onPress={() => Navigation.navigate('shopnow')}
                    style={tw`bg-white px-4 py-2 rounded-2xl`}
                  >
                    <Text style={tw`text-[#272727] text-[12px] font-bold`}>
                      Shop Now
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Swiper>
    </View>
  );
};

export default Banner;
