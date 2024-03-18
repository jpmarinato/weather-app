// MDIA-4295-0 - App Development Strategy 2 - 87992 - Lab
// Assignment 02
// Joao Resende
// A01319312

// I intend to have the screen Umbrella.js change content if it is raining or not based on a Weather API 
// For now I have on screen for when it is Raining (Umbrella.js) and one for when it is Not Raining (NoRain.js)

// I intend to not have this screen when I figure out how to dynamically change the content of the Umbrella.js screen based on variables

import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Current weather data to be replaced by API data
const DATA = [
    {id: '001', day: 'monday', temp: '18°C', percent: '60%'}, {id: '002', day: 'tuesday', temp: '23°C', percent: '10%'}, {id: '003', day: 'wednesday', temp: '25°C', percent: '30%'}, 
];

const Item = ({ day, temp, percent }) => (
    <View style={styles.infoContainer}>
        <Text style={styles.text}>{day}</Text>
        <Text style={styles.text}>{temp}</Text>
        <Text style={styles.text}>{percent}</Text>
    </View>
);

const renderItem = ({ item }) => (
    <Item 
        day={item.day} 
        temp={item.temp}
        percent={item.percent}  
    />
);

export function getDataById(id){

    return DATA.find(item => item.id === id);    
}

// I wasn't able to use the Flatlist for this screen but it is on the Forecast screen
export default function NoRain({ navigation }) {

    return (
        <View style={styles.weatherContainer}>
            <View style={styles.headerContainer}>
            <MaterialCommunityIcons name="white-balance-sunny" size={100} color="black"/>
                {/* <Text style={styles.tempText}>Temperature˚</Text> */}
            </View>
            <View style={styles.bodyContainer}>
                <MaterialCommunityIcons name="umbrella-closed" size={200} color="black" />
                <Text style={styles.yesNo}>yes</Text>
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.Row}>
                    <View style={[{ width: "50%", paddingTop: 15}]} >
                        <Text style={styles.text}>monday</Text>
                        <Text style={styles.text}>18°C</Text>
                        <Text style={styles.text}>0%</Text>
                    </View>
                    <View style={[{ width: "50%", padding: 15}]}>
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
                    
                    
                </View>
                    
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
      backgroundColor: '#88F3BA'
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