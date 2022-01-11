import * as React from 'react'
import Drawer from './navigation/DrawerNavigation'
import {NavigationContainer} from '@react-navigation/native'


export default function App() {
  return (
    <NavigationContainer>
     <Drawer/>
     </NavigationContainer>
  );
}

// {
//   "dependencies": {
//     "expo-status-bar": "~1.0.4",
//     "react-native-screens": "~3.4.0",
//     "react-native-reanimated": "~2.2.0",
//     "@react-navigation/drawer": "^5.12.5",
//     "@react-navigation/native": "5.0.5",
//     "react-native-vector-icons": "9.0.0",
//     "react-native-gesture-handler": "~1.10.2",
//     "@react-navigation/bottom-tabs": "^5.11.9",
//     "react-native-safe-area-context": "3.2.0",
//     "react-native-vector-icons/Ionicons": "*"
//   }
// }