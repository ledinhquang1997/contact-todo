import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
const { Ionicons } = require("@expo/vector-icons");
import { NavigationScreenProps } from 'react-navigation';
import { IData } from '../../services/typing/Data';
import ContactDetaiItem from './components/ContactDetaiItem';
interface IScreensProps {
  contact: IData;
}

interface IProps extends NavigationScreenProps<IScreensProps> {
}
interface Istate {
  isLoading: boolean;
}
export default class ContactDetail extends Component<IProps, Istate> {
  static navigationOptions = ({ navigation }: { navigation: any }) => {
    return {
      title: "Detail",
      headerRight: (
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={() => navigation.push("ContactDetail")}
        >
          <Ionicons name="ios-create" size={30} />
        </TouchableOpacity>
      )
    };
  };
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoading: true
    };
  }

  render() {
    const { navigation } = this.props;
    const contact = navigation.getParam("contact", {
      avatar: "",
      first_name: "",
      last_name: "",
      id: 0,
      phone_number: "",
      email: "",
      company: "",
      dob: "",
      address: ""
    });
    const dob = new Date(contact.dob);
    return (
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          paddingTop: 10
        }}
      >
        <View
          style={{
            borderRadius: 100,
            overflow: "hidden"
          }}
        >
          <Image
            source={{
              uri: contact.avatar
            }}
            style={{ width: 150, height: 150 }}
          />
        </View>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          {contact.first_name} {contact.last_name}
        </Text>
        <Text style={{ fontSize: 30, fontWeight: "100", marginBottom: 20 }}>
          {contact.company}
        </Text>
        <ContactDetaiItem title="Email" info={contact.email} icon="ios-mail"/>
        <ContactDetaiItem title="Phone" info={contact.email} icon="md-phone-portrait"/>
        <ContactDetaiItem title="Birthday" info={contact.email} icon="md-calendar"/>
        <ContactDetaiItem title="Address" info={contact.email} icon="md-book"/>
      </View>
    );
  }
}
