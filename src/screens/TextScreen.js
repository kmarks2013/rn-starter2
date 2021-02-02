import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {
    return (
        <View>
            <Text>Text Screen</Text>
            {/* by default text inputs do not have styling */}
            <TextInput />
        </View>
    )
}

export default TextScreen

const styles = StyleSheet.create({})
