import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AntDesign from "react-native-vector-icons/AntDesign"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Fertilizer from "../Pages/Fertilizer";
import Description from "../Pages/Description";
import StateSchema from "../Pages/StateScheme";
import StateDescription from "../Pages/StateDescription";
import Signup from "../Pages/Register";
import Otp from "../Pages/Otp";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import Profile from "../Pages/Profile";
import WeatherApp from "../Pages/Weather";
import News from "../Pages/News";
import SessionCrop from "../Pages/SessionCrop";
const Stack = createStackNavigator();
const Stacks = ()=>{
     
    const Tabs = createBottomTabNavigator();
    function BottomTabs(){
        return (
            <Tabs.Navigator>
                <Tabs.Screen name="home" component={Home}
                    options={{tabBarLabel:"home",
                    tabBarLabelStyle:({focused})=>
                        ({
  color: focused ? "#7209b7" : "grey",
  fontSize:focused? 20:16,
}),
                    headerShown:true,
                    tabBarIcon:({focused}) =>
                        focused?(
                            <View style = {{width:35,height:35,borderRadius:100,backgroundColor:"#7209b7",alignItems:"center"}}>
                            <FontAwesome name="home" size={24} color="white" style = {{marginVertical:4}}/>
                            </View>
                        ):(
                            <View style = {{width:35,height:35,borderRadius:100,backgroundColor:"grey",alignItems:"center"}}>
                            <AntDesign name="home" size={24} color="white" style = {{marginVertical:4}} />
                            </View>
                        )
                    }}
                />
                <Tabs.Screen name="update" component={UpdateProfile}
                    options={{tabBarLabel:"Sell",
                   tabBarLabelStyle:({focused})=>
                        ({
  color: focused ? "#7209b7" : "grey",
  fontSize:focused? 20:16,
}),
                    headerShown:false,
                    tabBarIcon:({focused}) =>
                        focused?(
                            <View style = {{width:35,height:35,borderRadius:100,backgroundColor:"#7209b7",alignItems:"center"}}>
                            <FontAwesome name="rupee" size={24} color="white" style = {{marginVertical:4}}/>
                            </View>
                        ):(
                            <View style = {{width:35,height:35,borderRadius:100,backgroundColor:"grey",alignItems:"center"}}>
                            <FontAwesome name="rupee" size={24} color="white" style = {{marginVertical:4}}/>
                            </View>
                        )
                    }}
                />
                <Tabs.Screen name="profile" component={Profile}
                    options={{tabBarLabel:"Profile",
                    tabBarLabelStyle:({focused})=>
                        ({
  color: focused ? "#7209b7" : "grey",

}),
                    headerShown:false,
                    tabBarIcon:({focused}) =>
                        focused?(
                            <View style = {{width:35,height:35,borderRadius:100,backgroundColor:"#7209b7",alignItems:"center"}}>
                            <AntDesign name="contacts" size={24} color="white" style = {{marginVertical:4}}/>
                            </View>
                        ):(
                            <View style = {{width:35,height:35,borderRadius:100,backgroundColor:"grey",alignItems:"center"}}>
                            <AntDesign name="contacts" size={24} color="white" style = {{marginVertical:4}} />
                            </View>
                        )
                    }}
                />
                
            </Tabs.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="register" component={Signup} options={{headerShown:false}} />
                <Stack.Screen name="otp" component={Otp} options={{headerShown:false}} /> */}
                <Stack.Screen name="main" component={BottomTabs} options={{headerShown:false}}/>
                 <Stack.Screen name = "fertilizer" component = {Fertilizer} options={{ headerShown: true }}  />
                <Stack.Screen name="description" component={Description} options={{ headerShown: false }} /> 
                <Stack.Screen name="schema" component={StateSchema} options={{ headerShown: true }} />
                <Stack.Screen name="Sdescription" component={StateDescription} options={{ headerShown: false }} />
                <Stack.Screen name="weather" component={WeatherApp} options={{headerShown:true}} />
                <Stack.Screen name="news" component={News} options={{headerShown:true}} />
                {/* <Stack.Screen name="searchbuyer" component={Search} options={{headerShown:true}} /> */}
                <Stack.Screen name="sessioncrop" component={SessionCrop} options={{headerShown:true}} />

            </Stack.Navigator>
        </NavigationContainer>

    )
}
export default Stacks;