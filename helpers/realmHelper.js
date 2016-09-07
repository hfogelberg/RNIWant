import React from 'react';
import Realm from 'realm';
import Moment from 'moment';

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
  static saveItem(values) {
    console.log('Realm file path: ' + realm.path);
    let theCost = parseFloat(values.cost);

    realm.write(() => {
      realm.create('Items', {
        caption: values.caption,
        comment: values.comment,
        boughtDate: values.boughtDate,
        cost: theCost,
        itemType: values.itemType[0],
        status: 'NEW'
      })
    })
  }
}
