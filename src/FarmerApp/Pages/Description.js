import React from "react";
import { Image, ImageBackground, ScrollView, Text, View,StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
const Description = ({name,img,description,check})=>{
    const route = useRoute();
    console.log(route?.params?.check);
  return (
    <ImageBackground style = {{flex:1,overflow:"hidden",}} source={{uri:"https://livingcolorgardencenter.net/wp-content/uploads/2019/01/blue-fertilizer.jpg"}}>
    <ScrollView vertical = {true} showsVerticalScrollIndicator = {false} style = {{ ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(2, 0, 0, 0.5)'}}>
        {route?.params?.check === 1 ?(<Text style = {{textAlign:"center",marginVertical:10,fontSize:18,fontWeight:"600",color:"#d90429",marginVertical:10}}>ORGANIC FERTILIZER</Text>):(
            <Text style = {{textAlign:"center",marginVertical:10,fontSize:18,fontWeight:"600",color:"#d90429",marginVertical:10}}>INORGANIC FERTILIZER</Text>
        )}
        <Image source={{uri:route?.params?.img}} style = {{width:130,height:100,borderRadius:100,alignSelf:"center",marginVertical:10}} />
        <Text style = {{fontSize:16,fontWeight:"600",color:"#ffc300",marginVertical:5,textAlign:"center"}}>{route?.params?.name}</Text>
        <View style = {{marginHorizontal:15,marginVertical:12,flexDirection:"column"}}>
        {route?.params?.description?.length > 0 ? (
    route.params.description.map((ele, index) => (
        <View key={index}>
            <Text style={{fontSize: 14, fontWeight: "500", color: "white", marginVertical: 6}}>
                {ele}
            </Text>
        </View>
    ))
) : (
    <Text>No description available</Text>
)}
        </View>
    </ScrollView>
    </ImageBackground>
  )
}
export default Description;