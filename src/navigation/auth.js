import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Login from '../screen/Login';
import Register from '../screen/Register';

function AuthNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Login} name="Login" />
      <Stack.Screen component={Register} name="Register" />
      {/* <Stack.Screen component={Register} name="Register" /> */}
    </Stack.Navigator>
  );
}

export default AuthNavigator;
