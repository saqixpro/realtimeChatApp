import React, { FC } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { Conversations } from "../screens";

const { Navigator, Screen } = createStackNavigator();

const App: FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.FadeFromBottomAndroid,
      }}
    >
      <Screen name="conversations" component={Conversations} />
    </Navigator>
  );
};

export default App;
