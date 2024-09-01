import React from "react";
import { View,Text,Image,ImageBackground,TouchableOpacity,Linking,StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
const StateDescription = ({name,maps,img,sector})=>{
    const route = useRoute();
    const openWebsite = (url) => {
        Linking.openURL(url).catch(err => console.error('An error occurred', err));
    };
  return (
    <ImageBackground style = {{flex:1,overflow:"hidden",}} source={{uri:route?.params?.maps}}>
    <ScrollView vertical = {true} showsVerticalScrollIndicator = {false} style = {{ ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        
        <Image source={{uri:route?.params?.img}} style = {{width:130,height:100,borderRadius:100,alignSelf:"center",marginVertical:10}} />
        <Text style = {{fontSize:16,fontWeight:"600",color:"#ffc300",marginVertical:5,textAlign:"center"}}>{route?.params?.name}</Text>
        <View style = {{marginHorizontal:15,marginVertical:12,flexDirection:"column"}}>
        {route?.params?.sector?.length > 0 ? (
    route.params.sector.map((ele, index) => (
        <View key={index}>
            <Text style = {{marginVertical:5,textAlign:"center",color:"white",fontSize:18,fontWeight:"700"}}>{ele.YojanaName}</Text>
            <TouchableOpacity style = {{marginHorizontal:10,marginVertical:5,overflow:"hidden"}} onPress={()=>openWebsite(ele.links)}>
                <Text style = {{fontSize:14,fontWeight:"400",color:"blue"}}>{ele.links}</Text>
            </TouchableOpacity>
            
            
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
export default StateDescription;