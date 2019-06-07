import React, { Component } from 'react';
import { View, Text } from 'react-native';

class BookDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.item.title : 'Unknown title for the selected book'
    };
  };

  render() {
    return (
      <View>
        <Text>{/* TODO: to give a proper detail to each book */}</Text>
      </View>
    );
  }
}

export default BookDetail;
