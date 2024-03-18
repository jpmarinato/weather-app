// MDIA-4295-0 - App Development Strategy 2 - 87992 - Lab
// Assignment 02
// Joao Resende
// A01319312

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

// Flatlist used here
export default function Forecast({ navigation }) {

    return (
        <View style={styles.weatherContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.yesNo}>forecast</Text>
            </View>
            <View style={styles.bodyContainer}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                /> 
            </View>
            
            <View style={styles.buttonRow}>
                
                <View style={[{ width: "100%", padding: 15}]}>
                    <Button
                    color="#000"
                    title='TODAY'
                    onPress={()=> navigation.navigate('Umbrella')}
                    />
                </View>
            </View>
                
        </View>
        
        
    );
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