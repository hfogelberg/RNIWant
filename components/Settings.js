import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import styles from '../styles/styles';

class Settings extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.text}>
          Settings Page
        </Text>
      </View>
    )
  }
}

module.exports = Settings;
