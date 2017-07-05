import React, { Component } from 'react';
import {
  Image,
  View,
  ListView,
  StyleSheet,
  Text,
  TouchableHighlight

} from 'react-native';

import SelectedPhoto from './SelectedPhoto';

class ViewPhotos extends Component {
  state = {
    ds: new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    }),
    showSelectedPhoto: false,
    uri: ''
  }


  renderRow(rowData) {
    const { uri } = rowData.node.image;
    return (
      <TouchableHighlight
        onPress={() => this.setState({ showSelectedPhoto: true, uri: uri })}>
        <Image
          source={{ uri: rowData.node.image.uri }}
          style={styles.image} />
      </TouchableHighlight>
    )
  }

  render() {
    const { showSelectedPhoto, uri } = this.state;

    if (showSelectedPhoto) {
      return (
        <SelectedPhoto
          uri={uri} />
      )
    }
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignItems: 'center', marginTop: 15 }}>
          <Text style={{ fontSize: 20, fontWeight: '600' }}>Pick A Photo </Text>
        </View>
        <ListView
          contentContainerStyle={styles.list}
          dataSource={this.state.ds.cloneWithRows(this.props.photoArray)}
          renderRow={(rowData) => this.renderRow(rowData)}
          enableEmptySections={true} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  image: {
    width: 110,
    height: 120,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#979797'
  }
})

export default ViewPhotos;