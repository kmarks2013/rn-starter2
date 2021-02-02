import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View>
            <Text>Enter Name:</Text>
            {/* by default text inputs do not have styling */}
            <TextInput
                style={styles.input}
                // two important props for text input: autoCapitalize and autoCorrect
                autoCapitalize="none"
                autoCorrect={false}
                value={name}
                onChangeText={(newText) => setName(newText) }
            />
            <Text>My name is: {name}</Text>
            {}
            <Text>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={(newPassword) => setPassword(newPassword)}
            />
            { password.length < 5 ? <Text>Password Must be 5 characters long</Text> : null   }
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
