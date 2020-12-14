import React, { FC } from "react";
import "react-native-gesture-handler";
import "./src/constants/firebase";
import MainNav from "./src/navigation/mainStack";
import store from "./src/store/store";
import { Provider } from "react-redux";
const App: FC = () => {
  return (
    <Provider store={store}>
      <MainNav />
    </Provider>
  );
};

export default App;
