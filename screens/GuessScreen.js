import React, { Component, useEffect, useState } from 'react'
import { Alert, ImageBackground, KeyboardAvoidingView, SafeAreaView, Text, TextInput, View, Platform, StyleSheet, } from 'react-native'
import ScreenTitle from '../components/ScreenTitle';
import PrimaryButton from '../components/PrimaryButton';
import {LinearGradient} from "expo-linear-gradient";


const GuessScreen =({userNumber,setStep}) => {
    const [minValue, setMinValue] = useState(1);
    const [maxValue, setMaxValue] = useState(100);
    const [ guess, setGuess ] = useState(null);

    function guessTheNumber(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    useEffect(() => {
        const initialGuess = guessTheNumber(minValue, maxValue);
        setGuess(initialGuess);
    },  []);

    useEffect(() => {
        if (guess === userNumber) {
            setTimeout(() => {
                setStep(3);
            }, 1000);
        }
    }, [guess]);
   
    return (
            <LinearGradient colors={["#4c9f83", "#3b5998", "#196a25"]}
            style={styles.rootScreen}>
            <ImageBackground
            source={{uri: "https://legacy.reactjs.org/logo-og.png"}}
            //style={styles.ImageBackground}
            style={{flex:1}}
            imageStyle={{opacity:0.14}}
            
            >
            <SafeAreaView style={styles.safeContainer}>
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding': null} style={styles.screenContent} >
        <ScreenTitle>Opponent's Guess 🧐</ScreenTitle>
        <View style={styles.inputContainer}>
            <View>
                <Text style={styles.textInputStyle}> {guess} </Text> 
            </View>
        <View style={styles.buttonContainer} >
            <PrimaryButton
                onPressFunction={()=> {
                    if (userNumber < guess) {
                      const newMax = guess - 1;
                      setMaxValue(newMax);
                      const newGuess = guessTheNumber(minValue, newMax);
                      setGuess(newGuess);
                    } else {
                      Alert.alert("Don't Lie! ❌", "You said the number is lower, but it's not.");
                    }
                  }}>
                    <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 10,
                  }}
                >
                    <Text style={{ color: "#0d2f2b", fontWeight:"bold", fontSize:16 }}>Lower</Text>
                </View>
            </PrimaryButton>
            <PrimaryButton onPressFunction={()=> {
                    if (userNumber > guess) {
                      const newMin = guess + 1;
                      setMinValue(newMin);
                      const newGuess = guessTheNumber(newMin, maxValue);
                      setGuess(newGuess);
                    } else {
                      Alert.alert("Don't Lie! ❌", "You said the number is higher, but it's not.");
                    }
                  }}>
                <View style={{justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    gap: 8,}}>
                        <Text style={{color:"#0d2f2b", fontWeight:"bold", fontSize:16}}>Higher</Text>
                    </View>
                
            </PrimaryButton>
        </View>
        </View>
        </KeyboardAvoidingView>
        </SafeAreaView>
        </ImageBackground>   
        </LinearGradient>
      )
    }


  export default GuessScreen;

  const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "#0d2f2b",
        justifyContent: "center",
        alignItems: "center",
        marginTop:100,
        marginHorizontal: 24,
        padding: 24,
        borderRadius:8,
        shadowColor: "black",
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowRadius:6,
        shadowOpacity: 0.28,

    },
    textInputStyle:{
        width: 50,
        color:"#33ff66",
        fontWeight: "bold",
        fontSize: 30,
        marginVertical: 15,
        borderBottomColor: "white",
        borderBottomWidth: 2,
        textAlign:"center",

    },

    buttonContainer:{
        flexDirection: "row",
        justifyContent: 'space-between',
        gap:50,
    },

    rootScreen:{
        flex:1,
    },

    safeContainer:{
        flex:1,
    },

    screenContent:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    
})