import React, {useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {useState} from 'react/cjs/react.development';
import axios from '../../utils/axios';
import {getUser, setDataTicketBooking} from '../../stores/actions/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import Notification from '../Notification/index';
export default function Profile({navigation}) {
  const user = useSelector(state => state.user);
  const userInformation = user.users[0];

  const dispatch = useDispatch();
  const [orderHistories, setOrderHistories] = useState([]);
  const getOrderHistoryUserBuyTicket = async () => {
    try {
      const response = await axios.get('booking/user-id');

      setOrderHistories(response.data.data);
    } catch (error) {
      new Error(error.response);
    }
  };
  console.log(orderHistories);

  useEffect(() => {
    async function getTicketActive() {
      const response = await axios.get('booking/user-id');
      const ticketActive = response.data.data.filter(
        value => value.statusPayment === 'Success',
      );
      Notification.reminderSomeTicket(
        `Hello ${userInformation.firstName} ${userInformation.lastName}`,
        `You Have ${ticketActive.length} Ticket to use, happy watching!`,
      );
    }
    getTicketActive();
    getOrderHistoryUserBuyTicket();
    // getDataUser();
    // dispatch(getUser());
  }, []);

  return (
    <ScrollView>
      <Toast />

      <View>
        <ScrollView>
          {orderHistories.length > 0 ? (
            orderHistories.map(item => (
              <View style={styles.orderhistory_card} key={item.id}>
                <View style={styles.orderhistory_card_body}>
                  <Text style={styles.orderhistory_card_date}>
                    {new Date(item.dateBooking).toDateString()} -{' '}
                    {item.timeBooking.substring(0, 5) >= 18
                      ? `${item.timeBooking.substring(0, 5)} pm`
                      : `${item.timeBooking.substring(0, 5)} am`}
                  </Text>
                  <Text style={styles.orderhistory_card_movie}>
                    {item.name}
                  </Text>
                </View>
                <View
                  style={{
                    borderColor: '#DEDEDE',
                    borderWidth: 1,
                    borderStyle: 'solid',
                    marginBottom: 24,
                  }}></View>
                <TouchableHighlight
                  underlayColor="none"
                  onPress={() =>
                    navigation.navigate('TicketResult', {query: item.id})
                  }
                  style={styles.orderhistory_card_button_active}>
                  <Text style={styles.orderhistory_card_button_title}>
                    {item.statusUsed === 'Active'
                      ? 'Ticket in Active'
                      : item.statusUsed === 'notActive'
                      ? 'ticket not active'
                      : item.statusUsed === 'alreadyUsed'
                      ? 'ticket Used'
                      : null}
                  </Text>
                </TouchableHighlight>
              </View>
            ))
          ) : (
            <Text
              style={{
                fontSize: 28,
                color: '#000000',
                textAlign: 'center',
                marginTop: 20,
              }}>
              Order History is Empty.
            </Text>
          )}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  orderhistory_card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    elevation: 1,
    marginTop: 32,
  },
  orderhistory_card_body: {
    padding: 25,
  },
  orderhistory_card_image: {
    width: 50.72,
    height: 17.08,
    resizeMode: 'contain',
  },
  orderhistory_card_date: {
    marginTop: 18,
    color: '#AAAAAA',
    fontSize: 13,
    fontWeight: '400',
    marginBottom: 4,
  },
  orderhistory_card_movie: {
    fontSize: 18,
    marginTop: 4,
    fontWeight: '600',
    color: '#000000',
  },
  orderhistory_card_button_title: {
    fontWeight: '700',
    fontSize: 14,
    color: '#F7F7FC',
    textAlign: 'center',
  },
  orderhistory_card_button_active: {
    backgroundColor: '#00BA88',
    borderRadius: 8,
    paddingVertical: 12,
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 32,
  },
  orderhistory_card_button_used: {
    backgroundColor: '#6E7191',
    borderRadius: 8,
    paddingVertical: 12,
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 32,
  },
});
