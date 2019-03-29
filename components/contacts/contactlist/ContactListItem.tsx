import React, { Component } from "react";
import Swipeout, { SwipeoutButtonProperties } from "react-native-swipeout";
import { View, Image, Text, Alert, TouchableOpacity } from "react-native";
const { Ionicons } = require("@expo/vector-icons");
import { withNavigation, NavigationScreenProps, NavigationScreenProp, NavigationRoute } from "react-navigation";
import { IData } from '../../../service/typing/Data';
interface IState {
  data: IData;
}

interface ContactListItemProps {
  name: string
}

interface IProps extends NavigationScreenProps<ContactListItemProps> {
  item: IData;
  handleDeleteItem: Function;
  navigation: NavigationScreenProp<NavigationRoute<any>, any>
}
class ContactListItem extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      data: {
        avatar: "avatar",
        first_name: "quang",
        last_name: "le",
        id: 1,
        phone_number: "",
        email: "",
        company: "",
        dob: "",
        address: ""
      }
    };
  }

  navigateToContactDetail = () => {
    this.props.navigation.push("ContactDetail");
  };

  render() {
    const { item, handleDeleteItem, navigation } = this.props;
    const swipeoutBtns: SwipeoutButtonProperties[] =  [
      {
        text: (
          <Ionicons
            name="ios-trash"
            size={25}
            color="white"
            type="ant-design"
          />
        ),
        type: "delete",
        onPress: () => {
          Alert.alert("Alert", "Are you sure to delete?", [
            {
              text: "No",
              onPress: () => {},
              style: "cancel"
            },
            {
              text: "Yes",
              onPress: () => handleDeleteItem(item)
            }
          ]);
        }
      },
      {
        text: (
          <Ionicons
            name="ios-information-circle-outline"
            size={25}
            color="white"
            type="ant-design"
          />
        ),
        type: "primary",
        onPress: () => navigation.navigate("ContactDetail", { contact: item })
      }
    ];
    return (
      <Swipeout autoClose={true} right={swipeoutBtns} scroll={() => false}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("ContactDetail", { contact: item })
          }
        >
          <View
            style={{
              backgroundColor: "#fff",
              flex: 1,
              justifyContent: "flex-start",
              flexDirection: "row",
              height: 70,
              borderBottomColor: "#000",
              alignItems: "center"
            }}
          >
            <View
              style={{
                borderRadius: 50,
                overflow: "hidden",
                marginLeft: 20
              }}
            >
              <Image
                source={{
                  uri: item.avatar
                }}
                style={{ width: 50, height: 50 }}
              />
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: 20
              }}
            >
              <Text style={{ fontWeight: "bold" }}>
                {item.first_name} {item.last_name}
              </Text>
              <Text style={{ fontStyle: "italic" }}>{item.email}</Text>
              <Text>{item.phone_number}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </Swipeout>
    );
  }
}

export default withNavigation(ContactListItem);
