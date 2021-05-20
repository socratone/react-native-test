import React from 'react';
import { View, Image, Text } from 'react-native';

type ListItemProps = {
  title: string;
  description: string;
  imageURI: string;
}

const ListItem = ({ title, description, imageURI }: ListItemProps) => {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        padding: 10
      }}
    >
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          paddingRight: 10
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: 3,
          }}
          source={{
            uri: imageURI,
          }}
        />
      </View>
      <View
        style={{
          display: 'flex',
          flexGrow: 1
        }}
      >
        <Text style={{ fontWeight: '700' }}>{title}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ flex: 1, flexWrap: 'wrap' }}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default ListItem;
