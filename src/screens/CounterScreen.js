import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const  CounterScreen = () => {
    // incorrect way to handle state
    let counter= 0

    return (
        <View>
            <Button title="Increase" onPress={() => {
                conter++
            }} />
            <Button title="Decrease" onPress={() => {
                counter--
            }} />
            <Text>Current Count: {counter}</Text>
        </View>
    )
}

export default  CounterScreen

const styles = StyleSheet.create({})
