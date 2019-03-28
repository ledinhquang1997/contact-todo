import React, { Component } from 'react'
import Swipeout from 'react-native-swipeout';
import { View, Image, Text, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IData {
    avatar: string;
    first_name: string;
    last_name: string;
    id: number;
}
interface IState {
    data: IData
}
interface IProps {
    item: IData,
    handleDeleteItem: Function
}

export default class ContactListItem extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {
            data: {
                avatar: 'avatar',
                first_name: 'quang',
                last_name: 'le',
                id: 1,
            }
        }
    }

    render() {
        const { item, handleDeleteItem } = this.props
        const swipeoutBtns = [
            {
                backgroundColor:'#fff',
                text: <Ionicons name='ios-remove-circle-outline' size={25} color='white' type="ant-design"/>,
                type: 'default',
                onPress: () => {
                    Alert.alert(
                        'Alert',
                        'Are you sure to delete?',
                        [
                            {
                                text: 'No', onPress: () => {
                                    console.log("FUck");
                                }, style: 'cancel'
                            },
                            {
                                text: 'Yes', onPress: () => handleDeleteItem(item)
                            }
                        ]
                    );
                }
            }
        ]
        return (
            <Swipeout right={swipeoutBtns}>
                <View style={{
                    backgroundColor: '#fff',
                    flex: 1,
                    justifyContent: "flex-start",
                    flexDirection: 'row',
                    height: 70,
                    borderBottomColor: '#000',
                    alignItems: 'center'
                }}>
                    <View style={{
                        borderRadius: 50,
                        overflow: 'hidden',
                        marginLeft: 20
                    }}>
                        <Image source={{
                            uri: item.avatar
                        }} style={{ width: 50, height: 50 }} />
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginLeft: 20
                    }}>
                        <Text style={{ fontWeight: 'bold' }}>{item.first_name}</Text>
                        <Text>{item.last_name}</Text>
                    </View>
                </View>
            </Swipeout>
        )
    }
}
