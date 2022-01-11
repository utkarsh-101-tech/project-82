import React from "react";
import { 
    Text, 
    StyleSheet,
    View,
    Image,
    SafeAreaView,
    Platform,
    StatusBar,
    Dimensions,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class Feed extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.authorContainer}>
                        <View style={styles.authorImageContainer}>
                            <Image style={styles.profileImage}
                                   source={require("../assets/profile.png")}
                            />
                        </View>
                        <View style={styles.authorNameContainer}>
                            <Text style={styles.autorNameText}>authorName xyz</Text>
                        </View>
                    </View>
                    <Image style={styles.PostImage} source={require("../assets/post.jpeg")} />
                    <View style={captionContainer}>
                        <Text style={styles.captionText}>
                            caption
                        </Text>
                    </View>
                    <View style={styles.actionContainer}>
                        <View style={styles.likeButton}>
                            <Ionicons names={"heart"} size={RFValue(30)} color={"white"}/>
                            <Text style={styles.likeText}>12K</Text>
                        </View>
                    </View>
                </View>                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    cardContainer: {
      margin: RFValue(13),
      backgroundColor: '#2f345d',
      borderRadius: RFValue(20),
    },
    storyImage: {
      resizeMode: 'contain',
      width: '95%',
      alignSelf: 'center',
      height: RFValue(250),
    },
    titleContainer: {
      paddingLeft: RFValue(20),
      justifyContent: 'center',
    },
    storyTitleText: {
      fontSize: RFValue(25),
      fontFamily: 'Bubblegum-Sans',
      color: 'white',
    },
    storyAuthorText: {
      fontSize: RFValue(18),
      fontFamily: 'Bubblegum-Sans',
      color: 'white',
    },
    descriptionText: {
      fontFamily: 'Bubblegum-Sans',
      fontSize: 13,
      color: 'white',
      paddingTop: RFValue(10),
    },
    actionContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: RFValue(10),
    },
    likeButton: {
      width: RFValue(160),
      height: RFValue(40),
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: '#eb3948',
      borderRadius: RFValue(30),
    },
    likeText: {
      color: 'white',
      fontFamily: 'Bubblegum-Sans',
      fontSize: RFValue(25),
      marginLeft: RFValue(5),
    },
  });
  