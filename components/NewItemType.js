import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import styles from '../styles/styles';

class NewItemType extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.text}>
          NewItemType Page
        </Text>
      </View>
    )
  }
}

module.exports = NewItemType;
