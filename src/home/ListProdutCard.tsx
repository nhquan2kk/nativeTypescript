import React from "react"
import { View, Text, Image, StyleSheet, } from 'react-native'


const ListProductCard = () => {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <View style={styles.sale}>
                    <Text style={{ color: 'white' }}>Sale 30%</Text>
                </View>
                <Image source={require('../../assets/img/pc.jpg')} style={{ width: '100 %', height: 168 }} />
                <View style={styles.dess}>
                    <Text style={styles.dessText}>Title product</Text>
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.sale}>
                    <Text style={{ color: 'white' }}>Sale 30%</Text>
                </View>
                <Image source={require('../../assets/img/pc.jpg')} style={{ width: '100 %', height: 168 }} />
                <View style={styles.dess}>
                    <Text style={styles.dessText}>Title product</Text>
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.sale}>
                    <Text style={{ color: 'white' }}>Sale 30%</Text>
                </View>
                <Image source={require('../../assets/img/pc.jpg')} style={{ width: '100 %', height: 168 }} />
                <View style={styles.dess}>
                    <Text style={styles.dessText}>Title product</Text>
                </View>
            </View>
            <View style={styles.item}>
                <View style={styles.sale}>
                    <Text style={{ color: 'white' }}>Sale 30%</Text>
                </View>
                <Image source={require('../../assets/img/pc.jpg')} style={{ width: '100 %', height: 168 }} />
                <View style={styles.dess}>
                    <Text style={styles.dessText}>Title product</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',

    },
    item: {
        backgroundColor: 'red',
        width: '45%',
        height: 198,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 26

    },
    sale: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: 75,
        top: 10,
        right: 10,
        position: 'absolute',
        zIndex: 1000,
        borderRadius: 15,
        alignItems: 'center'

    },
    dess: {
        backgroundColor: 'black',
        paddingVertical: 8
    },
    dessText: {
        color: 'white',
        textAlign: 'center'
    }
})

export default ListProductCard