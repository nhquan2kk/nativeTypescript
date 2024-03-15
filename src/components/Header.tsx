import React from "react";
import { View, StyleSheet, Text, Image } from "react-native"


const Header = () => {
    return (
        <>
            <View style={styles.container}>
                <View>
                    <Text style={styles.txt}>Native0</Text>
                </View>
                <View>
                    <Image source={require('../../assets/img/logo.png')} style={styles.img} />
                </View>
            </View >
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15

    },
    img: {
        height: 77,
        width: 77,
    },
    txt: {
        fontFamily: 'Inter',
        fontSize: 14,
        color: 'red',
        lineHeight: 16.94,
        fontWeight: '700',
        textTransform: 'uppercase'

    }

})
export default Header