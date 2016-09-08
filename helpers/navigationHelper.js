import React, {Platform} from 'react-native';

module.export = function(scene) {
  var componentMap = {
    'NewItem': {
      title: 'NewItem',
      id: 'NewItem'
    },
    'Items': {
      title: 'Items',
      id: 'Items'
    }
  }

  return componentMap[scene];
}
