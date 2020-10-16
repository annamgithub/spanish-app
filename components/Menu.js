import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';

function Menu({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text style={styles.gameTitle}>Speedy Spanish</Text>
  
        <Text style={styles.subtitle}>Vocabulary and conjugation drills for people who want to learn fast.</Text>
        <Button
          title='Vocabulary'
          onPress={() => navigation.navigate('Vocabulary')}
          titleStyle={{
            color: "#FFFFFF",
            fontSize: 18,
          }}
          buttonStyle={{
            backgroundColor: '#215D98',
            width: 250,
            paddingVertical: 20,
            paddingHorizontal: 15,
            marginHorizontal: 100,
            marginVertical: 10,
          }}
        />
        <Button
          title='Conjugations'
          onPress={() => navigation.navigate('Conjugations')}

          titleStyle={{
            color: "#FFFFFF",
            fontSize: 18,
          }}
          buttonStyle={{
            backgroundColor: '#215D98',
            width: 250,
            paddingVertical: 20,
            paddingHorizontal: 15,
            marginHorizontal: 100,
          }}
        />
      </View>
    )
  }

export default Menu

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    gameTitle: {
      fontSize: 35,
      paddingHorizontal: 10,
      textAlign: 'center',
      fontWeight: '900',
    },
    subtitle: {
      color: '#333',
      fontSize: 20,
      marginVertical: 20,
      paddingHorizontal: 50,
      textAlign: 'center',
    },
  
  });
