// MDIA-4295-0 - App Development Strategy 2 - 87992 - Lab
// Assignment 02
// Joao Resende
// A01319312

import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
    return (
        <View style={styles.weatherContainer}>
            
            <View style={styles.bodyContainer}>
                <Text style={styles.yesNo}>umbrella?</Text>
                <MaterialCommunityIcons name="umbrella" size={200} color="black" />
            </View>

            <View style={styles.buttonRow}>
                <View style={[{ width: "100%", padding: 15,}]}>
                    <Button
                    color="#000"
                    title='START'
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
      backgroundColor: '#88C6F3'
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
    start: {
        fontSize: 50,
        color: '#000',
        fontWeight: '200',
      },
    text: {
      fontSize: 35,
      color: '#000',
      fontWeight: '200',
    },
    buttonRow: {
        flexDirection: 'row',
    },
  });