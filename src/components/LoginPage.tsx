import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
import SignUp from "./SignUp";
import Forgotpassword from "./Forgotpassword";
import UserProfile from "./UserProfile";
import HomePage from "../HomePage";
import Card from "./Card";
import WelcomePage from "./WelcomePage";

const Stack = createNativeStackNavigator();
const LoginPage_1 =({navigation})=> {
 
 
  return (
      
    <SafeAreaView style={styles.container}>
        
      <Text style={styles.AppName}>Hungr</Text>
      <Text style={styles.AppSlogan}>Homely Food Daily!</Text>
      <Image style={styles.image1} source={require("./../../images/james-harris-HYqMhq4gz8c-unsplash.jpg")} />
      <Text style={styles.signin}>Sign In</Text>
      
           
          <View style={styles.textbox}>
              <TextInput
                  style={styles.TextInput}
                  placeholder="Enter email address"
                  placeholderTextColor="black" />
          </View>
         
          <View style={styles.textbox}>
              <TextInput
                  style={styles.TextInput}
                  placeholder="Enter Password"
                  placeholderTextColor="black"
                  secureTextEntry={true} />
          </View>

          <TouchableOpacity onPress={()=>{navigation.navigate("ForgotPassword")}}>
              <Text style={styles.ForgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.lgnBtn} onPress={()=>{navigation.navigate("HomePage")}}>
              <Text style={styles.lgnText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{navigation.navigate("SignUp")}}>
          <Text style = {styles.NewUser}> New User? Sign Up</Text>
          </TouchableOpacity>

          </SafeAreaView>
  );
}

function LoginPage()
{
  return(
    <Stack.Navigator
    initialRouteName="WelcomePage">
        <Stack.Screen name ='Login' component={LoginPage_1} options={{title:"Login"}}/>
        <Stack.Screen name ='SignUp' component={SignUp} options={{title:"Sign Up"}}/>
        <Stack.Screen name ='ForgotPassword' component={Forgotpassword} options={{title:"Forgot Password"}}/>
        <Stack.Screen name ='UserProfile' component={UserProfile} options={{title:"User Profile"}}/>
        <Stack.Screen name ='HomePage' component={HomePage} options={{title:" Home "}}/>
        <Stack.Screen name ='WelcomePage' component={WelcomePage} options={{title:" Welcome "}}/>
        

    </Stack.Navigator>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginLeft:10,
   
  },
  lgnText:{
 textAlign : "justify",
 color: "white"
  },
  image1: {
    marginLeft:10,
    width:350,
    height:260,
    borderRadius: 25,
    // ...Platform.select({
    //     ios: {
    //         shadowColor: 'black',
    //         shadowOffset: { width: 0, height: 2 },
    //         shadowOpacity: 0.8,
    //         shadowRadius: 2    
    //     },
    //     android: {
    //         shadowOffset: {elevation: 10},
    //     }}),
  },
 
  textbox: {
    backgroundColor: "white",
    borderRadius: 30,
    width: "90%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
   
  },
 
  TextInput: {
    height: 80,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    borderColor: 'black',
    borderWidth: 1,
    width: 330,
    borderRadius:25
    
  },
 
  ForgotPassword: {
    height: 30,
    marginBottom: 10,
    color:"green",
    marginLeft:25,
    fontWeight: "bold"
  },
 
  lgnBtn: {
    width: "90%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "green",
    marginLeft:20
  },
  AppName:{
   textAlign: "left",
   textShadowColor: "green",
   fontSize: 40,
    fontWeight: "bold",
  
    color: "green",
    marginLeft: 20
  },
  AppSlogan:{
    marginLeft: 20,
    textAlign: "left",
    textShadowColor: "black",
    fontSize: 20,
     fontWeight: "100",
     
     color: "black",
     marginBottom: 10
   },
   signin:{
    
    textShadowColor: "black",
    fontSize: 25,
     fontWeight: "bold",
     color: "green",
    
     margin:20

   },
   NewUser:{
    color: "green",
    marginTop:10,
    marginLeft:25,
    fontWeight: "bold"
   }
});

export default  LoginPage;