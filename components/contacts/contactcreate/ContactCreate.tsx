import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface IProps {}

interface IState {
  firstName: string;
  lastName: string;
  dob: Date;
  avatar: string;
  email: string;
  phoneNumber: string;
  company: string;
  address: string;
}
export default class ContactCreate extends Component<IProps, IState> {
  static navigationOptions = ({ navigation }: { navigation: any }) => {
    return {
      title: "New contact"
    };
  };

  constructor(props: IProps) {
    super(props);
    this.state = {
      firstName: "Byron",
      lastName: "Fields",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg",
      email: "gkunze13@pagesperso-orange.fr",
      phoneNumber: "250-489-8849",
      dob: new Date(),
      company: "LARION",
      address: "QTSC 1"
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 20
        }}
      >
        <View style={{ flex: 0.2, flexDirection: "row" }}>
          <View
            style={{
              margin: 5,
              flex: 0.5,
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Text style={{ fontWeight: "100", fontSize: 20 }}>
              First name:{" "}
            </Text>
            <TextInput
              style={{
                textAlign: "center",
                fontWeight: "200",
                fontSize: 17,
                height: 40,
                width: "100%",
                borderColor: "gray",
                borderBottomWidth: 1,
                borderRadius: 10
              }}
              onChangeText={text => this.setState({ firstName: text })}
              value={this.state.firstName}
            />
          </View>
          <View
            style={{
              margin: 5,
              flex: 0.5,
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <Text style={{ fontWeight: "100", fontSize: 20 }}>Last name: </Text>
            <TextInput
              style={{
                textAlign: "center",
                fontWeight: "200",
                fontSize: 17,
                height: 40,
                width: "100%",
                borderColor: "gray",
                borderBottomWidth: 1,
                borderRadius: 10
              }}
              onChangeText={text => this.setState({ firstName: text })}
              value={this.state.firstName}
            />
          </View>
        </View>
        <View
          style={{
            margin: 5,
            flex: 0.2,
            flexDirection: "column",
            alignItems: "flex-start"
          }}
        >
          <Text style={{ fontWeight: "100", fontSize: 20 }}>First name: </Text>
          <TextInput
            style={{
              textAlign: "center",
              fontWeight: "200",
              fontSize: 17,
              height: 40,
              width: "100%",
              borderColor: "gray",
              borderBottomWidth: 1,
              borderRadius: 10
            }}
            onChangeText={text => this.setState({ firstName: text })}
            value={this.state.firstName}
          />
        </View>
        <View
          style={{
            margin: 5,
            flex: 0.2,
            flexDirection: "column",
            alignItems: "flex-start"
          }}
        >
          <Text style={{ fontWeight: "100", fontSize: 20 }}>First name: </Text>
          <TextInput
            style={{
              textAlign: "center",
              fontWeight: "200",
              fontSize: 17,
              height: 40,
              width: "100%",
              borderColor: "gray",
              borderBottomWidth: 1,
              borderRadius: 10
            }}
            onChangeText={text => this.setState({ firstName: text })}
            value={this.state.firstName}
          />
        </View>
        <View
          style={{
            margin: 5,
            flex: 0.2,
            flexDirection: "column",
            alignItems: "flex-start"
          }}
        >
          <Text style={{ fontWeight: "100", fontSize: 20 }}>First name: </Text>
          <TextInput
            style={{
              textAlign: "center",
              fontWeight: "200",
              fontSize: 17,
              height: 40,
              width: "100%",
              borderColor: "gray",
              borderBottomWidth: 1,
              borderRadius: 10
            }}
            onChangeText={text => this.setState({ firstName: text })}
            value={this.state.firstName}
          />
        </View>
        <View
          style={{
            margin: 5,
            flex: 0.2,
            flexDirection: "column",
            alignItems: "flex-start"
          }}
        >
          <Text style={{ fontWeight: "100", fontSize: 20 }}>First name: </Text>
          <TextInput
            style={{
              textAlign: "center",
              fontWeight: "200",
              fontSize: 17,
              height: 40,
              width: "100%",
              borderColor: "gray",
              borderBottomWidth: 1,
              borderRadius: 10
            }}
            onChangeText={text => this.setState({ firstName: text })}
            value={this.state.firstName}
          />
        </View>
      </View>
    );
  }
}
