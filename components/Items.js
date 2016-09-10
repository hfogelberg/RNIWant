import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Navigator,
  TouchableOpacity
} from 'react-native';
import styles from '../styles/styles';
import RealmHelper from '../helpers/realmHelper';
import ShowItem from './ShowItem';

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
      <View>
        <View style={styles.itemsListHeader}>
          <TouchableOpacity
            onPress={this.addItemPressed.bind(this)}>
            <Text style={styles.addItemBtn}>New Item</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.itemsContainer}>
          {this.iterateItems()}
        </View>
      </View>
    )
  }

  iterateItems() {
    if (this.state.items.length > 0) {
      return this.state.items.map((item) => {
        return (
          <View
            style={styles.item}
            key={item.caption} >
            <TouchableOpacity onPress={() => this.onItemPress(item)}>
              <Text style={styles.itemText}>{item.caption}</Text>
            </TouchableOpacity>
          </View>
        )
      });
    }
  }

  onItemPress(item) {
    console.log('onItemPress: ' + item.caption);
    this.props.navigator.push({
     id: 'ShowItem',
     passProps: {
       item: item
     }
   });
  }

  addItemPressed() {
    this.props.navigator.push({
     id: 'NewItem'
   });
  }
}

export default Items;
