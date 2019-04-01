import React, { Component } from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import { getTodos } from "../../TodoAction";
import TodoItem from "../../components/TodoItem";
import Separator from "../../../contacts/components/Separator";
import { ITodo } from "../../service/typing/ITodo";
const { Item, Icon, Input } = require("native-base");
const { connect } = require("react-redux");
const { Ionicons } = require("@expo/vector-icons");

interface IProps {
  getTodos: Function;
  todosData: any;
}
interface IState {
  todos: any;
  todoInput: string;
}
class All extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      todos: [],
      todoInput: ""
    };
  }

  componentDidMount = () => {
    // this.props.getTodos();
  };

  renderTodoItem = (todo: ITodo) => {
    return <TodoItem key={todo.id} todoItem={todo} />;
  };

  handleTextChange = (text: string) => {
    this.setState({ todoInput: text });
  };
  render() {
    const { todos }: { todos: ITodo[] } = this.props.todosData;
    const { isLoading } = this.props.todosData;
    console.log(this.state.todoInput);

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start"
        }}
      >
        <Item style={{ borderBottomColor: "#edf0f4", borderBottomWidth: 0.3 }}>
          <Input
            placeholder="What needs to be done?"
            placeholderLabel={{ textAlign: "center" }}
            onChangeText={(text: string) => this.handleTextChange(text)}
            style={{
              flex: 0.9,
              fontFamily: "Roboto",
              fontWeight: "100",
              textAlign: "center"
            }}
          />
          <Icon style={{ flex: 0.1 }} active name="ios-arrow-down" />
        </Item>
        {isLoading ? (
          <View
            style={{
              flex: 1,
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            <ActivityIndicator />
          </View>
        ) : (
          <FlatList
            data={todos}
            ItemSeparatorComponent={() => <Separator />}
            renderItem={({ item }) => this.renderTodoItem(item)}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </View>
    );
  }
}
const mapStateToProps = (state: any) => ({
  todosData: state.todosData
});

const mapDispatchToProps = {
  getTodos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(All);
