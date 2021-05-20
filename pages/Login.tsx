import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Login = ({ navigation }: { navigation: any }) => {
  const [email, onChangeEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (password) {
      navigation.navigate('Home');
    } else {
      Alert.alert('오류', '비밀번호가 틀렸어요.', [
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ]);
    }
  };

  const handleForgot = () => {
    navigation.navigate('Forgot');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginBox}>
        <View style={styles.loginBoxMain}>
          <Text style={styles.title}>회원이세요? 로그인하세요!</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="email"
          />
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry
            placeholder="password"
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
            <Text style={styles.loginButtonText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginBoxFooter}>
          <TouchableOpacity style={styles.forgotButton} onPress={handleForgot}>
            <Text style={styles.forgotButtonText}>비밀번호를 잊으셨나요?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(206, 236, 254)',
    height: '100%',
  },
  loginBox: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    borderColor: 'gainsboro',
    borderWidth: 2,
  },
  loginBoxMain: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  loginBoxFooter: {
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderColor: 'gainsboro',
    borderWidth: 1,
    padding: 10,
    fontSize: 18,
    width: '100%',
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: 'dodgerblue',
    width: '100%',
    fontSize: 18,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: '700',
  },
  forgotButton: {
    width: '100%',
    borderTopColor: 'gainsboro',
    borderTopWidth: 1,
    height: 45,
    backgroundColor: 'whitesmoke',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  forgotButtonText: {
    color: 'grey',
  },
});

export default Login;
