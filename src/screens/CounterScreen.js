import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const  CounterScreen = () => {
    // incorrect way to handle state
    // let counter= 0
    const [counter, setCounter] = useState(0)

    return (
        <View>
            <Button
            title="Increase"
            onPress={() => {
                // dont update state directly
                // counter++
                setCounter(counter + 1)
            }}
            />
            <Button
            title="Decrease"
            onPress={() => {
                // dont update state directly
                // counter--
            }}
            />
            <Text>Current Count: {counter}</Text>
        </View>
    )
}

export default  CounterScreen

const styles = StyleSheet.create({})
