import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  Text,
  TouchableHighlight
} from 'react-native';

const SelectedPhoto = (props) => {
  const { uri } = props;
  return (
    <View style={styles.container}>
      <Image
        source={{uri: uri}}
        style={styles.image}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    height: 300,
    width: 200
  }
});

export default SelectedPhoto;