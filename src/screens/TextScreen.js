import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('')

    return (
        <View>
            <Text>Text Screen</Text>
            {/* by default text inputs do not have styling */}
            <TextInput
                style={styles.input}
                // two important props for text input: autoCapitalize and autoCorrect
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
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
