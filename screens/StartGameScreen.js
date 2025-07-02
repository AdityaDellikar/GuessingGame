import React from 'react';
import { Text, TextInput, StyleSheet, Pressable, View, SafeAreaView, KeyboardAvoidingView,Platform, ImageBackground, Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import ScreenTitle from "../components/ScreenTitle";
import {LinearGradient} from "expo-linear-gradient";

const StartGameScreen = ({userNumber, setStep, setUserNumber, step}) => {
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
    <ScreenTitle>Guess The Number!🤔</ScreenTitle>
    <View style={styles.inputContainer}>
    <TextInput keyboardType='number-pad' maxLength={2} style={styles.textInputStyle} autoCapitalize='none' autoCorrect={false} onChangeText={(text) => setUserNumber(Number(text))} />
    <View style={styles.buttonContainer} >
        <PrimaryButton children = {'Reset'} />
        <PrimaryButton children = {'Confirm'} 
        onPressFunction={() => {
            if(userNumber == null){
                Alert.alert("The Number can't be Empty");
            } else{
                setStep(2);
            }
        }}
        />
    </View>
    </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
    </ImageBackground>   
    </LinearGradient>
  )
}

export default StartGameScreen

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
