// MDIA-4295-0 - App Development Strategy 2 - 87992 - Lab
// Assignment 02
// Joao Resende
// A01319312

// I intend to have this screen (Umbrella.js) change content if it is raining or not based on a Weather API 
// For now I have on screen for when it is Raining (Umbrella.js) and one for when it is Not Raining (NoRain.js)

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, Button } from 'react-native';
import { weatherConditions } from '../utils/WeatherConditions';
import * as Location from 'expo-location';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { fetchWeatherData } from "../api/weather";
// import { Details } from '../src/Details';

// Current weather data to be replaced by API data
// const DATA = [
//     {id: '001', day: 'monday', temp: '18°C', percent: '60%'}, {id: '002', day: 'tuesday', temp: '23°C', percent: '10%'}, {id: '003', day: 'wednesday', temp: '25°C', percent: '30%'}, 
// ];

// const Item = ({ day, temp, percent }) => (
//     <View style={styles.infoContainer}>
//         <Text style={styles.text}>{day}</Text>
//         <Text style={styles.text}>{temp}</Text>
//         <Text style={styles.text}>{percent}</Text>
//     </View>
// );

// const renderItem = ({ item }) => (
//     <Item 
//         day={item.day} 
//         temp={item.temp}
//         percent={item.percent}  
//     />
// );

// I wasn't able to use the Flatlist for this screen but it is on the Forecast screen
export default function Umbrella({ navigation }) {
    //----------------Location Check----------------
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    
    useEffect(() => {
      (async () => {
        
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getCurrentPositionAsync({});
        setLatitude(location.coords.latitude)
        setLongitude(location.coords.longitude);
        setLocation(location.coords);
      })();
    }, []);
  
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);
    }
    console.warn("latitude: ", latitude);
    console.warn("longitude: ", longitude);
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.paragraph}>{latitude}</Text>
    //     <Text style={styles.paragraph}>{longitude}</Text>
    //   </View>
    // );

    //----------------Weather API Call----------------
    
    const SearchScreen = ({ navigation }) => {
        const [city, setCity] = useState("");
        const [weatherData, setWeatherData] = useState(null);
       
        const handleSearch = async () => {
          try {
            const data = await fetchWeatherData(latitude, longitude);
            setWeatherData(data);
          } catch (error) {
            // Handle the error
          }
        };
    }
    

    switch (weatherData.weather.icon) {
        case "01d":
        case "01n":
        case "02d":
        case "02n":
        case "03d":
        case "03n":
        case "04d":
        case "04n":
        case "50d":
        case "50n":
            weatherConditions = "noRain";
            break;
        case "09d":
        case "09n":
        case "10d":
        case "10n":
        case "11d":
        case "11n":
        case "13d":
        case "13n":
            weatherConditions = "Rain";
            break;
        default:
            console.log("Default rain position");
    }


    return (
        <View style={styles.weatherContainer}>
            <View style={styles.headerContainer}>
            <MaterialCommunityIcons name={weatherConditions.icon1} size={100} color="black"/>
                {/* <Text style={styles.tempText}>Temperature˚</Text> */}
            </View>
            <View style={styles.bodyContainer}>
                <MaterialCommunityIcons name={weatherConditions.umbrella} size={200} color="black" />
                <Text style={styles.yesNo}>{weatherConditions.text}</Text>
            </View>
            
            <View style={styles.infoContainer}>
                <View style={styles.Row}>
                    <View style={[{ width: "50%", paddingTop: 15}]} >
                        <Text style={styles.text}>18°C</Text>
                        <Text style={styles.text}>60% rain</Text>
                    </View>
                    
                    {/* <View style={[{ width: "50%", padding: 15}]}>
                        <View style={[{ width: "100%", padding: 15}]}>
                            <Button
                                color="#5D3FD3"
                                title='RAIN'
                                onPress={()=> navigation.navigate('Umbrella')}
                            />
                        </View>
                        <View style={[{ width: "100%", padding: 15}]}>
                            <Button
                                color="#5D3FD3"
                                title='NO RAIN'
                                onPress={()=> navigation.navigate('NoRain')}
                            />
                        </View>
                    </View> */}
                    
                </View>
                
                
            </View>
            <View style={styles.Row}>
                
                <View style={[{ width: "100%", padding: 15}]}>
                    <Button
                    color="#000"
                    title='FORECAST'
                    onPress={()=> navigation.navigate('Forecast')}
                    />
                </View>
            </View>
                
        </View>

        
        
        
    );
  }

  const styles = StyleSheet.create({
    weatherContainer: {
      flex: 1,
      backgroundColor: weatherConditions.backgroundColor
    },
    headerContainer: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tempText: {
      fontSize: 48,
      color: '#fff'
    },
    bodyContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    infoContainer: {
      flex: 2,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      paddingLeft: 25,
      marginBottom: 20
    },
    yesNo: {
        fontSize: 70,
        color: '#000',
        fontWeight: '500',
    },
    title: {
      fontSize: 48,
      color: '#fff'
    },
    text: {
      fontSize: 35,
      color: '#000',
      fontWeight: '200',
    },
    Row: {
        flexDirection: 'row',
    },
    list: {
        width: '100%'
    },
  });