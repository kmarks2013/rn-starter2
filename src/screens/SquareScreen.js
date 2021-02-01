import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15

const SquareScreen = () => {
    const [red, setRed] = useState(0)
    const [green, setGreen] = useState(0)
    const [blue, setBlue] = useState(0)

    return (
        <View>
            <ColorCounter
                //bad example:
                // onIncrease={() => {
                //     if (red + COLOR_INCREMENT > 255)
                //         setRed( red + COLOR_INCREMENT)
                // }}
                onIncrease={() => setRed( red + COLOR_INCREMENT )}
                onDecrease={() => setRed( red - COLOR_INCREMENT )}
                color="Red"
            />
            <ColorCounter
                color="Green"
                onIncrease={() => setGreen( green + COLOR_INCREMENT )}
                onDecrease={() => setGreen( green - COLOR_INCREMENT )}
            />
            <ColorCounter
                color="Blue"
                onIncrease={() => setBlue( blue + COLOR_INCREMENT )}
                onDecrease={() => setBlue( blue - COLOR_INCREMENT )}
            />
            <View style={{ height:150, width:150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
        </View>
    )
}

export default SquareScreen

const styles = StyleSheet.create({})
