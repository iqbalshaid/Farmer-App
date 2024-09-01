import React, { useState } from "react";
import { Image, ScrollView, Text, View,Pressable } from "react-native";
import Session from "../Data/Session";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import AntDesign from "react-native-vector-icons/AntDesign"
const SessionCrop = () => {
    const [sessionData, setSessionData] = useState(Session);
    sessionData.map((ele)=>{
        ele?.States?.map((er)=>{
            console.log(er);
        })
    })
    const navigation = useNavigation();
    useLayoutEffect(() => {
       
        navigation.setOptions({
           
            headerTitle:" SessionCrop",
                headerStyle:{
                    backgroundColor:"#f28482",
                    
                },
                headerTitleStyle:{
                    color:"green",
                    fontSize:20,
                    textShadowRadius:2,textShadowColor:"red",
                    fontWeight:"bold",
                    marginLeft:"35%"
                },
                headerLeft:()=>(
                    <Pressable onPress={()=>navigation.goBack()}>
                     <Text> <AntDesign name="arrowleft" size={24} color="white" style = {{marginHorizontal:10}} /></Text>
                      </Pressable>
                  ),
            headerRight: ()=>null,
          });
        }, [navigation]);
    return (
        <LinearGradient colors={["#95d5b2","#edf2f4"]} style = {{flex:1}}>
            <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
                {sessionData?.map((ele, index) => (
                    <View key={index}>
                    <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 20, marginHorizontal: 10, marginVertical: 10}} >
                        <Image source={{uri: ele.image}} style={{width: 100, height: 70, borderRadius: 10, marginHorizontal: 5}}/>
                        <View style={{marginHorizontal: 5}}>
                            <Text style={{marginVertical: 5, fontSize: 16, fontWeight: "600", color: "#03045e"}}>{ele.CropName}</Text>
                            <View style={{flexDirection: "row", justifyContent: "space-evenly", alignItems: "center",gap:-2, marginVertical: 5}}>
                                <Text style={{fontSize: 12, fontWeight: "400", color: "#0077b6"}}>{ele.StartTime}</Text>
                                <Text style={{fontSize: 12, fontWeight: "400", color: "#0077b6"}}>{ele.EndTime}</Text>
                            </View>
                            <View style={{flexDirection: "column", marginVertical: 5,overflow:"hidden"}}>
                                {ele?.States?.map((elent, idx) => (
                                    <View key={idx} style={{alignItems: "center", justifyContent: "center", borderRadius: 10, padding:5,marginVertical:4, overflow: "hidden",backgroundColor:"#dad7cd"}}>
                                        <Text style={{color: "black", fontSize: 12}}>{elent}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                        </View>
                        <View style={{width: "95%", height: 1, marginHorizontal: 10, marginVertical: 5, backgroundColor: "grey"}}></View>
                                           </View>
             

                ))}
                
            </ScrollView>
            </LinearGradient>
    );
}

export default SessionCrop;
