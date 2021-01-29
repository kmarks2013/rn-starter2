import React from "react";
import {View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = () => {
  return(
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        title="Go to Components Demo"
      />
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
