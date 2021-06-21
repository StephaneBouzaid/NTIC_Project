import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {StyleSheet, View, Text, TouchableOpacity, ImageBackground, FlatList, Image} from "react-native";
import HomeScreen from "../Components/HomeScreen";
import Favorites from "../Components/Favorites";
import Settings from "../Components/Settings";
import Navigation from "./Navigation";
import {NavigationContainer} from "@react-navigation/native";

const Tab = createBottomTabNavigator()

const Tabs = () => {
            return(
                <Tab.Navigator
                    tabBarOptions={{
                        showLabel: false,
                        style: {
                            position: 'absolute',
                            bottom: 10,
                            left: 20,
                            right: 20,
                            backgroundColor: '#2a9d8F',
                            borderRadius: 60,
                            borderWidth: 1,
                            borderColor: '#FFFFFF',
                            height: 90,
                            ...styles.shadow
                        }
                    }}>
                    <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                            tabBarIcon: ({focused}) => (
                                <View style={{alignItems: 'center', justifyContent:'center', width: 100}}>
                                    <Image
                                        source={require('../Images/HomeIcon.png')}
                                        resizeMode='contain'
                                        style={{
                                            width: 55,
                                            height: 55,
                                            tintColor: focused ? '#F0B0D6' : '#5e5e5e',
                                        }}
                                    />
                                    <Text style={{color: focused ? '#F0B0D6' : '#5e5e5e', fontSize: 18}}>
                                        ACCUEIL
                                    </Text>
                                </View>
                            )
                        }}
                    />
                    <Tab.Screen name="Favoris"
                                component={Favorites}
                                options={{
                                    tabBarIcon: ({focused}) => (
                                        <View style={{alignItems: 'center', justifyContent:'center', width: 100}}>
                                            <Image
                                                source={require('../Images/FavIcon2.png')}
                                                resizeMode='contain'
                                                style={{
                                                    width: 55,
                                                    height: 55,
                                                    tintColor: focused ? '#F0B0D6' : '#5e5e5e',
                                                }}
                                            />
                                            <Text style={{color: focused ? '#F0B0D6' : '#5e5e5e', fontSize: 18}}>
                                                FAVORIS
                                            </Text>
                                        </View>
                                    )
                                }}/>
                    <Tab.Screen name="Réglages"
                                component={Settings}
                                options={{
                                    tabBarIcon: ({focused}) => (
                                        <View style={{alignItems: 'center', justifyContent:'center', width: 100}}>
                                            <Image
                                                source={require('../Images/Settings.png')}
                                                resizeMode='contain'
                                                style={{
                                                    width: 55,
                                                    height: 55,
                                                    tintColor: focused ? '#F0B0D6' : '#5e5e5e',
                                                }}
                                            />
                                            <Text style={{color: focused ? '#F0B0D6' : '#5e5e5e', fontSize: 18}}>
                                                REGLAGES
                                            </Text>
                                        </View>
                                    )
                                }}
                    />
                </Tab.Navigator>
            )
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#ffffff',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 10
    }
})

export default Tabs;