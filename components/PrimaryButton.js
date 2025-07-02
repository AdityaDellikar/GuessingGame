import { Pressable, Text, View, StyleSheet } from 'react-native';

const PrimaryButton = ({children, onPressFunction}) => {
  
    return (
      <View style={styles.buttonOuterContainer} >
        <Pressable
            onPress={onPressFunction}
         style={({pressed}) => pressed 
        ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer } >
            <Text  style={styles.buttonText} >{children} </Text>
       
        </Pressable>
      </View>
    );
  
};

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderColor:"#33ff66",
        borderWidth: 1,
       // paddingHorizontal:16,
       // paddingVertical:5,
        borderRadius:10,
        overflow:"hidden"
    },
    buttonInnerContainer:{
        backgroundColor:"#33ffc2",
        paddingHorizontal: 16,
        paddingVertical:8,
        alignItems: "center",
        justifyContent: "center",
        minWidth: 100,

    },
    buttonText:{
        color: "#0d2f2b",
        textAlign:"center",
        fontWeight:"bold",
        fontSize:16,
    },
    pressed: {
        opacity:0.75,
    },
});
