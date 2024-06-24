import React from 'react';
import { View, Text, Button } from 'react-native';
import { StyleSheet } from 'react-native-web';

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Text>Home Screen</Text>
      <View style={style.button}>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    margin: 10
  }
})
