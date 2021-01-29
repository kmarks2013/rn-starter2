import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail title="Forest" imageSource="../../assets/forest.jpg"/>
            <ImageDetail title="Beach"/>
            <ImageDetail title="Mountain"/>
        </View>
    )
}

export default ImageScreen

const styles = StyleSheet.create({})
