import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import React, { useState } from 'react';
import GuessScreen from './screens/GuessScreen';
import FinalScreen from './screens/FinalScreen';

export default function App() {
  const[step, setStep] =  useState(1);
  const[userNumber, setUserNumber] = useState(null);
  return (
    <>
    {
      step == 1 && (
      <StartGameScreen
      userNumber={userNumber}
      setUserNumber={setUserNumber}
      step={step}
      setStep={setStep}
        />
      )}
      {step ==2 && 
        <GuessScreen
          userNumber={userNumber}
          setStep={setStep}
        />
      }
      {
        step ==3 && (
          <FinalScreen
          setStep={setStep}
          setUserNumber={setUserNumber}
          />
        )
      }
    </>
  );
}

const styles = StyleSheet.create({});
