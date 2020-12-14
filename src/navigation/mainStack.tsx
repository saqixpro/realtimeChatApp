import React, { FC, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./appStack";
import AuthStack from "./authStack";
import { connect } from "react-redux";

interface Props {
  loggedInUser: string | null;
  loginState: string;
}

const App: FC<Props> = (props) => {
  useEffect(() => {
    alert(props.loginState);
  }, []);

  return props.loginState == "LOGGED_IN" ? (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

const mapStateToProps = (state: any) => state;
const mapDispatchToProps = (dispatch: any) => ({});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(App);
