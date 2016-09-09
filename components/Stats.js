import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import styles from '../styles/styles';

class Stats extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.text}>
          Stats Page
        </Text>
      </View>
    )
  }
}

module.exports = Stats;
