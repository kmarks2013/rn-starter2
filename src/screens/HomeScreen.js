import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = () => {
  return(
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        onPress={() => console.log('buton pressed')}
        title="Go to Components Demo"
      />
      <TouchableOpacity></TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
