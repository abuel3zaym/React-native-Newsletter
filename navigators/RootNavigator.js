import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";
import ViewMenu from "../screens/ViewMenu";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Subscribe" component={SubscribeScreen}/>
      <Stack.Screen name="Menu" component={ViewMenu}/>
    </Stack.Navigator>
  );
};

export default RootNavigator;
