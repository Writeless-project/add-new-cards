import React from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View, Button } from 'react-native';
import { CardList } from './CardList';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';

import { Users } from '../dummyData'

// const cards = [
//   {
//     id: "0",
//     title: Users[0].Journals[0].title,
//     picture: require('../assets/images/first.jpeg'),
//     content: <Text>{ Users[0].Journals[0].Entries[0].contents }</Text>
//   },
//   {
//     id: "1",
//     title: "Wheat Field",
//     picture: require('../assets/images/second.jpeg'),
//     content: <Text>Wheat Field with Cypresses</Text>
//   },
//   {
//     id: "2",
//     title: "Bedroom in Arles",
//     picture: require('../assets/images/third.jpeg'),
//     content: <Text>Bedroom in Arles</Text>
//   },
//   {
//     id: "3",
//     title: "Awesome Picture",
//     picture: require('../assets/images/fourth.jpg'),
//     content: <Text>Awesome Picture</Text>
//   }
// ];

// flatten and format the cards from our dummy data file
const cards = Users.reduce((acc, user) => {
	return acc.concat(user.Journals.reduce((acc, journal) => {
		return acc.concat(journal.Entries.map(entry => {
			return {
				id: entry.id,
				title: entry.title,
				picture: entry.picture,
				content: <Text>{entry.content}</Text>
			}
		}));
	}, []));
}, []);

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };  

  // a little function to add a random extra journal
  addRandomJournal() {
	  var count = Math.random() * 300 * Math.random();
	  cards.push({
		  id: count.toString(),
		  title: `Added Journal #${count}`,
		  picture: require('../assets/images/first.jpeg'),
		  content: <Text>{"This is the journal content stuff"}</Text>
	  });
  }

  render() {
    return (
      <View style={styles.container}>
        <CardList cards={cards} />
		<Button title="Click Me!" onPress={this.addRandomJournal}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
