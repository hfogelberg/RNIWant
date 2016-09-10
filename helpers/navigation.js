import React, { Platform } from 'react-native';
import _ from 'underscore';

module.exports = function (scene) {
    var componentMap = {
        'About': {
            title: 'About Page',
            id: 'About'
        },
        'Items': {
            title: 'Items Page',
            id: 'Items'
        },
        'New Item': {
          title: 'New Item Page',
          id: 'NewItem'
        },
        'Settings': {
          title: 'Settings',
          id: 'Settings'
        },
        'Stats': {
          title: 'Settings Page',
          id: 'Settings'
        },
        'ShowItem': {
          title: 'Show item',
          id: 'ShowItem'
        },
        'NewItemType': {
          title: 'New Item Type',
          id: 'NewItemType'
        }
    }

    return componentMap[scene];
}
