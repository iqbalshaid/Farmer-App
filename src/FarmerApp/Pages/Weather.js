import React, { useState } from 'react';
import { View, Text, Alert, Image, ScrollView, StyleSheet,Pressable } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from "react-native-vector-icons/AntDesign"
import { useLayoutEffect } from 'react';
const API_KEY = "fe577526c73621150630d57e6c40fc0e";

const WeatherApp = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
       
        navigation.setOptions({
           
            headerTitle:"Live Weather",
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
    const route = useRoute();
    const [currentWeather, setCurrentWeather] = useState(null);
    const [forecast, setForecast] = useState([]);

    const createWeatherCard = (cityName, weatherItem, index) => {
        const date = weatherItem.dt_txt.split(" ")[0];
        const tempCelsius = (weatherItem.main.temp - 273.15).toFixed(2);
        const iconUrl = `https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png`;
        const description = weatherItem.weather[0].description;

        if (index === 0) {
            return (
                <View style={styles.currentWeather}>
                    <Text>{cityName} ({date})</Text>
                    <Text>Temperature: {tempCelsius}°C</Text>
                    <Text>Wind: {weatherItem.wind.speed} M/S</Text>
                    <Text>Humidity: {weatherItem.main.humidity}%</Text>
                    <Image source={{ uri: iconUrl }} style={styles.weatherIcon} />
                    <Text>{description}</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.weatherCard} key={index}>
                    <Text>({date})</Text>
                    <Image source={{ uri: iconUrl }} style={styles.smallWeatherIcon} />
                    <Text>Temp: {tempCelsius}°C</Text>
                    <Text>Wind: {weatherItem.wind.speed} M/S</Text>
                    <Text>Humidity: {weatherItem.main.humidity}%</Text>
                </View>
            );
        }
    };

    const getWeatherDetails = async (cityName, latitude, longitude) => {
        try {

    
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
            );
    
            // Log the full response to inspect it
           
    
            if (!res.data || !res.data.list || res.data.list.length === 0) {
                throw new Error("Invalid data received from the API");
            }
    
            const uniqueForecastDays = [];
            const fiveDaysForecast = res.data.list.filter(forecast => {
                const forecastDate = new Date(forecast.dt_txt).getDate();
                if (!uniqueForecastDays.includes(forecastDate)) {
                    return uniqueForecastDays.push(forecastDate);
                }
            });
    
            if (fiveDaysForecast.length === 0) {
                throw new Error("No forecast data available");
            }
    

    
            // Safely access fiveDaysForecast[0]
            setCurrentWeather(createWeatherCard(cityName, fiveDaysForecast[0], 0));
    
            setForecast(
                fiveDaysForecast.slice(1).map((weatherItem, index) =>
                    createWeatherCard(cityName, weatherItem, index + 1)
                )
            );
    
        } catch (error) {
            
            Alert.alert("Error", "An error occurred while fetching the weather forecast!");
        }
    };
    
    if(route?.params?.check==1){
        Geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const res = await axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${API_KEY}`);
                    const { name } = res.data[0];
                    getWeatherDetails(name, latitude, longitude);
                } catch (error) {
                    Alert.alert("Error", "An error occurred while fetching the city name!");
                }
            },
            (error) => {
                if (error.code === error.PERMISSION_DENIED) {
                    Alert.alert("Permission Denied", "Geolocation request denied. Please reset location permission to grant access again.");
                } else {
                    Alert.alert("Error", "Geolocation request error. Please reset location permission.");
                }
            }
        );
    
}

    return (
        <View style={styles.container}>
            

            <ScrollView>
                {currentWeather}
                {forecast}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#bde0fe',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
    },
    currentWeather: {
        padding: 16,
        backgroundColor: '#64dfdf',
        borderRadius: 8,
        marginBottom: 12,
        alignItems: 'center',
    },
    weatherCard: {
        padding: 16,
        backgroundColor: '#64dfdf',
        borderRadius: 8,
        marginBottom: 12,
        alignItems: 'center',
    },
    weatherIcon: {
        width: 100,
        height: 100,
    },
    smallWeatherIcon: {
        width: 50,
        height: 50,
    },
});

export default WeatherApp;
