import {View, Text} from 'react-native';
import React from 'react';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const SongRow = ({song}: any) => {
  return (
    <View
      style={{
        backgroundColor: 'yellowgreen',
        borderColor: 'black',
        borderWidth: 1,
      }}>
      <Text>SongRow</Text>
      {song?.name}
      {/* <Ionicons name="heart-outline" size={30} /> */}
    </View>
  );
};

export default SongRow;
