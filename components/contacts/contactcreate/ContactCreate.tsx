import React, { Component } from "react";
import { View, Text, TextInput, ScrollView, Button, DatePickerIOS, Modal, Alert, TouchableHighlight, TouchableOpacity } from "react-native";
const { Ionicons } = require("@expo/vector-icons");

interface IProps { }

interface IContact {
  [field: string]: string;
}

interface IState {
  contact: IContact;
  modelVisible: boolean;
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
      contact: {
        firstName: "",
        lastName: "",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg",
        email: "",
        phoneNumber: "",
        dob: new Date().toDateString(),
        company: "",
        address: ""
      },
      modelVisible: false
    };
  }

  setModalVisible = (visible: boolean) => {
    this.setState({ modelVisible: visible });
  }

  renderInput = (display: string, name: string) => {
    return <View
      style={{
        margin: 5,
        flex: 0.2,
        flexDirection: "column",
        alignItems: "flex-start"
      }}
    >
      <Text style={{ fontWeight: "100", fontSize: 20, marginLeft: 20 }}>{display}: </Text>
      <TextInput
        style={{
          textAlign: "center",
          fontWeight: "200",
          fontSize: 17,
          height: 40,
          width: "100%",
          borderColor: "gray",
          borderBottomWidth: 0.5,
          borderRadius: 10,
        }}
        onChangeText={text => this.setState({ contact: { ...this.state.contact, [name]: text } })}
        value={this.state.contact[name]}
      />
    </View>
  }
  renderNameInput = () => {
    return <View style={{ flex: 0.2, flexDirection: "row" }}>
      <View
        style={{
          margin: 5,
          flex: 0.5,
          flexDirection: "column",
          alignItems: "flex-start"
        }}
      >
        <Text style={{ fontWeight: "100", fontSize: 20, marginLeft: 10 }}>
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
            borderBottomWidth: 0.5,
            borderRadius: 10
          }}
          onChangeText={text => this.setState({ contact: { ...this.state.contact, firstName: text } })}
          value={this.state.contact.firstName}
        />
      </View>
      <View
        style={{
          margin: 5,
          flex: 0.5,
          flexDirection: "column",
          alignItems: "flex-start"
        }}
      >
        <Text style={{ fontWeight: "100", fontSize: 20, marginLeft: 10 }}>Last name: </Text>
        <TextInput
          style={{
            textAlign: "center",
            fontWeight: "200",
            fontSize: 17,
            height: 40,
            width: "100%",
            borderColor: "gray",
            borderBottomWidth: 0.5,
            borderRadius: 10
          }}
          onChangeText={text => this.setState({ contact: { ...this.state.contact, lastName: text } })}
          value={this.state.contact.lastName}
        />
      </View>
    </View>
  }

  renderDateInput = () => {
    const { dob } = this.state.contact;
    return <TouchableOpacity onPress={() => this.setState({ modelVisible: !this.state.modelVisible })}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
        <Text style={{ fontWeight: "100", fontSize: 20, marginRight: 10, }}>Date of birth: </Text>
        <Ionicons name="ios-calendar" size={30} color="tomato" />
        <Text style={{ marginLeft: 10, fontSize: 17, fontWeight: '100' }}>{dob}</Text>
      </View>
    </TouchableOpacity>
  }

  renderModel = () => {
    return <Modal
      animationType="none"
      transparent={false}
      visible={this.state.modelVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={{ marginTop: 22 }}>
        <DatePickerIOS
          mode="date"
          date={new Date(this.state.contact.dob)}
          onDateChange={(date) => { this.setState({ contact: { ...this.state.contact, dob: date.toDateString() } }) }}
        />
        <Button title={'OK'} onPress={() => this.setState({ modelVisible: false })} />
      </View>
    </Modal>
  }

  renderButtons = () => {
    return <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around' }}>
      <Button title="Save" onPress={() => { }} />
      <Button title="Clear" onPress={() => { }} />
      <Button title="Cancel" onPress={() => { }} />
    </View>
  }


  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 20
        }}
      >
        <ScrollView>
          {this.renderNameInput()}
          {this.renderInput("Email", "email")}
          {this.renderInput("Company", "company")}
          {this.renderInput("Phone", "phoneNumber")}
          {this.renderInput("Address", "address")}
          {this.renderDateInput()}
        </ScrollView>
        {this.renderButtons()}
        {this.renderModel()}
      </View>
    );
  }
}
