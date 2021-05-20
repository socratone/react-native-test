import React from 'react';
import { View, Text, Button } from 'react-native';

const Forgot = ({ navigation }: { navigation: any }) => {
  const handlePress = () => {
    navigation.navigate('Login');
  }

  return (
    <View
      style={{
        backgroundColor: 'white',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontSize: 18, marginBottom: 5 }}>아직 비밀번호 찾기 기능은 사용할 수 없어요.</Text>
      <Button title="돌아가기" onPress={handlePress} />
    </View>
  );
};

export default Forgot;
