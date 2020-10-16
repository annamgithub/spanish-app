import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated } from 'react-native';
import SwipeCards from 'react-native-swipe-cards';

console.disableYellowBox = true;

const Cards = [
  { noun: 'Swipe card either way to move on to next. Tap card to flip for translation.', english: 'Pase la tarjeta de cualquier manera para pasar a la siguiente. Toque la tarjeta para obtener una traducción.' },
  { noun: 'la noche', english: 'the night' },
  { noun: 'el niño', english: 'the boy' },
  { noun: 'la agua', english: 'the water' },
  { noun: 'la computadora', english: 'the computer' },
  { noun: 'la montaña', english: 'the mountain' },
  { noun: 'la mañana', english: 'the morning' },
  { noun: 'el sol', english: 'the sun' },
  { noun: 'la luna', english: 'the moon' },
  { noun: 'el perro', english: 'the dog' },
]

class CardRoot extends Component {
  constructor() {
    super()
    this.state = {
      cards: Cards,
      outOfCards: false,
      flipped: null,
    }
  }

  flipCard = () => {
    if (this.state.flipped === false) {
      this.setState({ flipped: true })

    } else {
      this.setState({ flipped: false })
    }
  };

  resetCardState = () => {
    this.setState({ flipped: null })
  }

  render() {

    const Card = ({ noun, english }) => {
      if (this.state.flipped === true) {
        { console.log('true'); }
        return (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.text} onPress={() => this.flipCard()}>{noun}</Text>
          </TouchableOpacity>
        )

      }
      else if (this.state.flipped === false) {
        { console.log('false'); }
        return (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.text} onPress={() => this.flipCard()}>{english}</Text>
          </TouchableOpacity>
        )
      } else {
        { console.log('null'); }
        return (
          <View>
            <TouchableOpacity style={styles.card}>
              <Text style={styles.text} onPress={() => this.flipCard()}>{noun}</Text>
            </TouchableOpacity>
          </View>
        )
      }
    }


    return (
      <View style={styles.container}>
        <SwipeCards
          onDragRelease={() => this.resetCardState()}
          cards={this.state.cards}
          loop={false}
          renderCard={(cardData) => <Card {...cardData} />}
        />
      </View>
    )
  }
}
export default CardRoot

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: 'grey',
    backgroundColor: 'white',
    borderWidth: 1,
    elevation: 1,
  },
  text: {
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
    paddingTop: 110,
    paddingHorizontal: 10,
    minWidth: 350,
    maxWidth: 350,
    minHeight: 250,
    maxHeight: 250,
  },
});