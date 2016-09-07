import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import styles from '../styles/styles';
import Moment from 'moment';
import Realm from 'realm';

const NewItem = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Text>New Item</Text>
      </View>
    )
  }
})

export default NewItem;
