import React from "react";
import { StyleSheet, Text, View } from "react-native";


type titleProps = {
    tile: string
}

const Title = ({ tile }: titleProps) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15 }}>
            <View><Text style={{ color: 'red', fontWeight: 'bold' }}>{tile}</Text></View>
            <View><Text>Xem thêm</Text></View>
        </View>
    )
}

export default Title