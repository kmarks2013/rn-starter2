import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {
    return (
        <View>
            <Text>Text Screen</Text>
            {/* by default text inputs do not have styling */}
            <TextInput
                style={styles.input}
                // two important props for text input: autoCapitalize and autoCorrect
                autoCapitalize="none"
                autoCorrect={false}
                value="hi there"
            />
        </View>
    )
}

export default TextScreen

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
})
