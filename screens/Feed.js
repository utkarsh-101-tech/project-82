import React from "react";
import { Text, StyleSheet, View, Image, RFValue} from "react-native";

export default class Feed extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafe}/>
                <View style={styles.appTitle}>
                    <View style={styles.appLogo}>
                        <Image
                        source={require("../assets/icon.png")}
                        style={styles.iconImage}
                        />
                        <View style={styles.appTitleTextContainer}>
                           <Text style={styles.appTitleText}>Spectagram</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({    
    text:{
        flex:1,
        justifyContent:'center',
        fontSize:20,
    },
    droidSafe:{
        marginTop:Platform.OS ==="android" ? StatusBar.currentHeight:RFValue(35)
    },
    container: {
        flex: 1,
        backgroundColor: "#15193c"
      },      
      appTitle: {
        flex: 0.07,
        flexDirection: "row"
      },
      appIcon: {
        flex: 0.3,
        justifyContent: "center",
        alignItems: "center"
      },
      iconImage: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
      },
      appTitleTextContainer: {
        flex: 0.7,
        justifyContent: "center"
      },
      appTitleText: {
        color: "white",
        fontSize: RFValue(28),
        fontFamily: "Bubblegum-Sans"
      },
      cardContainer: {
        flex: 0.85
      }
})