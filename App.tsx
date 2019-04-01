import * as React from "react";
import ContactList from "./src/screens/contacts/Contact";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import ToDo from "./src/screens/todos/ToDo";
import ContactDetail from "./src/screens/contacts/screens/ContactDetail/ContactDetail";
import ContactCreate from "./src/screens/contacts/screens/ContactCreate/ContactCreate";
import Active from "./src/screens/todos/screens/Active/Active";
import Completed from "./src/screens/todos/screens/Completed/Completed";
import All from "./src/screens/todos/screens/All/All";
import store from "./store/index";
const { Provider } = require("react-redux");

const Expo = require("expo");
const { Ionicons } = require("@expo/vector-icons");

const contactStackNavigator = createStackNavigator(
  {
    ContactList: {
      screen: ContactList
    },
    ContactDetail: {
      screen: ContactDetail
    },
    ContactCreate: {
      screen: ContactCreate
    }
  },
  {
    initialRouteName: "ContactList"
  }
);
const TodoTabNavigator = createMaterialTopTabNavigator(
  {
    All: All,
    Active: Active,
    Completed: Completed
  },
  {
    tabBarOptions: {
      labelStyle: { color: "#000" },
      tabStyle: {},
      style: { backgroundColor: "#fff", marginTop: 20 }
    }
  }
);
const TabNavigator = createBottomTabNavigator(
  {
    Contact: contactStackNavigator,
    ToDo: TodoTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Contact") {
          iconName = `ios-contacts${focused ? "" : "-outline"}`;
        } else if (routeName === "ToDo") {
          iconName = `ios-list`;
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

const RootNavigator = createAppContainer(TabNavigator);
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
