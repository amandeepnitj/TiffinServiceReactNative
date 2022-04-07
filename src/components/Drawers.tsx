import React, { Component, useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from "react-native";
import HomePage from "../HomePage";
import UserProfile from "./UserProfile";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {LoginPage_1} from "./LoginPage";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";

const Tabs = createBottomTabNavigator();
function Drawers({navigation}){
    //const {username1} =route.params
    return(
        <Tabs.Navigator
        screenOptions={{
            headerShown:false

        }}>
            <Tabs.Screen name="User Profile" component={UserProfile} options={{tabBarIcon:()=>(<AntDesign name="user" size={24} color="black" />)}} />
            <Tabs.Screen name = "Reset Password" component={ResetPassword} options={{tabBarIcon:()=>(<MaterialCommunityIcons name="lock-reset" size={24} color="black" />)}} />
        </Tabs.Navigator>
    )
    

}

export default Drawers;