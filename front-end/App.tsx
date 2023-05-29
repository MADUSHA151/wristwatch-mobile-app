import React from "react";
import {View , Text ,Button } from "react-native";

function App() {
  return(
    <View className="flex-1 items-center justify-center bg-g-theme-color">
      <Text className="text-white text-7xl text-blue-blur-color">Hello</Text>
      <View>
        <Button title="Welcome" className="bg-button-color" />
      </View>
    </View>
    
  );
}

export default App