import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {useState} from 'react/cjs/react.development';
import axios from '../../utils/axios';
import {getUser} from '../../stores/actions/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import Notification from '../Notification/notif';
import elips from '../../assets/ebu.png';
import tikit from '../../assets/tiket.png';
import ebu from '../../assets/ebu.png';
import hiflix from '../../assets/hiflix.png';
import cinema from '../../assets/cineone.png';
import yt from '../../assets/yt.png';
import ig from '../../assets/ig.png';
import fb from '../../assets/fb.png';
import twit from '../../assets/twit.png';

function Profile({navigation}) {
  const user = useSelector(state => state.user);
  const userInformation = user.users[0];
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const [orderHistories, setOrderHistories] = useState([]);
  const [dataBooking, setDataBooking] = useState([]);
  console.log(orderHistories);
  const getOrderHistoryUserBuyTicket = async () => {
    try {
      const response = await axios.get('booking/user-id');
      const filterStatusSuccess = response.data.data.filter(
        value => value.statusPayment === 'pending',
      );
      setOrderHistories(filterStatusSuccess);
    } catch (error) {
      new Error(error.response);
    }
  };

  const getDataUser = async () => {
    try {
      const response = await axios.get('user');
      setUsers(response.data.data[0]);
    } catch (error) {
      setUsers([]);
      new Error(error.response);
    }
  };

  useEffect(() => {
    async function getTicketActive() {
      const response = await axios.get('booking/user-id');
      const ticketActive = response.data.data.filter(
        value => value.statusUsed === 'active',
      );
      Notification.reminderSomeTicket(
        `Hello ${userInformation.firstName} ${userInformation.lastName}`,
        `You Have ${ticketActive.length} Ticket to use, happy watching!`,
      );
    }
    getTicketActive();
    getOrderHistoryUserBuyTicket();
    getDataUser();
    dispatch(getUser());
  }, []);

  const handlerUsedTicket = async (id, nameMovie) => {
    try {
      await axios.get(`booking/ticket/${id}`);
      await AsyncStorage.setItem('title', nameMovie);
      console.log(nameMovie);
      dispatch(setDataTicketBooking(id));
      setTimeout(() => {
        navigation.navigate('TicketResult', {
          setDetailTicketBooking: dataBooking,
        });
        getOrderHistoryUserBuyTicket();
      }, 1500);
    } catch (error) {
      new Error(error.response);
    }
  };

  return (
    <>
      <View
        style={{
          backgroundColor: '#FFFFFF',
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
          paddingVertical: 18,
          paddingHorizontal: 24,
          flexDirection: 'row',
          height: 58,
        }}>
        <TouchableOpacity style={{flex: 6}}>
          <Text style={{fontSize: 14, color: '#AAAAAA'}}>Detail Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 6}}>
          <Text style={{fontSize: 14, color: '#14142B'}}>Order History</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.containerprofile}>
          <View style={styles.borderinfo}>
            {orderHistories.length > 0 ? (
              orderHistories.map(item => (
                <View style={styles.profile_card_orderHistory} key={item.id}>
                  <View style={styles.profile_card_orderHistory_body}>
                    <Text style={styles.profile_card_orderHistory_date}>
                      {new Date(item.dateBooking).toDateString()} -{' '}
                      {item.timeBooking.substring(0, 5) >= 18
                        ? `${item.timeBooking.substring(0, 5)}pm`
                        : `${item.timeBooking.substring(0, 5)}am`}
                    </Text>
                    <Text style={styles.profile_card_orderHistory_movie}>
                      {item.title}
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
                      item.statusUsed === 'active'
                        ? handlerUsedTicket(item.id, item.title)
                        : null
                    }
                    style={
                      item.statusUsed === 'active'
                        ? styles.profile_card_orderHistory_button_active
                        : styles.profile_card_orderHistory_button_used
                    }>
                    <Text style={styles.profile_card_orderHistory_button_title}>
                      {item.statusUsed === 'active'
                        ? 'Ticket in active'
                        : 'Ticket Already used'}
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
                Order is Empty.
              </Text>
            )}
          </View>
        </View>
        <View
          style={{backgroundColor: 'white', paddingTop: 75, paddingLeft: 24}}>
          <Image source={tikit} />
          <Text style={{fontSize: 14, color: '#6E7191', marginTop: 15}}>
            Stop waiting in line. Buy tickets {'\n'}conveniently, watch movies
            quietly.
          </Text>
          <Text style={{fontSize: 14, color: '#000000', marginTop: 15}}>
            Explore
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 14,
                color: '#6E7191',
                marginTop: 15,
                flex: 3,
              }}>
              Cinemast
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#6E7191',
                marginTop: 15,
                flex: 3,
              }}>
              Movie List
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#6E7191',
                marginTop: 15,
                flex: 3,
              }}>
              Notification
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: '#6E7191',
              marginTop: 15,
            }}>
            My Ticket
          </Text>
          <Text style={{fontSize: 14, color: '#000000', marginTop: 45}}>
            Our Sponsore
          </Text>
          <View style={{flexDirection: 'row', marginTop: 16}}>
            <Image style={{marginRight: 24}} source={ebu} />
            <Image style={{marginRight: 24}} source={hiflix} />
            <Image style={{marginRight: 24}} source={cinema} />
          </View>
          <Text style={{fontSize: 14, color: '#000000', marginTop: 45}}>
            Follow Us
          </Text>
          <View style={{flexDirection: 'row', marginTop: 16}}>
            <Image style={{marginRight: 41}} source={yt} />
            <Image style={{marginRight: 41}} source={fb} />
            <Image style={{marginRight: 41}} source={twit} />
            <Image style={{marginRight: 41}} source={ig} />
          </View>
          <Text style={{fontSize: 13, color: '#6E7191', marginVertical: 64}}>
            © 2020 Tickitz. All Rights Reserved.
          </Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  containerprofile: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f5f6f8',
  },
  scrollView: {
    marginHorizontal: 0,
  },
  borderinfo: {
    width: 310,
    borderRadius: 24,
    backgroundColor: 'white',
    shadowColor: '#BABABA',
    padding: 40,
    marginBottom: 24,
  },
  input: {
    height: 40,
    marginHorizontal: 0,
    borderWidth: 1,
    padding: 10,
    width: 263,
    borderColor: '#DEDEDE',
  },
  buttonCheckout: {
    height: 40,
    padding: 11,
    backgroundColor: '#00BA88',
    borderRadius: 8,
  },
  buttonCheckouts: {
    height: 40,
    padding: 11,
    backgroundColor: '#6E7191',
    borderRadius: 8,
  },
  profile_card_orderHistory: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    elevation: 1,
    marginTop: 32,
  },
  profile_card_orderHistory_body: {
    padding: 25,
  },
  profile_card_orderHistory_image: {
    width: 50.72,
    height: 17.08,
    resizeMode: 'contain',
  },
  profile_card_orderHistory_date: {
    marginTop: 18,
    color: '#AAAAAA',
    fontSize: 13,
    fontWeight: '400',
    marginBottom: 4,
  },
  profile_card_orderHistory_movie: {
    fontSize: 18,
    marginTop: 4,
    fontWeight: '600',
    color: '#000000',
  },
  profile_card_orderHistory_button_title: {
    fontWeight: '700',
    fontSize: 14,
    color: '#F7F7FC',
    textAlign: 'center',
  },
  profile_card_orderHistory_button_active: {
    backgroundColor: '#00BA88',
    borderRadius: 8,
    paddingVertical: 12,
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 32,
  },
  profile_card_orderHistory_button_used: {
    backgroundColor: '#6E7191',
    borderRadius: 8,
    paddingVertical: 12,
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 32,
  },
});

export default Profile;
