import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("screen");
import { colors } from "../../constants/theme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  input: {
    backgroundColor: colors.light,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.1,
    marginVertical: 10,
    width: width / 1.1,
    borderRadius: 40,
  },
  inputField: {
    padding: 20,
  },
  title: {
    fontSize: 30,
    textTransform: "uppercase",
    fontWeight: "600",
    color: colors.light,
    alignSelf: "center",
  },
  titleView: {
    flex: 0.4,
    width: "100%",
    justifyContent: "center",
  },
  mainView: {
    flex: 0.6,
    width: "100%",
    alignItems: "center",
  },
  loginBtn: {
    padding: 15,
    width: width / 1.2,
    alignItems: "center",
    borderRadius: 20,
    marginVertical: 10,
  },

  loginBtnText: {
    color: colors.light,
    fontSize: 20,
    fontWeight: "600",
  },
});

export default styles;
