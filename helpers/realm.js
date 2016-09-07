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
      status: 'string',
      soldDate: 'date',
      soldPrice: 'float'
    }}]
});
