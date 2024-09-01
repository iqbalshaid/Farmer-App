import React, { useEffect } from "react";
import { View, Text, ScrollView, Pressable,Platform } from 'react-native';
import { BottomModal, ModalContent, SlideAnimation } from 'react-native-modals';
import { useDispatch,useSelector } from "react-redux";
import { getImage } from "../Reduxs/Action/SingleImage";
import { putProfile } from "../Reduxs/Action/Profile";
import { Image } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const UpdateCrop = async ({modalVisible,setModalVisible,Id})=>{
    const dispatch = useDispatch();
    const {imgs} = useSelector((state)=>state.Single);
    const {single} = useSelector((state)=>state.Profile);
    const [Name,setName] = useState(Id.Name);
    const [Mobile,setMobile] = useState(Id.Mobile);
    const [location,setLocation] = useState(Id.location);
    const [city,setCity] = useState(Id.city);
    const [state,setState] = useState(Id.state);
    const [pincode,setPincode] = useState(Id.pincode);
    const [cropName,setCropName] = useState(Id.cropName);
    const [img,setImg] = useState([Id.img]);
    const idf = await AsyncStorage.getItem("login");
    useEffect(()=>{
        dispatch(getImage(idf));
    },[dispatch,idf]);
    const removeImage = (index) => {
        const updatedImages = img.filter((_, i) => i !== index);
        setImg(updatedImages);
      };
    const renderItem = ({ item, index }) => (
        <View style={styles.imageContainer}>
            <Image source={{ uri: item }} style={styles.image} />
            <Entypo
                          name="circle-with-cross"
                          size={24}
                          color="black"
                          style={styles.deleteButton}
                          onPress={() => removeImage(index)}
                      /> 
            
        </View>
    );
    const formData = new FormData();
    const submit = async () => {
        try {
          // Assume you've already selected images and stored them in `img`
          const result = await DocumentPicker.pickMultiple({
            type: [DocumentPicker.types.images],
          });
          setImg(result);
        } catch (err) {
          if (DocumentPicker.isCancel(err)) {
            console.log('Document picking cancelled');
          } else {
            console.error('Error picking document:', err);
          }
        }
    
        // Create a new FormData object
        
        
        // Append text fields to the FormData
       
        // Append each image in the img array to the FormData
        img.forEach((imag, index) => {
          formData.append(`image[${index}]`, {
            uri: imag.uri,
            name: imag.name,
            type: imag.type,
          });
        });
    }
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);
    };
    formData.append('name', Name);
    formData.append('mobile', Mobile);
    formData.append('location', location);
    formData.append('city', city);
    formData.append('state', state);
    formData.append('pincode', pincode);
    formData.append('cropName', cropName);
    const showDatePicker = () => {
        setShow(true);
    };
    const AddSubmit = ()=>{
        dispatch(putProfile(Id._id,formData));
        if(single){
            Alert.alert("Your product Updated successfully");
            navigation.navigate("home");
        }
        else{
            Alert.alert("your product is not added successfully");
        }
    }
    
    return (
        <BottomModal
      onBackdropPress={() => setModalVisible(false)}
      swipeDirection={["up", "down"]}
      swipeThreshold={200}
      modalAnimation={
        new SlideAnimation({
          slideFrom: "bottom",
        })
      }
      onHardwareBackPress={() => setModalVisible(false)}
      visible={modalVisible}
      onTouchOutside={() => setModalVisible(false)}
    >
          <ModalContent style={{ width: "100%", height: 400 }}>
          <View style = {{marginVertical:10,alignSelf:"center",position:"relative"}}>
                <Image source={{uri:imgs.name}} style = {{ marginHorizontal: 5,
      marginVertical: 5,
      width: 100,
      height: 100,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: "red",}}/>
      <AntDesign  name = {"camera"} size = {24} style = {{ position: 'absolute',
        bottom: 5,
        right: 5, 
        backgroundColor: 'white', 
        borderRadius: 12, }}/>

            </View>
            <ScrollView style = {{marginTop:15}}>
            <View style = {{padding:10}}>
            
            <View style = {{marginVertical:10}}>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>Full Name</Text>
                <TextInput  placeholderTextColor = "black" placeholder="Enter Your Name" value={Name} onChangeText={(text)=>setName(text)} style = {{padding:10,borderColor:"#D0D0D0",borderWidth:1,marginTop:10,borderRadius:5}}/>
            </View>
            <View>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>Mobile No.</Text>
                <TextInput  placeholderTextColor = "black" placeholder="Enter Your Mobile No." value={Mobile} onChangeText={(text)=>setMobile(text)}  style = {{padding:10,borderColor:"#D0D0D0",borderWidth:1,marginTop:10,borderRadius:5}}/>
            </View>
            <View style = {{marginVertical:10}}>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>Location</Text>
                <TextInput  placeholderTextColor = "black" placeholder="Enter Your Location" value={location} onChangeText={(text)=>setLocation(text)}  style = {{padding:10,borderColor:"#D0D0D0",borderWidth:1,marginTop:10,borderRadius:5}}/>
            </View>
            <View>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>City</Text>
                <TextInput  placeholderTextColor = "black" placeholder="Enter Your District" value={city} onChangeText={(text)=>setCity(text)}  style = {{padding:10,borderColor:"#D0D0D0",borderWidth:1,marginTop:10,borderRadius:5}}/>
            </View>
            <View style = {{marginVertical:10}}>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>State</Text>
                <TextInput  placeholderTextColor = "black" placeholder="Enter Your State" value={state} onChangeText={(text)=>setState(text)} style = {{padding:10,borderColor:"#D0D0D0",borderWidth:1,marginTop:10,borderRadius:5}}/>
            </View>
            <View>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>PinCode</Text>
                <TextInput  placeholderTextColor = "black" placeholder="Enter Your PinCode" value={pincode} onChangeText={(text)=>setPincode(text)} style = {{padding:10,borderColor:"#D0D0D0",borderWidth:1,marginTop:10,borderRadius:5}}/>
            </View>
            <View>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>Crop Name</Text>
                <TextInput  placeholderTextColor = "black" placeholder="Enter Your Crop Name" value={cropName} onChangeText={(text)=>setCropName(text)} style = {{padding:10,borderColor:"#D0D0D0",borderWidth:1,marginTop:10,borderRadius:5}}/>
            </View>
            <View>
            <Button title="Pick an image"  />
            <FlatList
                data={img}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={4} // Display 4 images per row
                contentContainerStyle={styles.grid}
            />
            </View>
            <View style={{ marginTop: 20 }}>
                <Button onPress={showDatePicker} title="Select Date" />
            </View>
            {show && (
                <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onChange}
                    onTouchCancel={() => setShow(false)}
                />
            )}
            <Text style={{ marginTop: 10, fontSize: 15 }}>Selected Date: {date.toDateString()}</Text>

       <TouchableOpacity  style = {{backgroundColor:"#FFC72C",padding:10,borderRadius:6,justifyContent:"center",alignItems:"center",marginTop:20}} onPress = {()=>AddSubmit()}>
        <Text style = {{fontWeight:"bold"}}>Update Product</Text>
       </TouchableOpacity>
       
       
       
        </View>
            </ScrollView>
          </ModalContent>

    </BottomModal>

    )
};
export default UpdateCrop;