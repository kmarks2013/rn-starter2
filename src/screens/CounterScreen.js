import React, { useState, useReducer } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const reducer = (state, action) => {
    //state === {counter: number}
    // action === {type: "increase" || "decrease", payload? <-- not needed }
    switch(action.type){
        case 'increase':
            return {...state, counter: state.counter + 1 }
        case 'decrease':
            return {...state, counter: state.counter - 1}
        default:
            return state
    }
}

const  CounterScreen = () => {
    // incorrect way to handle state
    // let counter= 0
    // const [counter, setCounter] = useState(0)
    const [state, dispatch] = useReducer(reducer, {counter: 0})
    const {counter} = state

    return (
        <View>
            <Button
            title="Increase"
            onPress={() => {
                // dont update state directly
                // counter++
                // setCounter(counter + 1)
            }}
            />
            <Button
            title="Decrease"
            onPress={() => {
                // dont update state directly
                // counter--
                // setCounter(counter - 1)
            }}
            />
            <Text>Current Count: {counter}</Text>
        </View>
    )
}

export default  CounterScreen

const styles = StyleSheet.create({})
