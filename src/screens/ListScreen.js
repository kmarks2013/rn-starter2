import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: "Friend #1"/*, key: "1" <--Option 1 for adding a key*/},
        { name: "Friend #2"},
        { name: "Friend #3"},
        { name: "Friend #4"},
        { name: "Friend #5"},
        { name: "Friend #6"},
        { name: "Friend #7"},
        { name: "Friend #8"},
        { name: "Friend #9"}
    ]

    return (
        <FlatList
            // option 2:
            keyExtractor={(friend) => friend.name}
            data={friends}
            renderItem={({item}) => {
                return <Text>{item.name}</Text>
            }}
        />
    )
}

const styles = StyleSheet.create({})

export default ListScreen