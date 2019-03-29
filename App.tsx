import * as React from "react";
import ContactList from "./src/screens/contacts/Contact";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import ToDo from "./src/screens/todos/ToDo";
import ContactDetail from "./src/screens/contacts/screens/ContactDetail/ContactDetail";
import ContactCreate from "./src/screens/contacts/screens/ContactCreate/ContactCreate";
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

const TabNavigator = createBottomTabNavigator(
  {
    Contact: contactStackNavigator,
    ToDo: ToDo
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
  render() {
    return <RootNavigator />;
  }
}
