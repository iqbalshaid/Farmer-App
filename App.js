import React, { useEffect } from "react";
import { View } from "react-native";
import SplashScreen from "react-native-splash-screen"
import Stacks from "./src/FarmerApp/Stack/Navigations";
const App = ()=>{
  useEffect(()=>{
    SplashScreen.hide();
  },[])
  return (
        <Stacks />
  )
}
export default App;