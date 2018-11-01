import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Slider from "react-native-slider";
import { styles } from '../constants/styles';
import RNPickerSelect from 'react-native-picker-select';

export default class AddNewNoteScreen extends React.Component {
   constructor(props) {
      super(props);

      this.inputRefs = {}

      this.state = {
         id: '',
         title: '',
         max_size: 10000,
         font_size: 12,
         font_family: 'Roboto',
         page_color: 'white',
         possibleFontFamily: [
            {
               label: 'Roboto',
               value: 'Roboto'
            },
            {
               label: 'Garamond',
               value: 'Garamond'
            },
            {
               label: 'Times New Roman',
               value: 'Times New Roman'
            }
         ],
         possiblePageColor: [
            {
               label: 'White',
               value: 'white'
            },
            {
               label: 'Sepia',
               value: 'sepia'
            }
         ]
      };
   }

   previousPage() {
      this.props.navigator.pop();
   }

   addJournal() {

   }

   render() {
      return (
         <View style={styles.addJournalContainer}>
            <TextInput
               style={styles.addJournalTitleInput}
               autoFocus={true}
               placeholder='Title...'
               placeholderTextColor='#000000'
               returnKeyType='next'
               onChangeText={title => this.setState({ title: title })}
               value={this.state.title}
            />
            <Text
               style={padding=10}   
            >
               Font size: {this.state.font_size}
            </Text>
            <Slider
               value={this.state.font_size}
               minimumValue={8}
               maximumValue={15}
               step={1}
               onValueChange={val => this.setState({ font_size: val })}
            />
            <Text>
               Font Family: {this.state.font_family}
            </Text>
            <RNPickerSelect
               placeholder={{
                  label: 'Select a font...',
                  value: null,
               }}
               items={this.state.possibleFontFamily}
               onValueChange={val => {
                  this.setState({
                     font_family: val,
                  });
               }}
               style={{ ...styles.addJournalIOS }}
               value={this.state.favSport}
               ref={(el) => {
                  this.inputRefs.fontFamily = el;
               }}
            />
            <Text>
               Page Color: {this.state.page_color}
            </Text>
            <RNPickerSelect
               placeholder={{
                  label: 'Select a page color...',
                  value: null,
               }}
               items={this.state.possiblePageColor}
               onValueChange={val => {
                  this.setState({
                     page_color: val,
                  });
               }}
               style={{ ...styles.addJournalIOS }}
               value={this.state.favSport}
               ref={(el) => {
                  this.inputRefs.fontFamily = el;
               }}
            />
         </View>
      );
   }
}