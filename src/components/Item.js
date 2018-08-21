import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';


export default ({item, onRemove}) => {
  console.log('render Item', item);
  return (
    <TouchableOpacity onPress={() => onRemove(item)}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: item.uri}}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    // alignContent: 'stretch',
    // width: '100px',
    // height: '200px',
    width: '100%',
    height: 200,
    alignSelf: 'stretch',
  },
});
//style={{ width: '100%', height: 200 }}
