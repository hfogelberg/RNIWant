import React, {Platform} from 'react-native';

module.export = function(scene) {
  var componentMap = {
    'NewItem': {
      title: 'NewItem',
      id: 'NewItem'
    }
  }

  return componentMap[scene];
}
