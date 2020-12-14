import React, { FC } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { LoginScreen } from "../screens";

const { Navigator, Screen } = createStackNavigator();

const App: FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.FadeFromBottomAndroid,
      }}
    >
      <Screen name="loginScreen" component={LoginScreen} />
    </Navigator>
  );
};

export default App;
