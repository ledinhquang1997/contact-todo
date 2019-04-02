import React, { Component } from "react";
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight, AlertIOS } from "react-native";
import { ITodo } from "../service/typing/todo";
import { updateTodo, deleteTodo } from "../TodoAction";
import { IToDoState } from '../service/typing/state';
const { connect } = require("react-redux");
const { CheckBox } = require("native-base");
const { Ionicons } = require("@expo/vector-icons");

interface IProps {
  todoItem: ITodo;
  updateTodo: Function;
  deleteTodo: Function;
}

interface IState { }
class TodoItem extends Component<IProps, IState> {
  handleUpdateTodo = (isDone: boolean, name?: string) => {
    const { todoItem } = this.props;
    if (!name) {
      this.props.updateTodo({
        ...todoItem,
        isDone: isDone,
      });
    }
    else {
      this.props.updateTodo({
        ...todoItem,
        isDone: isDone,
        name
      });
    }
  };
  render() {
    const { id, isDone, name } = this.props.todoItem;
    const { deleteTodo } = this.props;
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
            checked={isDone}
            onPress={() => this.handleUpdateTodo(!isDone)}
            color="burlywood"
          />
        </View>
        <TouchableOpacity style={{
          flexWrap: "wrap",
          flex: 0.7,
        }}
          onPress={() => this.handleUpdateTodo(!isDone)}
          onLongPress={() => {
            AlertIOS.prompt('Enter a value', "", (text: string) => {
              this.handleUpdateTodo(isDone, text);
            }, "plain-text", name
            );
          }}
        >
          <Text
            style={
              isDone
                ? {
                  textAlign: "left",
                  fontFamily: "Roboto",
                  fontSize: 15,
                  textDecorationLine: "line-through",
                  textDecorationStyle: "solid"
                }
                : {
                  textAlign: "left",
                  fontFamily: "Roboto",
                  fontSize: 15
                }
            }
          >
            {name}
          </Text>
        </TouchableOpacity>
        <View style={{ flex: 0.1 }}>
          <TouchableOpacity onPress={() => { deleteTodo(id) }}>
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

const mapStateToProps = (state: IToDoState) => ({});

const mapDispatchToProps = {
  updateTodo, deleteTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
