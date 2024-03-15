import React from "react"
import { View, Image, Text, StyleSheet } from "react-native"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ListCategory from "./home/ListCategory"
import Title from "./components/Title"
import ListProductCard from "./home/ListProdutCard"

const HomeScreen = () => {
    return (
        <View style={{ paddingHorizontal: 15 }}>
            <Header />
            <Title tile="Danh mục" />
            <ListCategory />
            <Title tile="Sản phẩm" />
            <ListProductCard />
            <Footer />
        </View>
    )
}

const styles = StyleSheet.create({
    category: {
        color: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
export default HomeScreen