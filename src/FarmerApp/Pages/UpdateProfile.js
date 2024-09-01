import React, { useEffect, useState } from "react";
import { View,Text,TouchableOpacity,ScrollView,TextInput,Button,FlatList,StyleSheet, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import UpdateCrop from "../Components/BottomView";
import { useSelector,useDispatch } from "react-redux";
import { getProfile } from "../Reduxs/Action/Profile";
import { getImage } from "../Reduxs/Action/SingleImage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign"
import { useLayoutEffect } from "react";
const UpdateProfile = async ()=>{
    const [modelVisible,setModalVisible] = useState(false);
    const [profileId,setProfileId] = useState();
    const dispatch = useDispatch();
    const {products} = useSelector((state)=>state.Profile);
    const {imgs} = useSelector((state)=>state.Single);
    const press = (item)=>{
        setProfileId(item)
        setModalVisible(true);
       
    }
    const ids = await AsyncStorage.getItem("login");
    useEffect(()=>{
        dispatch(getImage(ids));
        dispatch(getProfile());
    },[dispatch,ids]);
    const navigation = useNavigation();
    useLayoutEffect(() => {
       
        navigation.setOptions({
           
            headerTitle:"UpdateCropDetail",
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
        {products.map((item,index)=>(
        <View style = {{padding:10}} key={index}>
            
            <View style = {{marginVertical:10}}>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>Name:-{item.Name} </Text>
                
            </View>
            <View  style = {{marginVertical:10}}>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>Mobile No.:-{item.Mobile}</Text>
            </View>
            <View style = {{marginVertical:10}}>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>Location:-{item.location}</Text>
            </View>
            <View  style = {{marginVertical:10}}>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>City:-{item.city}</Text>
            </View>
            <View style = {{marginVertical:10}}>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>State:-{item.state}</Text>

            </View>
            <View  style = {{marginVertical:10}}>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>PinCode:-{item.pincode}</Text>
            </View>
            <View>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>Crop Name:-{item.cropName}</Text>
                
            </View>
            <View  style = {{marginVertical:10}}>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>Date:-{item.date}</Text>
                
            </View>
            <View  style = {{marginVertical:10}}>
            <FlatList
                data={item.img}
                numColumns={4} // Display 4 images per row
                contentContainerStyle={styles.grid}
            />
            </View>

            <TouchableOpacity  style = {{backgroundColor:"#FFC72C",padding:10,borderRadius:6,justifyContent:"center",alignItems:"center",marginTop:20}}>
        <Text style = {{fontWeight:"bold"}} onPress={()=>press(item)}>Update Product</Text>
        {modelVisible && (
            <UpdateCrop modalVisible={modelVisible} setModalVisible={setModalVisible} Id = {profileId}/>
        )}
       </TouchableOpacity>
       
       <View style={{width: "95%", height: 1, marginHorizontal: 10, marginVertical: 5, backgroundColor: "grey"}}></View>
       
        </View>
        ))}
      </ScrollView>
      </LinearGradient>

    )
};
const styles = StyleSheet.create({
    grid: {
        marginTop: 20,
    },
    
});

export default UpdateProfile;