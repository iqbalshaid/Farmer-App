import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image, Text, View, Modal, Pressable, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { ScrollView } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";

const News = () => {
  const [stor, setStor] = useState([]);
  const [check, setCheck] = useState(false);
  const [txt, setTxt] = useState("");

  useEffect(() => {
      fetchData();
  }, []);

  const fetchData = async () => {
      try {
          const res = await axios.get("https://newsdata.io/api/1/news?apikey=pub_326706177ea47f777373f5dda9c7f954f189f&q=agriculture%20news%20of%20india ");
          console.log(res.data);
          setStor(res.data.results);
      } catch (error) {
          console.error("Error fetching data:", error);
      }
  };

  return (
      <LinearGradient style={{ flex: 1 }} colors={["#bde0fe", "#b9fbc0"]}>
          <Text style={styles.headerText}>
              Business and Agriculture News
          </Text>
          <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
              {stor?.map((ele, index) => (
                  <View style={styles.newsItem} key={index}>
                      <Image
                          source={{ uri: ele.image_url }}
                          style={styles.newsImage}
                      />
                      <View>
                          <Text style={styles.newsTitle}>{ele.title}</Text>
                          <Text style={styles.newsDate}>
                              {ele.pubDate.split(" ")[0]}
                          </Text>
                          <Pressable
                              onPress={() => {
                                  setCheck(true);
                                  setTxt(ele.description);
                              }}
                          >
                              <Text style={styles.seeMoreText}>See More</Text>
                          </Pressable>
                      </View>
                  </View>
              ))}
          </ScrollView>

          {/* Modal for showing the description */}
          <Modal
              transparent={true}
              visible={check}
              animationType="slide"
              onRequestClose={() => {
                  setCheck(false);
                  setTxt("");
              }}
          >
            
              <View style={styles.modalOverlay}>
                  <View style={styles.modalContent}>
                      <Entypo
                          name="circle-with-cross"
                          size={24}
                          color="black"
                          style={styles.modalCloseIcon}
                          onPress={() => {
                              setCheck(false);
                              setTxt("");
                          }}
                      /> 
                      <Text style={styles.modalText}>{txt}</Text>
                  </View>
              </View>
          </Modal>
      </LinearGradient>
  );
};

export default News;
const styles = StyleSheet.create({
  headerText: {
      marginHorizontal: 20,
      marginVertical: 20,
      fontSize: 24,
      fontWeight: "800",
      color: "#e6ccb2",
      shadowColor: "#d3d3d3",
      shadowOffset: { width: 1, height: 1 },
  },
  newsItem: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: 10,
      marginHorizontal: 10,
      marginVertical: 10,
      overflow: "hidden",
  },
  newsImage: {
      marginHorizontal: 5,
      marginVertical: 5,
      width: 100,
      height: 100,
      borderRadius: 100,
      borderWidth: 2,
      borderColor: "red",
  },
  newsTitle: {
      fontSize: 12,
      fontWeight: "500",
      color: "black",
      overflow: "hidden",
      marginVertical: 5,
      marginRight: 5,
  },
  newsDate: {
      fontSize: 12,
      fontWeight: "500",
      overflow: "hidden",
      color: "grey",
      marginVertical: 5,
  },
  seeMoreText: {
      fontSize: 12,
      fontWeight: "500",
      overflow: "hidden",
      color: "blue",
      marginVertical: 5,
  },
  modalOverlay: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: "white",
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
  },
  modalText: {
      fontSize: 14,
      color: "black",
      textAlign: "center",
      marginVertical: 10,
  },
  modalCloseIcon: {
      position: "absolute",
      top: 10,
      right: 10,
  },
});
