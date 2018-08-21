import React from 'react';
import { FlatList } from 'react-native';

import Item from './Item';

export default ({items, onRemove}) => {

  return (
    <FlatList
      style={styles.container}
      data={items}
      renderItem={({item}) => (
        <Item item={item} onRemove={item => onRemove(item)}/>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = {
  container: {
    flex: 1,
    width: '100%',

    // aligncontent: 'stretch',
  }
}