import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  console.log(navigation)

  return(
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
      // shows a prestyled button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"
      />
      <Button
        title='Go to List Demo'
        onPress={() => navigation.navigate('List')}
      />
      {/* <TouchableOpacity
        // shows whatever is inside the opening and closing tags and can be styled
        onPress={() => navigation.navigate('List')}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
      <Button
        title='Go to Image Demo'
        onPress={() => navigation.navigate('Image')}
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
