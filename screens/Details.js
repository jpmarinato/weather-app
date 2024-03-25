// MDIA-4295-0 - App Development Strategy 2 - 87992 - Lab
// Assignment 02
// Joao Resende
// A01319312

import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, FlatList, Button, ActivityIndicator } from 'react-native';
import getWeatherConditions from '../utils/WeatherConditions';
import * as Location from 'expo-location';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { fetchWeatherData } from "../api/weather";

// Flatlist used here
export default function Details({ navigation, route }) {
    const {cityId} = route.params;
    // console.log('id:' + cityId);

    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const [location, setLocation] = useState(null);

    useEffect(() => {
        const apiKey = "00703541609ed86c9d76331553ebdb40";
        const fetchUri = `https://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`;

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
        // const backgroundColor = weatherConditions.backgroundColor;
        const tempCelsius = Math.trunc(273.15 - data.main.temp);
        const tempFeelsLike = Math.trunc(273.15 - data.main.feels_like);
        const tempMin = Math.trunc(273.15 - data.main.temp_min);
        const tempMax = Math.trunc(273.15 - data.main.temp_max);
        const windSpeed = Math.round(data.wind.speed*3.6);

        console.log(data);

        return (
            <View style={styles.weatherContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.yesNo}>details</Text>
            </View>
            <View style={styles.bodyContainer}>
                <Text style={styles.text}>{tempCelsius} °C</Text>
                <Text style={styles.text}>Feels like: {tempFeelsLike} °C</Text>
                <Text style={styles.text}>Max: {tempMax} °C</Text>
                <Text style={styles.text}>Min: {tempMin} °C</Text>
                <Text style={styles.text}>Humidity: {data.main.humidity}%</Text>
                <Text style={styles.text}>Wind: {windSpeed} km/h</Text>
                <Text style={styles.text}>Clouds: {data.clouds.all}%</Text>
                
            </View>
            
            <View style={styles.buttonRow}>
                
                <View style={[{ width: "100%", padding: 15}]}>
                    <Button
                    color="#000"
                    title='umbrella?'
                    onPress={()=> navigation.navigate('Home')}
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
      backgroundColor: '#F3E988'
    },
    headerContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    tempText: {
      fontSize: 48,
      color: '#fff'
    },
    bodyContainer: {
        flex: 4,
        alignItems: 'flex-start',
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
    buttonRow: {
        flexDirection: 'row',
    },
    list: {
        width: '100%'
    },
  });