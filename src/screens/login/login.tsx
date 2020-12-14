import { LinearGradient } from "expo-linear-gradient";
import React, { FC, useEffect, useRef, useState } from "react";
import { Alert, SafeAreaView, Text, View } from "react-native";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { colors } from "../../constants/theme";
import { firebaseConfig } from "../../constants/firebase";
import styles from "./styles";
import firebase from "firebase";
import { connect } from "react-redux";
import * as ActionTypes from "../../store/actionTypes";

interface Props {
  navigation: any;
  loggedInUser: string | null;
  loginState: string;
  loginUser: (user: string) => void;
}

const App: FC<Props> = (props) => {
  let recaptchaVerifier: any = null;
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [verificationCode, setVerificationCode] = useState<string>("");
  const [verificationId, setVerificationId] = useState<string>("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        props.loginUser(firebase.auth().currentUser.uid);
      }
    });
  }, []);

  const onPressLogin = async () => {
    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      await firebase.auth().signInWithCredential(credential);
      props.loginUser(firebase.auth().currentUser.uid);
    } catch (error) {
      alert(error.message);
    }
  };

  const onPressSendCode = async () => {
    if (phoneNumber) {
      let number: string | number = parseInt(phoneNumber);
      number = "+1" + phoneNumber?.toString();
      try {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        const verification_id = await phoneProvider.verifyPhoneNumber(
          number,
          recaptchaVerifier
        );
        setVerificationId(verification_id);
      } catch (error) {
        alert(error.message);
      }
    } else return;
  };

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.titleView}>
        <Text style={styles.title}>Login Screen</Text>
      </View>
      <FirebaseRecaptchaVerifierModal
        ref={(ref) => (recaptchaVerifier = ref)}
        firebaseConfig={firebaseConfig}
      />

      <View style={styles.mainView}>
        <View style={styles.input}>
          <TextInput
            style={styles.inputField}
            maxLength={11}
            onChangeText={(text) => setPhoneNumber(text)}
            autoFocus
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.inputField}
            onChangeText={(text) => setVerificationCode(text)}
            editable={!!verificationId}
            keyboardType="number-pad"
            placeholder="Verification Code"
          />
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={verificationId ? onPressLogin : onPressSendCode}
        >
          <LinearGradient
            style={styles.loginBtn}
            colors={[colors.accent, colors.primary]}
          >
            <Text style={styles.loginBtnText}>
              {verificationId ? "Login" : "Send Code"}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapStateToProps = (state: {
  loggedInUser: string | null;
  loginState: "LOGGED_IN" | "LOGGED_OUT";
}) => state;

const mapDispatchToProps = (dispatch: any) => ({
  loginUser: (user: string) =>
    dispatch({
      type: ActionTypes.LOGIN_USER,
      payload: {
        user,
      },
    }),
});
const connectComponent = connect(mapStateToProps, mapDispatchToProps);
export default connectComponent(App);
