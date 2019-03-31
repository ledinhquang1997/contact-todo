import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ITodo } from "../service/typing/ITodo";
import { updateTodo } from "../TodoAction";
const { connect } = require("react-redux");
const { CheckBox } = require("native-base");
const { Ionicons } = require("@expo/vector-icons");

interface IProps {
  todoItem: ITodo;
  updateTodo: Function;
}

interface IState {}
class TodoItem extends Component<IProps, IState> {
  handleCheckBoxPress = () => {
    const { todoItem } = this.props;
    this.props.updateTodo({
      ...todoItem,
      status: todoItem.status === 1 ? 0 : 1
    });
  };
  render() {
    const { status, task } = this.props.todoItem;
    return (
      <View
        style={{
          paddingTop: 10,
          paddingBottom: 10,
          flex: 0.1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <View style={{ flex: 0.1, justifyContent: "center" }}>
          <CheckBox
            checked={status === 1 ? true : false}
            onPress={this.handleCheckBoxPress}
            color="burlywood"
          />
        </View>
        <Text
          style={
            status === 1
              ? {
                  flexWrap: "wrap",
                  flex: 0.7,
                  textAlign: "left",
                  fontFamily: "Roboto",
                  fontSize: 15,
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid"
                }
              : {
                  flexWrap: "wrap",
                  flex: 0.7,
                  textAlign: "left",
                  fontFamily: "Roboto",
                  fontSize: 15
                }
          }
        >
          {task}
        </Text>
        <View style={{ flex: 0.1 }}>
          <TouchableOpacity>
            <Ionicons
              name="ios-trash"
              size={25}
              color="darkblue"
              type="ant-design"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = {
  updateTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
