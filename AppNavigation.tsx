import * as React from 'react';
import ContactList from "./src/screens/contacts/Contact";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator,
} from "react-navigation";
import ContactDetail from "./src/screens/contacts/screens/ContactDetail/ContactDetail";
import ContactCreate from "./src/screens/contacts/screens/ContactCreate/ContactCreate";
import Todo from "./src/screens/todos/Todo";
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
      ToDo: Todo
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === "Contact") {
            iconName = `ios-contacts${focused ? "" : "-outline"}`;
          } else if (routeName === "ToDo") {
            iconName = `ios-list`;
          }
  
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={25} color={tintColor} />
        }
      }),
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray"
      }
    }
  );
  
  export default createAppContainer(TabNavigator);