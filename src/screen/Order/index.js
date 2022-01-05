import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
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
function Order(props) {
  const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState([]);
  const [idMovie, setIdMovie] = useState('');
  const [selectTime, setSelectTime] = useState({});
  const [date, setDate] = useState('');
  const [dataMovie, setDataMovie] = useState([]);
  useEffect(() => {
    setIdMovie(props.route.params.params.idMovie);
    setSelectTime(props.route.params.params.selectTime);
    setDate(props.route.params.params.date);
    setDataMovie(props.route.params.params.dataMovie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(idMovie, 'sasas');

  const handleSelectedSeat = data => {
    if (selectedSeat.includes(data)) {
      const deleteSeat = selectedSeat.filter(el => {
        return el !== data;
      });
      setSelectedSeat(deleteSeat);
    } else {
      setSelectedSeat([...selectedSeat, data]);
    }
  };

  const handleResetSeat = () => {
    setSelectedSeat([]);
  };

  const handleBookingSeat = () => {
    console.log(selectedSeat);
  };

  const handlePayment = () => {
    props.navigation.navigate('AppScreen', {
      screen: 'Payment',
    });
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
              height: 424,
              marginTop: 16,
            }}>
            <View
              style={{
                display: 'flex',
                backgroundColor: '#fff',
                padding: 20,
              }}>
              {/* <Seat /> */}
              <FlatList
                data={listSeat}
                keyExtractor={item => item}
                renderItem={({item}) => (
                  <Seat
                    seatAlphabhet={item}
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    selectSeat={handleSelectedSeat}
                  />
                )}
              />

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
                    {/* <Icon
                      name="arrow-down"
                      size={30}
                      color="#6e7191"
                      style={{marginRight: 8}}
                    /> */}
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
                    {/* <Icon
                      name="arrow-right"
                      size={30}
                      color="#6e7191"
                      style={{marginRight: 8}}
                    /> */}
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
                }}>
                <TouchableOpacity
                  onPress={handleBookingSeat}
                  style={{
                    backgroundColor: '#5f2eea',
                    padding: 12,
                    borderRadius: 4,
                    width: 100,
                  }}>
                  <Text style={{color: '#fff', textAlign: 'center'}}>
                    Booking
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleResetSeat}
                  style={{
                    backgroundColor: '#5f2eea',
                    padding: 12,
                    borderRadius: 4,
                    width: 100,
                  }}>
                  <Text style={{color: '#fff', textAlign: 'center'}}>
                    Reset Seat
                  </Text>
                </TouchableOpacity>
              </View>
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
              CineOne21 Cinema
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#14142B',
                textAlign: 'center',
                marginTop: 7,
              }}>
              Spiderman: Homecoming
            </Text>
            <View style={{marginTop: 26, flexDirection: 'row'}}>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 14,
                  color: '#6B6B6B',
                  flex: 7,
                }}>
                Tuesday, 07 July 2020
              </Text>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 12,
                  color: '#14142B',
                  flex: 3,
                }}>
                02:00PM
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
                One Ticket Price
              </Text>
              <Text
                style={{
                  marginLeft: 20,
                  fontSize: 12,
                  color: '#14142B',
                  flex: 3,
                }}>
                $10
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
                C1,C2,C3
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
                  marginLeft: 20,
                  fontSize: 24,
                  color: '#5F2EEA',
                  flex: 3,
                }}>
                $30
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonCheckout}>
            <Text
              style={{textAlign: 'center', fontSize: 14, color: '#F7F7FC'}}
              onPress={handlePayment}>
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
