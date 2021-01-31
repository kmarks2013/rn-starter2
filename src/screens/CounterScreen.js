import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const  CounterScreen = () => {
    // incorrect way to handle state
    let counter= 0

    return (
        <View>
            <Button title="Increase" />
            <Button title="Decrease" />
            <Text>Current Count: 0</Text>
        </View>
    )
}

export default  CounterScreen

const styles = StyleSheet.create({})
