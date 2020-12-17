import React from 'react';
import {Text} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';
import {AppStack} from './Screen/StackNavigation';


const App = () => {
  return (
    // <FontAwesome5 name={'facebook'} size={100} color="red"/>
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
}

export default App;