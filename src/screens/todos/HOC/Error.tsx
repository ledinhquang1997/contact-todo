// import React, { Component } from 'react';
// import { ScrollView, View, Text } from 'react-native';
// import { IToDoState } from '../service/typing/state';
// import { ITodo } from '../service/typing/todo';

// interface IProps {
//     getTodos: () => void;
//     changeFilter: (filter: string) => void;
//     todosData: IToDoState;
//     addTodo: (newTodo: ITodo) => void;
//     deleteTodo: (id: string) => void;
//     todos: ITodo[]
// }
// interface IState {
//     todos: ITodo[];
//     todoInput: string;
//   }


// export function withError(WrappedComponent: React.ComponentClass) {
//     return class extends React.Component<IProps, IState> {
//         constructor(props:IProps) {
//           super(props)
//         }
        
//         render() {
//             const { err, errMessage } = this.props.todosData
//             if (err) {
//                 return <View style={{
//                     flex: 1,
//                     flexDirection: 'row',
//                     justifyContent: 'center',
//                     alignItem: 'center'
//                 }}>
//                     <Text>{errMessage}</Text>
//                 </View>;
//             } else {
//                 return <WrappedComponent
//                     {...this.props} />;
//             }
//         }
//     };
// }