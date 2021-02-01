import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const ColorCounter = ({ color }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title="Increase Red" />
            <Button title="Decrease Red" />
        </View>
    )
}

export default ColorCounter

const styles = StyleSheet.create({})
