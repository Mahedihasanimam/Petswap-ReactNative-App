import { View, Text, Image, TouchableOpacity, Animated, Switch, Dimensions } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import tw from '../lib/tailwind'
import { SvgXml } from 'react-native-svg'
import { hamburger, closeIcon } from '../assets/icons/Icons'

const menuItems = [
    { id: 1, name: 'My orders' },
    { id: 2, name: 'Sell orders' },
    { id: 3, name: 'Vacation mode', switch: true },
    { id: 4, name: 'FAQ' },
    { id: 5, name: 'Terms & conditions' },
    { id: 6, name: 'Legal notes' },
    { id: 7, name: 'Our platform' },
    { id: 8, name: 'Help center' }
]

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false); // For Vacation Mode Switch
    const slideAnim = useRef(new Animated.Value(-250)).current; // Initial Position Off-Screen

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    useEffect(() => {
        Animated.timing(slideAnim, {
            toValue: isMenuOpen ? 0 : -260, // 0: Visible, -250: Hidden
            duration: 300,
            useNativeDriver: true
        }).start();
    }, [isMenuOpen]);

    return (
        <View style={tw`py-[24px] px-[16px] relative`}>
            <View style={tw`flex flex-row justify-between items-center z-10`}>
                <View style={tw`flex flex-row items-center gap-2`}>
                    {/* HAMBURGER OR CLOSE ICON */}
                    <TouchableOpacity onPress={toggleMenu}>
                        <SvgXml xml={hamburger} />
                    </TouchableOpacity>
                    <View>
                        <Text style={tw`text-[#272727] text-[16px] font-[500] font-semibold`}>Hi, Jenifer</Text>
                        <Text style={tw`text-[#A8A8A8] text-[12px] font-[500] font-semibold`}>Los Angles, USA</Text>
                    </View>
                </View>
                <View style={tw`flex flex-row items-center gap-2`}>
                    <Image source={require('../assets/images/Cat-drees.png')} style={tw`h-[34px] w-[34px] rounded-full bg-gray-400 mx-auto`} />
                </View>
            </View>

            {/* BACKDROP OVERLAY */}
            {isMenuOpen && (
                <TouchableOpacity onPress={toggleMenu}>
                    <SvgXml xml={closeIcon} />
                </TouchableOpacity>
            )}

            {/* SIDEBAR MENU WITH ANIMATION */}
            <Animated.View style={[tw`w-[250px] bg-white text-black mt-0 z-30 shadow-lg p-4 absolute top-0 left-0`,
            { transform: [{ translateX: slideAnim }] }
            ]}>

                <TouchableOpacity style={tw`mb-2`} onPress={toggleMenu}>
                    <SvgXml xml={isMenuOpen ? closeIcon : hamburger} />
                </TouchableOpacity>
                {/* SIDEBAR HEADER */}

                <View style={tw``}>

                {/* MENU ITEMS */}
                <View style={tw``}>
                    <Text style={tw`text-[#0C4A6E] text-[20px] font-bold mb-6`}>Petswap</Text>
                    {menuItems.map(item => (
                        <View key={item.id} style={tw`flex flex-row justify-between items-center mb-4`}>
                            <Text style={tw`text-[#272727] text-[14px]`}>{item.name}</Text>
                            {item.switch && (
                                <Switch
                                    trackColor={{ false: "#767577", true: "#0C4A6E" }}
                                    thumbColor={isEnabled ? "#fff" : "#fff"}
                                    ios_backgroundColor="#3e3e3e"
                                    onValueChange={toggleSwitch}
                                    value={isEnabled}
                                />
                            )}
                        </View>
                    ))}
                </View>

                {/* LOGOUT AT THE BOTTOM */}
                <View style={tw`mt-[350px]`}>
                    <TouchableOpacity>
                        <Text style={tw`text-[#272727] text-[14px]`}>Log out</Text>
                    </TouchableOpacity>
                </View>
                </View>
            </Animated.View>
        </View>
    )
}

export default Navbar;
