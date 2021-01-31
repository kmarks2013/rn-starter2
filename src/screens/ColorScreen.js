import React, {useState} from 'react'
import { StyleSheet, Button, View } from 'react-native'

const ColorScreen = () => {
    return (
        <View>
            <Button title="Add a Color" />
            <View style={{height: 100, width: 100, backgroundColor:'rgb(0, 255, 0)'}} />
        </View>
    )
}

export default ColorScreen

const styles = StyleSheet.create({})
