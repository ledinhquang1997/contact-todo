import React, { Component } from 'react'
import { View, Text } from 'react-native';
const { Ionicons } = require("@expo/vector-icons");

interface IProps {
    title: string;
    info: string;
    icon: string
}
interface IState { }
export default class ContactDetaiItem extends Component<IProps, IState> {
    render() {
        const { icon, title, info } = this.props;
        return (
            <View
                style={{
                    width: "70%",
                    height: 40,
                    flexDirection: "row",
                    justifyContent: "flex-start"
                }}
            >
                <Ionicons name={icon} size={30} color="tomato" />
                <Text style={{ fontSize: 20, marginLeft: 10 }}>
                    {title}: {info}
                </Text>
            </View>
        )
    }
}
