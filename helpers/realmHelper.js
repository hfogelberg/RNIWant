import React from 'react';
import Realm from 'realm';
import Moment from 'moment';
import _ from 'underscore';

let realm = new Realm({
  schema: [{
    name: 'Items',
    properties: {
      caption: 'string',
      comment: 'string',
      boughtDate: 'date',
      cost: 'float',
      itemType: 'string',
      status: 'string'
    }}]
});


export default class RealmHelper {
  static saveItem(item) {
    console.log('saveItem:' + item);
    console.log(item.caption);
    console.log('Realm file path: ' + realm.path);
    let theCost = parseFloat(item.cost);

    try{
      realm.write(() => {
        realm.create('Items', {
          caption: item.caption,
          comment: item.comment,
          boughtDate: item.boughtDate,
          cost: theCost,
          itemType: item.itemType,
          status: 'NEW'
        })
      })
    } catch(err) {
      console.log('Error saving to Realm', err );
    }
  }

  static getItems() {
    let items = realm.objects('Items');
    return items;
  }
}
