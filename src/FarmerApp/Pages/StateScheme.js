import React, { useState,useEffect } from "react";
import { Image, View ,Text, ActivityIndicator} from "react-native";
import { Pressable, ScrollView } from "react-native-gesture-handler";
import AntDesign from "react-native-vector-icons/AntDesign"
import Rename from "../Data/Rename";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
const StateSchema = ()=>{
    const [stat,setStat] = useState(Rename);
    const navigation = useNavigation();
    useLayoutEffect(() => {
       
        navigation.setOptions({
           
            headerTitle:"govt. Schemes",
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
         <LinearGradient colors={["#90e0ef","#d62828"]} style = {{flex:1}}>
            
            <ScrollView vertical = {true} showsVerticalScrollIndicator = {false}>
                {stat?.map((ele,index)=>(
                <View style = {{borderRadius:10,borderColor:"#dad7cd",borderWidth:2,marginHorizontal:10,marginVertical:10,width:"95%",height:"auto"}} key={index}>        
                    <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5}}>
            <View style = {{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:15,marginHorizontal:10,marginVertical:10}}>
             
                <Image source={{uri:ele.img}}  style = {{marginHorizontal:5,marginVertical:5,width:100,height:100,borderRadius:100}}/>
             <Text style = {{fontSize:14,fontWeight:"600",color:"black",marginHorizontal:5,marginVertical:5}}>{ele.name}</Text>
             
                
                
               </View>
               
                <AntDesign onPress = {()=>{
                    navigation.navigate("Sdescription",{
                        name:ele.name,
                        maps:ele.maps,
                        img:ele.img,
                        sector:ele.sector
    
                    })
                }} name = {"right"} size = {24} color = {"#6c584c"} style = {{marginHorizontal:10,marginVertical:5}}/>
                
                </View>
                </View>
                ))}
            </ScrollView>
            </LinearGradient>
    )

}
export default StateSchema;