import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    return (
        <View>
            <ColorCounter
                onIncrease={() => setRed( red + 1 )}
                onDecrease={() => setRed( red - 1 )}
                color="Red"
            />
            <ColorCounter
                color="Green"
                onIncrease={() => setRed( red + 1 )}
                onDecrease={() => setRed( red - 1 )}
            />
            <ColorCounter
                color="Blue"
                onIncrease={() => setRed( red + 1 )}
                onDecrease={() => setRed( red - 1 )}
            />
        </View>
    )
}

export default SquareScreen

const styles = StyleSheet.create({})
