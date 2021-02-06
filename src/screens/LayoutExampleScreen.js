import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LayoutExampleScreen = () => {
    return (
        <View>
            <View style={styles.viewOneStyle}></View>
            <View></View>
            <View></View>
        </View>
    )
}

export default LayoutExampleScreen

const styles = StyleSheet.create({
    viewOneStyle:{
        height:100,
        width:100,
        backgroundColor:'blue'
    },
    viewTwoStyle:{
        height:100,
        width:100,
        backgroundColor:'blue'
    },
})
