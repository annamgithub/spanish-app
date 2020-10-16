import React from 'react';
import Menu from './components/Menu.js'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardRoot from './components/CardRoot.js'
import ConMenu from './components/ConMenu.js'
import ConPresent from './components/ConPresent'


const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
      }
  }
  render() {
    return (
    <NavigationContainer >
      <Stack.Navigator
        screenOptions={{ headerShown: true }} //Set as false to hide header in stack navigator React navigation.
        initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Vocabulary" component={CardRoot} />
        <Stack.Screen name="Conjugations" component={ConMenu} />
        <Stack.Screen name="Present Tense" component={ConPresent} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
}

export default App;