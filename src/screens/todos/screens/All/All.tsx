import React, { Component } from "react";
import { View, FlatList, ActivityIndicator, TouchableOpacity } from "react-native";
import { getTodos, addTodo } from "../../TodoAction";
import TodoItem from "../../components/TodoItem";
import Separator from "../../../contacts/components/Separator";
import { ITodo } from "../../service/typing/ITodo";
import { IData } from '../../../contacts/services/typing/Data';
const { Item, Icon, Input } = require("native-base");
const { connect } = require("react-redux");
const { Ionicons } = require("@expo/vector-icons");
const uuidv1 = require('uuid/v1');

interface IProps {
  getTodos: () => void;
  todosData: IData[];
  addTodo: (item: IData) => void;
  deleteTodo: Function;
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
    this.props.getTodos();
  };

  renderTodoItem = (todo: ITodo) => {
    return <TodoItem key={todo.id} todoItem={todo} />;
  };

  handleAddTodo = () => {
    const { todoInput } = this.state;
    if (todoInput.trim() !== "") {
      const newTodo = {
        id: uuidv1(),
        name: todoInput,
        isDone: false
      }
      this.setState({
        todoInput: ""
      })
      this.props.addTodo(newTodo);
    }

  }

  handleTextChange = (text: string) => {
    this.setState({ todoInput: text });
  };
  render() {
    const { todos }: { todos: ITodo[] } = this.props.todosData;
    const { isLoading } = this.props.todosData;
    const { todoInput } = this.state;
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
            value={todoInput}
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
          <TouchableOpacity style={{ flex: 0.1 }} onPress={this.handleAddTodo}>
            <Ionicons size={25} color="black" active name="ios-arrow-down" />
          </TouchableOpacity>
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
  getTodos, addTodo
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(All);
