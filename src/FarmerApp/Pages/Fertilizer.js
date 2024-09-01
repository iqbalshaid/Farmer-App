import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, Text, TouchableOpacity, View,StyleSheet } from "react-native";
import { InorganicFertilizer, OrganicFertilizer } from "../Data/Fertilizer";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign"
import { useLayoutEffect } from "react";
const Fertilizer = ()=>{
    const [orgfertilizer,setOrgFertilizer] = useState(OrganicFertilizer);
    const [inorgFert,setInorgFert] = useState(InorganicFertilizer);
    const [isUppercase, setIsUppercase] = useState(false);
    const navigation = useNavigation();
    useLayoutEffect(() => {
       
        navigation.setOptions({
           
            headerTitle:"Fertilizer",
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
        <ImageBackground style = {{flex:1}} source={{uri:"https://wallpaperaccess.com/full/137521.jpg"}}>
        <ScrollView vertical={true} showsVerticalScrollIndicator={false}  style = {{ ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0)'}}>
            <Text style = {{textAlign:"center",marginVertical:10,fontSize:18,fontWeight:"600",color:"#d90429"}}>ORGANIC FERTILIZER</Text>
        {orgfertilizer?.map((ele, index) => (
            <View key={index}>
            <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 20, marginHorizontal: 10, marginVertical: 10}} >
                <Image source={{uri: ele.img}} style={{width: 100, height: 70, borderRadius: 10, marginHorizontal: 5}}/>
                <View style={{marginHorizontal: 5}}>
                    <Text style={{marginVertical: 5, fontSize: 16, fontWeight: "600", color: "#03045e"}}>{ele.fertilizerName}</Text>
                   <TouchableOpacity onPress={()=>{
                    setIsUppercase(true);
                    navigation.navigate("description",
                        {
                            name:ele.fertilizerName,
                            img:ele.img,
                            description:ele.description,
                            check:1
                        }
                    );}
                   }
                   
                    ><Text style = {{fontSize:15,fontWeight:"500",color:"blue",textTransform:isUppercase ? 'uppercase' : 'lowercase' }}>See More</Text></TouchableOpacity> 
                </View>
                </View>
                <View style={{width: "95%", height: 1, marginHorizontal: 10, marginVertical: 5, backgroundColor: "grey"}}></View>
                                   </View>
     

        ))}
         <Text style = {{textAlign:"center",marginVertical:10,fontSize:18,fontWeight:"600",color:"#d90429"}}>INORGANIC FERTILIZER</Text>
        {inorgFert?.map((ele, index) => (
            <View key={index}>
            <View style={{flexDirection: "row", justifyContent: "flex-start", alignItems: "center", gap: 20, marginHorizontal: 10, marginVertical: 10}} >
                <Image source={{uri: ele.img}} style={{width: 100, height: 70, borderRadius: 10, marginHorizontal: 5}}/>
                <View style={{marginHorizontal: 5}}>
                    <Text style={{marginVertical: 5, fontSize: 16, fontWeight: "600", color: "#03045e"}}>{ele.fertilizerName}</Text>
                   <TouchableOpacity onPress={()=>{
                    setIsUppercase(true);
                    navigation.navigate("description",
                        {
                            name:ele.fertilizerName,
                            img:ele.img,
                            description:ele.Description,
                            check:0
                        }
                    );}
                   }
                   
                    ><Text style = {{fontSize:15,fontWeight:"500",color:"blue",textTransform:isUppercase ? 'uppercase' : 'lowercase' }}>See More</Text></TouchableOpacity> 
                </View>
                </View>
                <View style={{width: "95%", height: 1, marginHorizontal: 10, marginVertical: 5, backgroundColor: "grey"}}></View>
                                   </View>
     

        ))}
        
    </ScrollView>
    </ImageBackground>
    )
}
export default Fertilizer;