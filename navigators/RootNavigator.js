import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";
import ViewMenu from "../screens/ViewMenu";
import ViewMenu2 from "../screens/viewMenu2";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Subscribe" component={SubscribeScreen}/>
      <Stack.Screen name="Menu" component={ViewMenu2}/>
    </Stack.Navigator>
  );
};

export default RootNavigator;
