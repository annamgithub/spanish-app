import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import 'react-native-gesture-handler';

function ConMenu({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.gameTitle}>Conjugations</Text>
  
        <Text style={styles.subtitle}>Select the verb tense you wish to focus on.</Text>
        <Button
          title='Present Tense'
          onPress={() => navigation.navigate('Present Tense')}
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
      </View>
    )
  }

export default ConMenu

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