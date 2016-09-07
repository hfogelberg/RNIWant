import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator
} from 'react-native';
import styles from '../styles/styles';
import RealmHelper from '../helpers/realmHelper';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  componentDidMount() {
    let items = RealmHelper.getItems();
    console.log(items);
    this.setState({items});
  }

  render() {
    return (
      <View style={styles.container}>
        {this.iterateItems()}
      </View>
    )
  }

  iterateItems() {
  if (this.state.items.length > 0) {
    return this.state.items.map((item) => {
      return (
        <View key={item.boughtDate} >
          <Text>{item.caption}</Text>
        </View>
      )
    });
  }
}
}

export default Items;
