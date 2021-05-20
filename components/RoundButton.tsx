import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type RoundButtonProps = {
  onPress: () => void;
  children: string;
  fontColor?: string;
  buttonColor?: string;
};

const RoundButton = ({
  onPress,
  children,
  fontColor = 'white',
  buttonColor = 'dodgerblue',
}: RoundButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: buttonColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: fontColor }]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 23,
    height: 45,
    paddingHorizontal: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default RoundButton;
