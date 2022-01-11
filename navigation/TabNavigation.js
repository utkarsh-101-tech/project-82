import React from "react"
import CreatePost from '../screens/CreatePost'
import Feed from '../screens/Feed'
import {StyleSheet} from 'react-native'
import {createMaterialBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator=()=>{
    return(
        <Tab.Navigator
        labeled={false}
        barStyle={styles.tabStyle}
        activeColor={"red"}
        inActiveColor={"grey"}
        >
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="Create Post" component={CreatePost}/>
        </Tab.Navigator>
    )
}

const styles=StyleSheet.create({
    tabStyle:{
        backgroundColor: "#2f345d",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
      }
})

export default BottomTabNavigator