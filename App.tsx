import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicio from './pantallas/inicio';
import perfil_vr from './pantallas/perfil_vg';
import perfil_vg from './pantallas/perfil_vg';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element{
  return <NavigationContainer> 
    <Stack.Navigator>
      <Stack.Screen name='Back' component={Inicio}/>
      <Stack.Screen name='vg' component={perfil_vg}/>
    </Stack.Navigator>
  </NavigationContainer>
  
}

export default App;