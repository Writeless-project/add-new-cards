import React from 'react';
import { TextInput } from 'react-native';

/**************************************************************************
 * Code taken from https://github.com/facebook/react-native/issues/18890
 * Credit given to: https://github.com/sedevccb
 ***************************************************************************/

export default class VoiceInput extends React.Component {
  state = { value: '' }
  onChangeText = value => console.log(value) || this.setState({ value })
   render() {
    return (
        <TextInput
          onChangeText={this.onChangeText}
          value={this.state.value}
          multiline= {true}
          style={{ borderWidth: 2, borderColor: 'black', height: 48, flex:1, margin: 20 }}
        />
    );
  }
}

