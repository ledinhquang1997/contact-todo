import React, { Component } from "react";
import { View } from "react-native";
interface IProps {}
interface IState {}
export default class Separator extends Component<IProps, IState> {
  render() {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
          opacity: 0.3
        }}
      />
    );
  }
}
