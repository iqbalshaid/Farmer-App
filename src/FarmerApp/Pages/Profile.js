import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { View,Text,Image,ScrollView } from "react-native";
import { useDispatch,useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getImage } from "../Reduxs/Action/SingleImage";
import { getSingleProfile } from "../Reduxs/Action/Profile";
import { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const Profile = async ()=>{
    const dispatch = useDispatch();
    const {single} = useSelector((state)=>state.Profile);
    const {imgs} = useSelector((state)=>state.Single);
    const ids = await AsyncStorage.getItem("login");
    const navigation = useNavigation();
    useEffect(()=>{
        dispatch(getImage(ids));
        dispatch(getSingleProfile(ids));
    },[dispatch,ids]);
    useLayoutEffect(() => {
       
        navigation.setOptions({
           
            headerTitle:"Your Profile",
                headerStyle:{
                    backgroundColor:"white",
                    
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
        <LinearGradient colors={["#bde0fe","#dad7cd"]} style = {{flex:1}}>
        <View style = {{marginVertical:10,alignSelf:"center"}}>
            <Image source={{uri:imgs.name}} style = {{ marginHorizontal: 5,
  marginVertical: 5,
  width: 100,
  height: 100,
  borderRadius: 100,
  borderWidth: 2,
  borderColor: "red",}}/>
 

        </View>
    <ScrollView style = {{marginTop:15}}>
    <View style = {{padding:10}} key={index}>
        
        <View style = {{marginVertical:10}}>
            <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>Name:-{single.Name} </Text>
            
        </View>
        <View  style = {{marginVertical:10}}>
            <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>Mobile No.:{single.Mobile}</Text>
        </View>
        <View style = {{marginVertical:10}}>
            <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>Location:-{single.location}</Text>
        </View>
        <View  style = {{marginVertical:10}}>
            <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>City:-{single.city}</Text>
        </View>
        <View style = {{marginVertical:10}}>
            <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>State:-{single.state}</Text>

        </View>
        <View  style = {{marginVertical:10}}>
            <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>PinCode:-{item.pincode}</Text>
        </View>
        
       
        
   
    </View>
    
  </ScrollView>
  </LinearGradient>

    )
}
export default Profile;