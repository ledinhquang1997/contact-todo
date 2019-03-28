import React, { Component } from 'react'
import { View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import ListContactItem from './ContactListItem';
import { Ionicons } from '@expo/vector-icons';

interface IData {
    avatar: string;
    first_name: string;
    last_name: string;
    id: number;
}

interface IProps {

}

interface IState {
    isLoading: boolean,
    data: IData[]
}
export default class ContactList extends Component<IProps, IState> {
    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Contact',
            headerRight: (
                <TouchableOpacity 
                style={{ marginRight: 20 }} 
                onPress={()=>navigation.push('ContactDetail')}>
                    <Ionicons name='ios-add' size={30} />
                </TouchableOpacity>
            ),
        }
      }
    constructor(props: IProps) {
        super(props)
        this.state = {
            isLoading: true,
            data: [],
        }
    }

    async componentDidMount() {
        const data = await fetch('https://reqres.in/api/users?per_page=100');
        const res = await data.json();
        this.setState({
            isLoading: false,
            data: res.data,
        })
    }

    onDeleteItem = (item: IData) => {
        const array = [...this.state.data]
        const index = array.indexOf(item)
        if (index !== -1) {
            array.splice(index, 1);
            this.setState({ data: array });
        }
    }



    renderItems = (item: IData) => <ListContactItem item={item} handleDeleteItem={this.onDeleteItem} />
    renderSeparator = () => <View
        style={{
            height: 1,
            width: "100%",
            backgroundColor: "#CED0CE",
        }} />


    render() {
        const { isLoading, data = [] } = this.state;
        if (isLoading) {
            return (
                <View style={{ flex: 1, alignContent: "center", justifyContent: "center" }}>
                    <ActivityIndicator />
                </View>
            )
        }
        return (
            <View style={{
                flex: 1,
            }}>
                <FlatList
                    data={data}
                    ItemSeparatorComponent={this.renderSeparator}
                    renderItem={({ item }) => this.renderItems(item)}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        );
    }
}
