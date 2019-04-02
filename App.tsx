import * as React from "react";
import ContactList from "./src/screens/contacts/Contact";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from "react-navigation";
import ContactDetail from "./src/screens/contacts/screens/ContactDetail/ContactDetail";
import ContactCreate from "./src/screens/contacts/screens/ContactCreate/ContactCreate";
import All from "./src/screens/todos/Todo";
import store from "./store/index";
import RootNavigator from './AppNavigation';
const { Provider } = require("react-redux");

const Expo = require("expo");
const { Ionicons } = require("@expo/vector-icons");


export default class App extends React.Component {
  componentDidMount() {
    this.loadFonts();
  }
  async loadFonts() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
    });
  }
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
