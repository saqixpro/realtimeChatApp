import React, { FC } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
import firebase from "firebase";
import { connect } from "react-redux";
import * as ActionTypes from "../../store/actionTypes";

interface Props {
  navigation: any;
  logOutUser: () => void;
}

const App: FC<Props> = (props) => {
  const onSignOut = () => {
    firebase.auth().signOut();
    props.logOutUser();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onSignOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
      <Text>Conversations Screen</Text>
    </View>
  );
};

const mapStateToProps = (state: any) => state;
const mapDispatchToProps = (dispatch: any) => ({
  logOutUser: () => dispatch({ type: ActionTypes.LOGOUT_USER }),
});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);

export default connectComponent(App);
