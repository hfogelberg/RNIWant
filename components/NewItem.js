import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigator
} from 'react-native';
import styles from '../styles/styles';
import {
  GiftedForm,
  GiftedFormManager
} from 'react-native-gifted-form';

const NewItem = React.createClass({
  render() {
    return (
      <GiftedForm
        formName='itemForm'
        openModal={(route) => {
          navigator.push(route); // The ModalWidget will be opened using this method. Tested with ExNavigator
        }}
        validators={{
          caption: {
            title: 'Caption',
            validate: [{
              validator: 'isLength',
              arguments: [3, 23],
              message: '{TITLE} must be between {ARGS[0]} and {ARGS[1]} characters'
            }]
          }
        }}

        defaults={{
          caption: ''
        }}>

        <GiftedForm.TextInputWidget
          name='caption'
          autoComplete={false}
          autoCorrect={false}
          autoCapitalize="sentences"
          spellcheck={false}
          title='Caption'
          clearButtonMode='while-editing'
          autoFocus={true}
        />


      <GiftedForm.SeparatorWidget/>

      <GiftedForm.TextAreaWidget
          autoComplete={false}
          autoCorrect={false}
          autoCapitalize="sentences"
          spellcheck={false}
          name='comment'
          title='Comment'
          placeholder='Some details'
          clearButtonMode='while-editing'
        />

        <GiftedForm.SeparatorWidget/>

        <GiftedForm.SelectWidget name='gender' title='Type' multiple={false}>
        <GiftedForm.OptionWidget title='Allowance' value='Allowance'/>
          <GiftedForm.OptionWidget title='Object' value='Object'/>
          <GiftedForm.OptionWidget title='More Money' value='More Money'/>
          <GiftedForm.OptionWidget title='Activity' value='Activity'/>
          <GiftedForm.OptionWidget title='Edible' value='Edible'/>
          <GiftedForm.OptionWidget title='Travel' value='Travel'/>
          <GiftedForm.OptionWidget title='Other' value='Other'/>
        </GiftedForm.SelectWidget>

        <GiftedForm.SeparatorWidget />

        <GiftedForm.DatePickerIOSWidget
          name='birthday'
          mode='date'

          getDefaultDate={() => {
            return new Date(((new Date()).getFullYear() - 18)+'');
          }}
        />

        <GiftedForm.SeparatorWidget/>

        <GiftedForm.TextInputWidget
          name='cost'
          keyboardType='number-pad'
          title='Cost'
          clearButtonMode='while-editing'
          autoFocus={true}
        />

        <GiftedForm.SeparatorWidget/>

      <GiftedForm.SubmitWidget
          title='Save'
          widgetStyles={{
            submitButton: {
              backgroundColor: 'orange',
            }
          }}
          onSubmit={(isValid, values, validationResults, postSubmit = null, modalNavigator = null) => {
            if (isValid === true) {
              console.log('Valid');
              postSubmit();
              GiftedFormManager.reset('locationForm');
              this.saveFormData(values.caption, values.comment)
            } else {
              console.log('Not valid');
            }
          }}
        />
      </GiftedForm>
    )
  }
})

export default NewItem;
