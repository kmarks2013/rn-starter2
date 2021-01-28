import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

const ComponentsScreen = () => {

    const greeting = "Hi there!"
    const newGreet = <Text>Hello to you!</Text>

    return (
        <View>
            <Text style={styles.textStyle} >Getting started with react native!</Text>
            <Text>{greeting}</Text>
            {/* {newGreet} */}
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    }
})

export default ComponentsScreen