import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, StyleSheet, View, SafeAreaView, Platform, RFValue} from "react-native";

export default class CreatePost extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafe}/>
                <Text style={styles.text}>Create Post Screen</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        flex:1,
        justifyContent:'center',
        fontSize:20,
    },
    droidSafe:{
        marginTop:Platform.OS ==="android" ? StatusBar.currentHeight:RFValue(35)
    }
})