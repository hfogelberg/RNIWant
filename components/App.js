import React, {Component} from 'react';
import {
  DeviceEventEmitter,
  View,
  Text,
  TouchableOpacity,
  Navigator,
  StyleSheet
} from 'react-native';
import Drawer from 'react-native-drawer';
import {EventEmitter} from 'fbemitter';
import navigationHelper from '../helpers/navigationHelper';
import styles from '../styles/navigation';
import NewItem from './NewItem';
import Items from './Items';
import Menu from './Menu';

let _emitter = new EventEmitter();

class App extends Component{
  componentDidMount() {
    var self = this;

    // Don't show warnings in the simulator
    // console.disableYellowBox = true;

    _emitter.addListener('openMenu', () => {
        self._drawer.open();
    });

    _emitter.addListener('back', () => {
        self._navigator.pop();
    });
  }

  render() {
    return (
      <Drawer
          ref={(ref) => this._drawer = ref}
          type="overlay"
          content={<Menu navigate={(route) => {
              this._navigator.push(navigationHelper(route));
              this._drawer.close()
          }}/>}
          tapToClose={true}
          openDrawerOffset={0.2}
          panCloseMask={0.2}
          closedDrawerOffset={-3}
          styles= {styles.navbar}
          tweenHandler={(ratio) => ({
              main: { opacity:(2-ratio)/2 }
          })}>
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
        </Drawer>
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
          return (
            <TouchableOpacity
              style={styles.navBarLeftButton}
              onPress={() => {_emitter.emit('openMenu')}}>
              <Text>Menu</Text>
            </TouchableOpacity>
          )
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
