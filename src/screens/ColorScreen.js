import React, {useState} from 'react'
import { StyleSheet, Button, View, FlatList } from 'react-native'

const ColorScreen = () => {
    const [colors, setColors] = useState([])
    console.log(colors)

    return (
        <View>
            <Button
            title="Add a Color"
            onPress={() => {
                setColors([...colors, randomRgb()])
            }}
            />
            {/* Original code showing a random oclor on render */}
            {/* <View style={{height: 100, width: 100, backgroundColor: randomRgb()}} /> */}
            <FlatList
                data={colors}
                keyExtractor={item => item}
                renderItem={({item}) => {
                    // item === 'rgb(0,0,0)' <-- current index of color array in this ex'
                    return <View style={{height:100, width:100, backgroundColor: item}} />
                }}
            />
        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    return `rgb(${red}, ${green}, ${blue})`
}

export default ColorScreen

const styles = StyleSheet.create({})
