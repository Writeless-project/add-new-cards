import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { CardList } from '../components/CardList';
import AddNewButton from '../components/AddNewButton';
import CardView from 'react-native-cardview';
import { styles } from '../constants/styles';

import { Users } from '../dummyData';

// format the cards from our dummy data file
const cards = Users.reduce((userArr, user) => {
  return userArr.concat(user.Journals.map(journal => {
    return {
      id: journal.id,
      title: journal.title,
      max_size: journal.max_size,
      font_size: journal.font_size,
      font_family: journal.font_family,
      page_color: journal.page_color,
      picture: journal.picture,
      published: journal.published,
      owner: user.first_name,
      content: journal.Entries.map((entry, i) => {
        return (
          <CardView
            cardElevation={5}
            cardMaxElevation={5}
            cornerRadius={5}
            key={i} //stupid RN warning
            style={styles.cardViewStyle}>
            <Text style={styles.cardViewText}>{entry.title}</Text>
          </CardView>
        );
      })
    }
  }));
}, []);

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: cards
    }
  }

  static navigationOptions = {
    header: null,
  }; 

  //TODO: fix this
  //TODO: Modify state
  addRandomJournal() {
    let last = this.state.cards.length - 1;
    let newId = this.state.cards[last].id;
    let name = this.state.cards[last].owner;

    //avoid race conditions with this version of setState
    this.setState(prevState => {
      return {
        cards: prevState.cards.push({
          id: newId.toString(),
          title: `Just added Journal #${newId} for ${name}`,
          picture: require('../assets/images/first.jpeg'),
          content: <Text>{'Create an entry!'}</Text>
        }),
      }
    });
  }

  render() {
    return (
      <View style={styles.homePageContainer}>
        <StatusBar
          backgroundColor='#4e7373'
          barStyle="dark-content"
          hidden={false}
        />
        <CardList cards={this.state.cards} props={cards.entries}/>
        <AddNewButton onBtnPress={this.addRandomJournal.bind(this)} />
      </View>
    );
  }
}
