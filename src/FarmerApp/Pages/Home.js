import { useNavigation } from "@react-navigation/native";
import React, { useState, useLayoutEffect } from "react";
import { View, Text, ScrollView, Pressable, Alert, TouchableOpacityr } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import Carousel from 'react-native-snap-carousel';
const Home = ()=>{
    const navigation = useNavigation();
    const [refreshing,setRefreshing] = useState(false);
  useLayoutEffect(() => {
    const refreshApp = () => {
      setRefreshing(true);
      // Perform any additional refresh logic here...
      setTimeout(() => {
        // Simulate refreshing for 2 seconds
        setRefreshing(false);
      }, 2000);
    };
    const carouselData = [
      {image: require('../../FarmerApp/images/slide1.jpg')},
      {image: require('../../FarmerApp/images/slide4.jpg')},
      {image: require('../../FarmerApp/images/slide3.jpg')},
    ];
    navigation.setOptions({
        headerLeft: () => null, // Remove headerLeft
        headerTitle:" Home",
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
        headerRight: () => (
            <View style = {{flexDirection:"row",gap:10}}>
                <View style={{ marginRight: 10 }}>
             <Text> <AntDesign name="cloudo" size={24} color="black"  style = {{fontWeight:"800"}} onPress = {()=>
              navigation.navigate("weather",{
                check:1
              })
             }/></Text>
            </View>
          <TouchableOpacity onPress={refreshApp}>
            <View style={{ marginRight: 10 }}>
             <Text> <AntDesign name="reload1" size={24} color="black"  style = {{fontWeight:"800"}}/></Text>
            </View>
          </TouchableOpacity>
          </View>
        ),
      });
    }, [navigation]);
    // const renderCarouselItem = ({item}) => (
    //   <View style={{ height: 150,
    //     backgroundColor: '#3498db',
    //     borderRadius: 10,
    //     width: 300,
    //     marginHorizontal: 10,
    //     justifyContent: 'center',
    //     alignItems: 'center'}}>
    //     <Image
    //       style={{
    //         height: '100%',
    //         width: '100%',
    //         borderRadius: 8,
    //       }}
    //       source={item.image}></Image>
    //   </View>
    // );
  
    return (
        <ScrollView>
        {refreshing ? (Alert.alert("Your data is refreshing")):(
          <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1}}>

            <View style = {{marginTop:10}}>
              {/* <View style = {{marginVertical:10,height:200}}>
              <Carousel
          data={carouselData}
          renderItem={renderCarouselItem}
          sliderWidth={400}
          itemWidth={300}
          layout="default"
          loop={true}
          autoplay={true}
        />
              </View>
              */}
                <Pressable
                  style={{
                    backgroundColor: "#BE93C5",
                    borderRadius: 6,
                    padding: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      padding: 7,
                      width: 45,
                      height: 45,
                      borderRadius: 7,
                      backgroundColor: "white",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AntDesign name="search1" size={24} color="black" />
                  </View>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 16,
                      fontWeight: "600",
                      flex: 1,
                    }}
                  >
                    Search Your Buyer
                  </Text>
                  <View
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: 7,
                      backgroundColor: "white",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Entypo name="chevron-right" size={24} color="black" />
                  </View>
                </Pressable>
                <Pressable
                onPress={()=>navigation.navigate("sessioncrop")}
                  style={{
                    backgroundColor: "#BE93C5",
                    borderRadius: 6,
                    padding: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      padding: 7,
                      width: 45,
                      height: 45,
                      borderRadius: 7,
                      backgroundColor: "white",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Entypo name="colours" size={24} color="black" />
                  </View>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 16,
                      fontWeight: "600",
                      flex: 1,
                    }}
                  >
                    Session Wise Crop
                  </Text>
                  <View
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: 7,
                      backgroundColor: "white",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Entypo name="chevron-right" size={24} color="black" />
                  </View>
                </Pressable>
                <Pressable
                onPress={()=>navigation.navigate("fertilizer")}
                  style={{
                    backgroundColor: "#BE93C5",
                    borderRadius: 6,
                    padding: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      padding: 7,
                      width: 45,
                      height: 45,
                      borderRadius: 7,
                      backgroundColor: "white",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Entypo name="crop" size={24} color="black" />
                  </View>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 16,
                      fontWeight: "600",
                      flex: 1,
                    }}
                  >
                    Crop Fertilizer uses
                  </Text>
                  <View
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: 7,
                      backgroundColor: "white",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Entypo name="chevron-right" size={24} color="black" />
                  </View>
                </Pressable>
                <Pressable
                onPress={()=>navigation.navigate("schema")}
                  style={{
                    backgroundColor: "#BE93C5",
                    borderRadius: 6,
                    padding: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      padding: 7,
                      width: 45,
                      height: 45,
                      borderRadius: 7,
                      backgroundColor: "white",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Entypo name="news" size={24} color="black" />
                  </View>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 16,
                      fontWeight: "600",
                      flex: 1,
                    }}
                  >
                    Agriculture Scheme State
                  </Text>
                  <View
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: 7,
                      backgroundColor: "white",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MaterialIcons name="summarize" size={24} color="black" />
                  </View>
                </Pressable>
                <Pressable
                onPress={()=>navigation.navigate("news")}
                  style={{
                    backgroundColor: "#BE93C5",
                    borderRadius: 6,
                    padding: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      padding: 7,
                      width: 45,
                      height: 45,
                      borderRadius: 7,
                      backgroundColor: "white",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Entypo name="news" size={24} color="black" />
                  </View>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 16,
                      fontWeight: "600",
                      flex: 1,
                    }}
                  >
                    Agriculture News
                  </Text>
                  <View
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: 7,
                      backgroundColor: "white",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MaterialIcons name="summarize" size={24} color="black" />
                  </View>
                </Pressable>
                <Pressable
                  style={{
                    backgroundColor: "#BE93C5",
                    borderRadius: 6,
                    padding: 10,
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      padding: 7,
                      width: 45,
                      height: 45,
                      borderRadius: 7,
                      backgroundColor: "white",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Ionicons name="people" size={24} color="black" />
                  </View>
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: 16,
                      fontWeight: "600",
                      flex: 1,
                    }}
                  >
                    SignOut
                  </Text>
                  <View
                    style={{
                      width: 35,
                      height: 35,
                      borderRadius: 7,
                      backgroundColor: "white",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MaterialIcons name="logout" size={24} color="black" />
                  </View>
                </Pressable>
              
             
            </View>
          </LinearGradient>
          )}
        </ScrollView>

    );
};

export default Home;