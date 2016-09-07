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
        formName='locationForm'
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
        }}
      >
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
          placeholder='Some reminder'
          clearButtonMode='while-editing'
        />

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
