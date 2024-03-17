import React, { useState } from "react"
import { Pressable, Button, View, Image, Text, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Alert, TextInput } from "react-native"
import Icons from 'react-native-vector-icons/Fontisto'
import Icons2 from 'react-native-vector-icons/MaterialIcons'
import CheckBox from '@react-native-community/checkbox';

const LoginScreen = () => {
    const [isCheck, setIsCheck] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkEmail, setCheckEmail] = useState(true);
    const [errorPassword, setErrorPassword] = useState('');

    const onSubmit = () => {
        let formData = {
            _email: email,
            _password: password,
            _checkBox: isCheck
        }

        //validate Email & password
        let regexEmail = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

        if (!regexEmail.test(formData._email)) {
            setCheckEmail(false)
        } else {
            setCheckEmail(true)
        }

        formData._password === '' ? setErrorPassword('*Password cannot blank ') : setErrorPassword('')

    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'}></StatusBar>
            </View>
            <View style={styles.TitleLogin}>
                <Text style={{ fontWeight: 'bold', fontSize: 30, color: 'black' }}>Login</Text>
                <Text>By signing in you are agreeing</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text>our </Text><TouchableOpacity onPress={() => { Alert.alert(' sau này route sau') }}><Text style={{ color: '#1DA1F2' }}>Term and privacy policy</Text></TouchableOpacity>
                </View>
            </View>
            <View style={{ paddingHorizontal: 25 }}>
                <View style={styles.form}>
                    <View style={styles.mail}>
                        <Icons name="email" style={styles.icon} />
                        <TextInput placeholder="Nhập Email" style={styles.enterMail} onChangeText={(value) => setEmail(value)}></TextInput>
                        <Text style={{ color: 'red' }}>{!checkEmail ? '*Email not invalid' : ''}</Text>
                    </View>
                    <View style={styles.mail}>
                        <Icons2 name="password" style={styles.icon} />
                        <TextInput placeholder="Nhập mật khẩu" secureTextEntry={true} style={styles.enterMail} onChangeText={(value) => setPassword(value)}></TextInput>
                        <Text style={{ color: 'red' }}>{errorPassword}</Text>
                    </View>
                </View>


                <View style={styles.actPw}>
                    <View style={styles.rememberPw}>
                        <CheckBox
                            disabled={false}
                            value={isCheck}
                            onValueChange={() => setIsCheck(!isCheck)}
                            tintColors={{ true: '#1DA1F2' }}
                        />
                        <Text style={{ top: 5 }}>Remember password</Text>
                    </View>
                    <Text style={styles.forgetP} onPress={() => Alert.alert('route quen mat khau')}>Forget password</Text>
                </View>
                <Pressable style={styles.btnLogin} onPress={() => onSubmit()}>
                    <Text style={{ color: 'white' }}>Login</Text>
                </Pressable>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text >or connect with</Text>
            </View>
            <View style={styles.loginWith}>
                <View style={styles.itemLogin} >
                    <Image style={{ width: '100%', height: 50 }} source={require('../assets/img/facebook.jpg')} />
                </View>
                <View style={styles.itemLogin} >
                    <Image style={{ width: '100%', height: 50 }} source={require('../assets/img/instagram.png')} />
                </View>
                <View style={styles.itemLogin} >
                    <Image style={{ width: '100%', height: 50 }} source={require('../assets/img/gmail.png')} />
                </View>

            </View>

            <View style={{ alignItems: 'center' }}>
                <View style={styles.logoApp}>
                    <Image style={{ width: '100%', height: 150, }} source={require('../assets/img/logo.jpg')} />
                </View>
            </View>


        </SafeAreaView >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    TitleLogin: {
        marginTop: 100,
        alignItems: 'center'
    },
    form: {
        marginTop: 50,

    },
    mail: {
        paddingTop: 15
    },
    enterMail: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingLeft: 35
    },
    icon: {
        fontSize: 25,
        position: 'absolute',
        top: 27,
        zIndex: 1000 //zIndex cang cao thi doi tuong se noi len tren
    },
    actPw: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 15
    },
    rememberPw: {
        flexDirection: 'row',
    },
    forgetP: {
        top: 6,
        color: '#1DA1F2'
    },
    btnLogin: {
        borderRadius: 10,
        backgroundColor: '#1DA1F2',
        alignItems: 'center',
        padding: 12,
        marginTop: 40
    },
    loginWith: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'center'



    },
    itemLogin: {
        width: '15%',
        marginLeft: 10,

    },
    logoApp: {
        width: '40%',

    }
})
export default LoginScreen