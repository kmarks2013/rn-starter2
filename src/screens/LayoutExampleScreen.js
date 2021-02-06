import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const LayoutExampleScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    )
}

export default LayoutExampleScreen

const styles = StyleSheet.create({
    viewStyle:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle:{
        height:100,
        width:100,
        backgroundColor:'blue'
    },
    viewTwoStyle:{
        height:100,
        width:100,
        backgroundColor:'red',
        top: 100
    },
    viewThreeStyle:{
        height:100,
        width:100,
        backgroundColor:'green'
    }
})
