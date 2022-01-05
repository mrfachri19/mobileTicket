import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import Home from '../screen/Home';
import MovieDetail from '../screen/MovieDetail';
import Order from '../screen/Order';
import Payment from '../screen/Payment';
import TicketResult from '../screen/TicketResult';
import Profile from '../screen/Profile';
import OrderHistory from '../screen/OrderHistory';

import DrawerContent from '../components/DrawerContent';

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="Home"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={MovieDetail}
        name="MovieDetail"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={Order}
        name="Order"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Profile}
        name="Profile"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={OrderHistory}
        name="OrderHistory"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function PaymentNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Payment}
        name="Payment"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={TicketResult}
        name="TicketResult"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function AppNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        component={HomeNavigator}
        name="HomeNavigator"
        options={{
          title: 'Home',
        }}
      />
      <Drawer.Screen
        component={ProfileNavigator}
        name="ProfileNavigator"
        options={{
          title: 'Profile',
        }}
      />
      <Drawer.Screen
        component={PaymentNavigator}
        name="PaymentNavigator"
        options={{
          title: 'Payment',
        }}
      />
    </Drawer.Navigator>
  );
}

export default AppNavigator;
