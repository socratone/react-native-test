import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, Text, Image } from 'react-native';
import RoundButton from '../components/RoundButton';
import ListItem from '../components/ListItem';

const Home = ({ navigation }: { navigation: any }) => {
  const handlePress = () => {
    navigation.navigate('Notification');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{
          width: 150,
          height: 150,
          borderRadius: 75,
          marginTop: 20,
          marginBottom: 20,
        }}
        source={{
          uri: 'https://picsum.photos/300',
        }}
      />
      <Text style={{ fontSize: 18, marginBottom: 20 }}>Welcome to my app!</Text>
      <RoundButton onPress={handlePress}>
        Getting Started
      </RoundButton>
      <ScrollView style={{ width: '100%', backgroundColor: 'whitesmoke', marginTop: 20 }}>
        <ListItem title="Google" description="Lorem ipsum dolor sit amet" imageURI="https://picsum.photos/100"/>
        <ListItem title="Facebook" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, non" imageURI="https://picsum.photos/101"/>
        <ListItem title="Instagram" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, non" imageURI="https://picsum.photos/102"/>
        <ListItem title="Naver" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, non" imageURI="https://picsum.photos/103"/>
        <ListItem title="Netlify" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, non" imageURI="https://picsum.photos/104"/>
        <ListItem title="Github" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, non" imageURI="https://picsum.photos/105"/>
        <ListItem title="Kakao" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, non" imageURI="https://picsum.photos/106"/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
});

export default Home;
