import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Home = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
