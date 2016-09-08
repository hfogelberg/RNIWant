import React from 'react';
import {
  StyleSheet,
  Navigator,
  View,
  Text,
  TextInput
} from 'react-native';
import styles from '../styles/styles';
import RealmHelper from '../helpers/realmHelper';
import DatePicker from 'react-native-datepicker';
import ModalPicker from 'react-native-modal-picker';
import Button from 'react-native-button';

const NewItem = React.createClass({
  getInitialState: function() {
    return {
      caption: '',
      comment: '',
      date: '',
      amount: 0,
      giftType: ''
    };
  },

  render() {
    let index = 0;
    const pickerData = [
        {key: index++, label: 'Some object'},
        {key: index++, label: 'Allowance'},
        {key: index++, label: 'More money'},
        {key: index++, label: 'Junk food'},
        {key: index++, label: 'Candy'},
        {key: index++, label: 'Movie, concert, etc'},
        {key: index++, label: 'Apps'},
        {key: index++, label: 'Subscription'},
        {key: index++, label: 'Travel'},
        {key: index++, label: 'Other'},
    ];

    return (
      <View style={styles.formContainer}>
        <Text style={styles.textLabel}>Caption</Text>
        <TextInput
          placeholder="Some text"
          style={styles.textInput}
         onChangeText={(caption) => this.setState({caption})}/>
        <Text style={styles.textLabel}>Comment</Text>
        <TextInput
          style={styles.multiline}
          placeholder="Some text"
          multiline={true}
          numberOfLines={6}
          onChangeText={(comment) => this.setState({comment})}/>
        <Text style={styles.textLabel}>Value or amount</Text>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          onChangeText={(amount) => this.setState({amount})}/>
        <Text style={styles.textLabel }>Date</Text>
        <DatePicker
          style={styles.datePicker}
          mode="date"
          onDateChange={(date) => {this.setState({date: date})}}
          placeholder="placeholder"
          format="YYYY-MM-DD"
          minDate="2016-09-01"
          maxDate="2017-09-01"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
        />

        <ModalPicker
            style={styles.picker}
            data={pickerData}
            initValue="What did he/she get?"
            onChange={(option)=>{ this.setState({giftType:option.label})}}/>

        <View style={styles.line} />

        <Button
          style={styles.button}
          styleDisabled={styles.disabledButton}
          onPress={() => this.saveItem()}>
          Press Me!
        </Button>
      </View>
    )
  },

  saveItem: function() {
    let item = {
      caption: this.state.caption,
      comment: this.state.comment,
      boughtDate: this.state.date,
      cost: this.state.amount,
      itemType: this.state.giftType
    };
    console.log(item);
    RealmHelper.saveItem(item);
  }
})

export default NewItem;
