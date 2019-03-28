import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import MockData from "../../../MockData.json";
import Separator from "../../common/Separator";
import { Ionicons } from "@expo/vector-icons";

interface IData {
  avatar: string;
  first_name: string;
  last_name: string;
  id: number;
  phone_number: string;
  email: string;
}
interface IProps {
  navigation: any;
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

  renderInformation = (title: string, info: string, icon: string) => (
    <View
      style={{
        width: "70%",
        height: 40,
        flexDirection: "row",
        justifyContent: "flex-start"
      }}
    >
      <Ionicons name={icon} size={30} color="tomato" />
      <Text style={{ fontSize: 20, marginLeft: 10 }}>
        {title}: {info}
      </Text>
    </View>
  );

  render() {
    const { navigation } = this.props;
    const contact = navigation.getParam("contact", {
      avatar: "",
      first_name: "",
      last_name: "",
      id: 0,
      phone_number: "",
      email: ""
    });
    console.log(contact);

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
        {this.renderInformation("Email", contact.email, "ios-mail")}
        {this.renderInformation(
          "Phone",
          contact.phone_number,
          "md-phone-portrait"
        )}
        {this.renderInformation("Birthday", contact.dob, "md-calendar")}
        {this.renderInformation("Address", contact.address, "md-book")}
      </View>
    );
  }
}
