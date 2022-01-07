import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import right from '../../assets/rightarrow.png';
import buttom from '../../assets/buttomarrow.png';
import cinemaone from '../../assets/cineone.png';
import tikit from '../../assets/tiket.png';
import ebu from '../../assets/ebu.png';
import hiflix from '../../assets/hiflix.png';
import cinema from '../../assets/cineone.png';
import yt from '../../assets/yt.png';
import ig from '../../assets/ig.png';
import fb from '../../assets/fb.png';
import twit from '../../assets/twit.png';
import Seat from '../../components/Seat';
import Icon from 'react-native-vector-icons/FontAwesome5';
import IconClose from 'react-native-vector-icons/Ionicons';
import {getUser} from '../../stores/actions/user';
import axios from '../../utils/axios';
import {useSelector, useDispatch} from 'react-redux';

function Order({navigation, route}) {
  const dispatch = useDispatch();
  const [questionSeat, setQuestionSeat] = useState(false);
  const [userSeats, setUserSeats] = useState([]);
  const [soldSeat, setSoldSeat] = useState([]);
  const user = useSelector(state => state.user);
  const detailUser = user.users[0];

  const {detailOrder} = route.params;

  const orderDetail = detailOrder[0];
  console.log(orderDetail);

  const {date, dateBooking, movieId, nameMovie, premiere, scheduleId, time} =
    orderDetail;

  const listAlphabet = ['A', 'B', 'C', 'D', 'E', 'F'];

  const userBookSoldSeat = async () => {
    try {
      const response = await axios.get(
        `booking?scheduleId=${scheduleId}&movieId=${movieId}&dateBooking=${dateBooking}&timeBooking=${time}`,
      );
      const seat = response.data.data.map(value => value.seat);
      setSoldSeat(seat);
    } catch (error) {
      new Error(error);
    }
  };

  useEffect(() => {
    dispatch(getUser());
    userBookSoldSeat();
  }, []);

  const chooseSeats = seat => {
    if (userSeats.includes(seat)) {
      const cancelSeat = userSeats.filter(value => value !== seat);
      setUserSeats(cancelSeat);
    } else if (userSeats.length === 10) {
      Alert.alert('Message', 'Are you sure you booked more than 10 seats?', [
        {
          text: 'Cancel',
          style: 'cancel',
          onPress: () => {
            setUserSeats([...userSeats]);
          },
        },
        {
          text: 'OK',
          onPress: () => {
            setUserSeats([...userSeats, seat]);
          },
        },
      ]);
    } else {
      setUserSeats([...userSeats, seat]);
    }
  };
  const goToCheckout = () => {
    navigation.navigate('Payment', {
      userId: detailUser.id, // from redux
      movieId: movieId,
      nameMovie: nameMovie,
      scheduleId: scheduleId,
      dateBooking: dateBooking,
      timeBooking: time,
      seat: userSeats,
      totalPayment: `${userSeats.length * 70000}`,
    });
    console.log(scheduleId);
  };

  const ClearSeats = () => {
    setUserSeats([]);
  };

  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={{fontSize: 18, color: '#14142B', marginTop: 32}}>
            Choose Your Seat
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 16,
              height: 400,
              marginTop: 16,
            }}>
            <View
              style={{
                display: 'flex',
                backgroundColor: '#fff',
                padding: 20,
              }}>
              {/* <Seat /> */}
              <View style={styles.Seat_SeatsContainer}>
                {listAlphabet.map((value, idx) => (
                  <View key={idx}>
                    <Seat
                      keyAlphabet={value}
                      selectedSeats={userSeats}
                      soldSeats={soldSeat}
                      chooseSeats={chooseSeats}
                    />
                  </View>
                ))}
              </View>

              <View style={{marginVertical: 12, marginLeft: 12}}>
                <Text style={{color: '#000', fontSize: 16, fontWeight: '600'}}>
                  Seating key
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                }}>
                <View style={{marginLeft: 12, marginRight: 24}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 12,
                    }}>
                    <Icon
                      name="arrow-down"
                      size={15}
                      color="#6e7191"
                      style={{marginRight: 8}}
                    />
                    <Text>A - G</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 12,
                    }}>
                    <Text
                      style={{
                        backgroundColor: '#D6D8E7',
                        width: 30,
                        height: 30,
                        borderRadius: 4,
                        marginRight: 8,
                      }}
                    />
                    <Text>Available</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 12,
                    }}>
                    <Text
                      style={{
                        backgroundColor: '#F589D7',
                        width: 30,
                        height: 30,
                        borderRadius: 4,
                        marginRight: 8,
                      }}
                    />
                    <Text>Love nest</Text>
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 12,
                    }}>
                    <Icon
                      name="arrow-right"
                      size={15}
                      color="#6e7191"
                      style={{marginRight: 8}}
                    />
                    <Text>1 - 14</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 12,
                    }}>
                    <Text
                      style={{
                        backgroundColor: '#5f2eea',
                        width: 30,
                        height: 30,
                        borderRadius: 4,
                        marginRight: 8,
                      }}
                    />
                    <Text>Selected</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 12,
                    }}>
                    <Text
                      style={{
                        backgroundColor: '#6E7191',
                        width: 30,
                        height: 30,
                        borderRadius: 4,
                        marginRight: 8,
                      }}
                    />
                    <Text>Sold</Text>
                  </View>
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginVertical: 12,
                }}></View>
            </View>
            <Text
              style={{
                marginTop: 229,
                marginLeft: 16,
                fontSize: 16,
                color: '#000000',
              }}>
              Seating Key
            </Text>
            <View style={{flexDirection: 'row', marginLeft: 26, marginTop: 20}}>
              <View style={{flexDirection: 'row', flex: 3}}>
                <Image style={{}} source={buttom} />
                <Text style={{fontSize: 13, color: '#4E4B66'}}>A-G</Text>
              </View>
              <View style={{flexDirection: 'row', flex: 4}}>
                <Image style={{}} source={right} />
                <Text style={{fontSize: 13, color: '#4E4B66'}}>1-14</Text>
              </View>
            </View>
            <View>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <View style={{flexDirection: 'row', flex: 3}}>
                  <TouchableOpacity
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: '#D6D8E7',
                      borderRadius: 4,
                      marginLeft: 16,
                      marginRight: 8,
                    }}
                  />
                  <Text style={{fontSize: 13, color: '#4E4B66'}}>
                    Available
                  </Text>
                </View>
                <View style={{flexDirection: 'row', flex: 4}}>
                  <TouchableOpacity
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: '#5F2EEA',
                      borderRadius: 4,
                      marginLeft: 16,
                      marginRight: 8,
                    }}
                  />
                  <Text style={{fontSize: 13, color: '#4E4B66'}}>Selected</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', marginTop: 16}}>
                <View style={{flexDirection: 'row', flex: 3}}>
                  <TouchableOpacity
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: '#F589D7',
                      borderRadius: 4,
                      marginLeft: 16,
                      marginRight: 8,
                    }}
                  />
                  <Text style={{fontSize: 13, color: '#4E4B66'}}>
                    Love Nest
                  </Text>
                </View>
                <View style={{flexDirection: 'row', flex: 4}}>
                  <TouchableOpacity
                    style={{
                      width: 20,
                      height: 20,
                      backgroundColor: '#6E7191',
                      borderRadius: 4,
                      marginLeft: 16,
                      marginRight: 8,
                    }}
                  />
                  <Text style={{fontSize: 13, color: '#4E4B66'}}>Sold</Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={{fontSize: 18, color: '#14142B', marginTop: 110}}>
            Order Info
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 6,
              height: 354,
              marginTop: 11,
            }}>
            <Image
              style={{marginLeft: 105, marginTop: 32}}
              source={cinemaone}
            />
            <Text
              style={{
                fontSize: 24,
                color: '#14142B',
                textAlign: 'center',
                marginTop: 8,
              }}>
              {premiere}
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#14142B',
                textAlign: 'center',
                marginTop: 7,
              }}>
              {nameMovie}
            </Text>
            <View style={{marginTop: 26, flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 14,
                  color: '#6B6B6B',
                  flex: 7,
                }}>
                {date}
              </Text>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 12,
                  color: '#14142B',
                  flex: 3,
                }}>
                {time >= 18 ? `${time}pm` : `${time}am`}
              </Text>
            </View>
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 14,
                  color: '#6B6B6B',
                  flex: 7,
                }}>
                One ticket price
              </Text>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 12,
                  color: '#14142B',
                  flex: 3,
                }}>
                Rp{' '}
                {premiere === 'Hiflix'
                  ? new Intl.NumberFormat('id-ID').format('70000')
                  : premiere === 'Ebv.id'
                  ? new Intl.NumberFormat('id-ID').format('70000')
                  : premiere === 'CineOne21'
                  ? new Intl.NumberFormat('id-ID').format('70000')
                  : null}
              </Text>
            </View>
            <View style={{marginTop: 10, flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 14,
                  color: '#6B6B6B',
                  flex: 7,
                }}>
                Seat Choosed
              </Text>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 12,
                  color: '#14142B',
                  flex: 3,
                }}>
                {userSeats.length > 0 ? (
                  <View>
                    <IconClose
                      onPress={ClearSeats}
                      name="close"
                      size={20}
                      color="#14142B"
                      style={{position: 'absolute', left: -18, top: 2}}
                    />
                  </View>
                ) : null}
                <Text
                  style={styles.orderInfo_desc_title_value_seat}
                  numberOfLines={1}
                  ellipsizeMode="tail">
                  {userSeats.length > 0 ? userSeats.join(', ') : '-'}
                </Text>
              </Text>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#D6D8E7',
                marginHorizontal: 0,
                marginTop: 32,
              }}
            />
            <View style={{marginTop: 20, flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 18,
                  color: '#000000',
                  flex: 7,
                }}>
                Total Payment
              </Text>
              <Text
                style={{
                  marginLeft: 10,
                  fontSize: 16,
                  color: '#5F2EEA',
                  flex: 3,
                }}>
                {userSeats.length > 0
                  ? `Rp${new Intl.NumberFormat('id-ID', {}).format(
                      premiere === 'Hiflix'
                        ? userSeats.length * 70000
                        : premiere === 'Ebv.id'
                        ? userSeats.length * 70000
                        : premiere === 'CineOne21'
                        ? userSeats.length * 70000
                        : null,
                    )}`
                  : '-'}
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonCheckout}>
            <Text
              style={{textAlign: 'center', fontSize: 14, color: '#F7F7FC'}}
              onPress={goToCheckout}>
              Checkout now
            </Text>
          </TouchableOpacity>
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
  scrollView: {
    marginHorizontal: 0,
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#f5f6f8',
  },
  buttonCheckout: {
    marginTop: 70,
    marginBottom: 40,
    height: 40,
    padding: 11,
    backgroundColor: '#5F2EEA',
    borderRadius: 16,
  },
});
export default Order;
