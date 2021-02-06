import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text>
        </View>
    )
}

export default BoxScreen

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        // alignItems: 'flex-start'
        // alignItems: 'center'
        // alignItems: 'flex-end' // <-- depends upon flex direction. if its column its left to right if its row its top to bottom
        // flexDirection: 'column'  default flex direciton
        // flexDirection: 'row',
        // alignItems: 'center'
        // justifyContent: 'center' <-- flex direction will reverse how it works like align items
        // justifyContent: 'flex-end'
        // justifyContent: 'space-between'
        // justifyContent: 'center'
    },
    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1
    },
    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex:1 // <-- cuases elelemnt to take up as much space as possible in the parent
    },
    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 1
    }
})
