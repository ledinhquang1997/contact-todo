import * as React from "react";
import ContactList from "./components/contacts/contactlist/ContactList";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import ToDo from "./components/todos/ToDo";
import { Ionicons } from "@expo/vector-icons";
import ContactDetail from "./components/contacts/contactlist/ContactDetail";
import { Button, TouchableHighlight } from "react-native";
import ContactCreate from "./components/contacts/contactcreate/ContactCreate";

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
