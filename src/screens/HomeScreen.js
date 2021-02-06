import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  // console.log(navigation)

  return(
    <View>
      <Text style={styles.text}>React Native Practice</Text>
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
      <Button
        title='Go to Counter Demo'
        onPress={() => navigation.navigate('Counter')}
      />
      <Button
        title='Go to Color Demo'
        onPress={() => navigation.navigate('Color')}
      />
      <Button
        title='Go to Square Demo'
        onPress={() => navigation.navigate('Square')}
      />
      <Button
        title='Go to Text Input Demo'
        onPress={() => navigation.navigate('Text')}
      />
      <Button
        title='Go to Box Demo'
        onPress={() => navigation.navigate('Box')}
      />
      <Button
        title='Go to Layout Example Demo'
        onPress={() => navigation.navigate('Layout')}
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
