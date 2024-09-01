import React, { useEffect } from "react";
import { View,Text,TouchableOpacity,ScrollView,TextInput,Button,FlatList,StyleSheet, Image, Alert,Platform } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import DocumentPicker from "react-native-document-picker"
import { PostProfile } from "../Reduxs/Action/Profile";
import { useNavigation } from "@react-navigation/native";
import { PostImage,UpdateImage,getImage } from "../Reduxs/Action/SingleImage";
import AsyncStorage from "@react-native-async-storage/async-storage";
const AddProduct = ()=>{
    const [Name,setName] = useState("");
    const [Mobile,setMobile] = useState("");
    const [location,setLocation] = useState("");
    const [city,setCity] = useState("");
    const [state,setState] = useState("");
    const [pincode,setPincode] = useState("");
    const [cropName,setCropName] = useState("");
    const [img,setImg] = useState([]);
    const [singleimg,setSingleImg] = useState();
    const {products} = useSelector((state)=>state.Profile);
    const {imgs} = useSelector((state)=>state.Single)
    const dispatch = useDispatch();
    const navigation = useNavigation();
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
    const singleDat = new FormData();
    const singlSubmit = async ()=>{
        try {
            // Assume you've already selected images and stored them in `img`
            const result = await DocumentPicker.pickMultiple({
              type: [DocumentPicker.types.images],
            });
            setSingleImg(result);
          } catch (err) {
            if (DocumentPicker.isCancel(err)) {
              console.log('Document picking cancelled');
            } else {
              console.error('Error picking document:', err);
            }
          }
          if (singleimg) {
            singleDat.append('image', {
              uri: singleimg[0].uri,
              name: singleimg[0].name,
              type: singleimg[0].type,
            });
        }
           const count = await AsyncStorage.getItem("img");
           const id = await AsyncStorage.getItem("login");
            if(count==1){
                dispatch(UpdateImage(id,singleDat))
           }
            else{
                dispatch(PostImage(singleDat));
                await AsyncStorage.setItem("img","1");
                
            }
            if(imgs){
                Alert.alert("your image are uploaded successfully");
            }
            else{
                Alert.alert("your image are not uploaded sucessfully");
            }
          
    }
    useEffect(()=>{
         dispatch(getImage(id));

    },[dispatch,id])
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
        dispatch(PostProfile(formData));
        if(products){
            Alert.alert("Your product added successfully");
            navigation.navigate("home");
        }
        else{
            Alert.alert("your product is not added successfully");
        }
    }

    return (
        <LinearGradient colors={["#bde0fe","#dad7cd"]} style = {{flex:1}}>
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
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>Full Name (First and Last Name)</Text>
                <TextInput  placeholderTextColor = "black" placeholder="Enter Your Name" value={Name} onChangeText={(text)=>setName(text)}  style = {{padding:10,borderColor:"#D0D0D0",borderWidth:1,marginTop:10,borderRadius:5}}/>
            </View>
            <View>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>Mobile No.</Text>
                <TextInput  placeholderTextColor = "black" placeholder="Enter Your Mobile No." value={Mobile} onChangeText={(text)=>setMobile(text)}  style = {{padding:10,borderColor:"#D0D0D0",borderWidth:1,marginTop:10,borderRadius:5}}/>
            </View>
            <View style = {{marginVertical:10}}>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>Location</Text>
                <TextInput  placeholderTextColor = "black" placeholder="Enter Your Location" value={location} onChangeText={(text)=>setLocation(text)}    style = {{padding:10,borderColor:"#D0D0D0",borderWidth:1,marginTop:10,borderRadius:5}}/>
            </View>
            <View>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>City</Text>
                <TextInput  placeholderTextColor = "black" placeholder="Enter Your District" value={city} onChangeText={(text)=>setCity(text)}   style = {{padding:10,borderColor:"#D0D0D0",borderWidth:1,marginTop:10,borderRadius:5}}/>
            </View>
            <View style = {{marginVertical:10}}>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>State</Text>
                <TextInput  placeholderTextColor = "black" placeholder="Enter Your State" value={state} onChangeText={(text)=>setState(text)}  style = {{padding:10,borderColor:"#D0D0D0",borderWidth:1,marginTop:10,borderRadius:5}}/>
            </View>
            <View>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>PinCode</Text>
                <TextInput  placeholderTextColor = "black" placeholder="Enter Your PinCode" value={pincode} onChangeText={(text)=>setPincode(text)}  style = {{padding:10,borderColor:"#D0D0D0",borderWidth:1,marginTop:10,borderRadius:5}}
                keyboardType="numeric"
                maxLength={6}/>
            </View>
            <View>
                <Text style = {{fontSize:15,fontWeight:"bold",color:"black"}}>Crop Name</Text>
                <TextInput  placeholderTextColor = "black" placeholder="Enter Your Crop Name" value={Name} onChangeText={(text)=>setName(text)}  style = {{padding:10,borderColor:"#D0D0D0",borderWidth:1,marginTop:10,borderRadius:5}}/>
            </View>
            <View>
            <Button title="Pick an image" onPress={submit} />
            <FlatList
                data={images}
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

       <TouchableOpacity  style = {{backgroundColor:"#FFC72C",padding:10,borderRadius:6,justifyContent:"center",alignItems:"center",marginTop:20}} onPress={()=>AddSubmit()}>
        <Text style = {{fontWeight:"bold"}}>Add Product</Text>
       </TouchableOpacity>
       
       
       
        </View>
      </ScrollView>
      </LinearGradient>

    )
};
const styles = StyleSheet.create({
    grid: {
        marginTop: 20,
    },
    imageContainer: {
        position: 'relative',
        margin: 5,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    deleteButton: {
        position: 'absolute',
        top: 5,
        right: 5,
        backgroundColor: 'red',
        borderRadius: 10,
        padding: 5,
    },
    
});

export default AddProduct;