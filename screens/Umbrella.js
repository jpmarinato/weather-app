// MDIA-4295-0 - App Development Strategy 2 - 87992 - Lab
// Assignment 02
// Joao Resende
// A01319312

// I intend to have this screen (Umbrella.js) change content if it is raining or not based on a Weather API 
// For now I have on screen for when it is Raining (Umbrella.js) and one for when it is Not Raining (NoRain.js)

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, Button, ActivityIndicator } from 'react-native';
import getWeatherConditions from '../utils/WeatherConditions';
import * as Location from 'expo-location';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { fetchWeatherData } from "../api/weather";

export default function Umbrella({ navigation }) {
    //----------------Location Check----------------
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const [location, setLocation] = useState(null);
    const [latitude, setLatitude] = useState(48.4833);
    const [longitude, setLongitude] = useState(124.4833);
  
    

    useEffect(() => {
        const apiKey = "00703541609ed86c9d76331553ebdb40";
        const fetchUri = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        fetch(fetchUri)
            .then(
                res => res.json() 
            )
            .then(
                (res) => {
                    // console.log("success");
                    // console.log(res);
                    setData(res);
                    setLoading(false);
                },

                (err) => {
                    // console.log("error");
                    setError(err);
                    setLoading(false);
                }
            )
    }, []);

    return (
        <View style={styles.weatherContainer}>
            {displayData(loading,error,data,navigation)}
        </View>
    );
  
    
  }

  function displayData(loading, error, data, navigation){

    if(loading){
        // return loading screen
        return (
            <View>
                <Text>Loading...</Text>
                <ActivityIndicator 
                size="large"
                color="#00ff00"
                />
            </View>
        );

    }
    else if(error){
        // return error msg
        return (
            <View>
                <Text>ERROR...</Text>
            </View>
        );

    }
    else{
        // console.log();
        const weatherConditions = getWeatherConditions(data.weather[0].icon);
        // console.log('check');
        // console.log(weatherConditions);
        const backgroundColor = weatherConditions.backgroundColor;
        const tempCelsius = Math.trunc(273.15 - data.main.temp);
        const tempFeelsLike = Math.trunc(273.15 - data.main.feels_like);

        return (
            <View style={[{flex: 1, backgroundColor: backgroundColor}]}>
                <View style={styles.headerContainer}>
                    <MaterialCommunityIcons name={weatherConditions.icon} size={100} color="black"/>
                    {/* <Text style={styles.tempText}>Temperature˚</Text> */}
                    {/* <Text style={styles.tempText}>{data.weather[0].icon}</Text> */}
                </View>
                <View style={styles.bodyContainer}>
                    <MaterialCommunityIcons name={weatherConditions.umbrella} size={200} color="black" />
                    <Text style={styles.yesNo}>{weatherConditions.text}</Text>
                </View>
                
                <View style={styles.infoContainer}>
                    <View style={styles.Row}>
                        <View style={[{ width: "100%", paddingTop: 15}]} >
                            <Text style={styles.text}> {tempCelsius} °C</Text>
                            <Text style={styles.text}>Feels like: {tempFeelsLike} °C</Text>
                        </View>
                
                    </View>
                    
                    
                </View>
                <View style={styles.Row}>
                    
                    <View style={[{ width: "100%", padding: 15}]}>
                        <Button
                        color="#000"
                        title='details'
                        onPress={()=> navigation.navigate(
                            'Details',
                            {
                                cityId: data.id
                            }
                        )}
                        />
                    </View>
                </View>
                    
            </View>
            
        );
    }
  }

  const styles = StyleSheet.create({
    weatherContainer: {
      flex: 1,
    //   backgroundColor: {weatherConditions.backgroundColor}
    },
    headerContainer: {
      flex: 3,
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