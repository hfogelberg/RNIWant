import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import styles from '../styles/styles';
import Moment from 'moment';

const ShowItem = React.createClass({
  getInitialState: function() {
    return {
      date: ''
    };
  },

  componentDidMount: function() {
    console.log('ShowItem componentDidMount');
    console.log(this.props.item.caption);

    let date = Moment(this.props.item.boughtDate).format('YYYY-MM-DD');
    this.setState({date});
  },

  render() {
    return (
      <View style = {styles.container}>
        <Text style={styles.text}>{this.props.item.caption}</Text>
        <Text style={styles.text}>{this.props.item.comment}</Text>
        <Text style={styles.text}>{this.state.date}</Text>
        <Text style={styles.text}>{this.props.item.cost}</Text>
        <Text style={styles.text}>{this.props.item.itemType}</Text>
      </View>
    )
  }
})

export default ShowItem;
