import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const ImageDetail = ( {title} ) => {

    return (
        <View>
            <Image source={require('../../assets/beach.jpg')} />
            <Text>{title}</Text>
        </View>
    )
}

export default ImageDetail

const styles = StyleSheet.create({})
