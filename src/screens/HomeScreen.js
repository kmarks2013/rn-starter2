import React from "react";
import {View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = () => {
  return <Text style={styles.text}> Hi there!</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
