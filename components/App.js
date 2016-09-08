import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Navigator,
  StyleSheet
} from 'react-native';
import {EventEmitter} from 'fbemitter';
import styles from '../styles/navigation';
import NewItem from './NewItem';
import Items from './Items';

class App extends Component{
  render() {
    return (
      <Navigator
          ref={(ref) => this._navigator = ref}
          configureScene={(route) => Navigator.SceneConfigs.FloatFromLeft}
          initialRoute={{
              id: 'Items',
              title: 'Items',
              index: 0
          }}
          renderScene={(route, navigator) => this._renderScene(route, navigator)}
          navigationBar={
              <Navigator.NavigationBar
                  style={styles.navBar}
                  routeMapper={NavigationBarRouteMapper} />
          }
      />
    );
  }

  _renderScene(route, navigator) {
      switch (route.id) {
        case 'NewItem':
          return (<NewItem navigator={navigator} />);
        case 'Items':
          return (<Items navigator={navigator} />);
      }
    }
  }

  const NavigationBarRouteMapper = {
    LeftButton(route, navigator, index, navState) {
      switch (route.id) {
        case 'NewItem':
          return (
              <TouchableOpacity
                  style={styles.navBarLeftButton}
                  onPress={() => {navigator.pop()}}>
                  <Text>Back</Text>
              </TouchableOpacity>
          )
        default:
          return null;
      }
    },

  RightButton(route, navigator, index, navState) {
        return null;
  },

  Title(route, navigator, index, navState) {
    return  null;
  }
}

export default App;
