import React, { Component } from 'react'
import { Text, View, Pressable, StyleSheet, ImageBackground, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import ScreenTitle from '../components/ScreenTitle';
import { LinearGradient } from 'expo-linear-gradient';

const FinalScreen =({setStep, setUserNumber}) => {

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
  <ScreenTitle>Game Over! 🎉</ScreenTitle>
  <View style={styles.inputContainer}>
    <Text style={styles.text} > Congratulations!👏🥳 </Text>
    <Pressable style={styles.button} 
    onPress={() => {
      setStep(1);
      setUserNumber(null);
    }}
    >
      <Text style={styles.restartBtn}>Restart</Text>
    </Pressable>
  </View>
  </KeyboardAvoidingView>
  </SafeAreaView>
  </ImageBackground>   
  </LinearGradient>
    )
  }

export default FinalScreen;

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

  text:{
    color: '#33ff66',
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },

  button:{
    backgroundColor: '#33ff66',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
  },

  restartBtn:{
    color: '#0d2f2b',
    fontWeight: 'bold',
    fontSize: 18,
  },
})
