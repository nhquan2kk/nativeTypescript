import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";


const ListCategory = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.item}><Image source={require('../../assets/img/typeScript.png')} style={{ width: '100%', height: 80 }} /></View>
                <View style={styles.item}><Image source={require('../../assets/img/typeScript.png')} style={{ width: '100%', height: 80 }} /></View>
                <View style={styles.item}><Image source={require('../../assets/img/typeScript.png')} style={{ width: '100%', height: 80 }} /></View>
                <View style={styles.item}><Image source={require('../../assets/img/typeScript.png')} style={{ width: '100%', height: 80 }} /></View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        width: '20%',
        borderWidth: 1,
        borderColor: '#000',
        overflow: 'hidden',
        borderRadius: 10
    }
})
export default ListCategory