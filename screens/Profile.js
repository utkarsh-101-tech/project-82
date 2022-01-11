import React from "react"
import { Text,StyleSheet,View } from "react-native";

export default class Profile extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Profile Screen</Text>
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
    }
})