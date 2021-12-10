import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import DatePicker from 'react-native-date-picker';
import spiderman from '../../assets/spiderman.png';
import datetime from '../../assets/calendar.png';
import location from '../../assets/location.png';
import ebu from '../../assets/ebu.png';
import tikit from '../../assets/tiket.png';
import hiflix from '../../assets/hiflix.png';
import cinema from '../../assets/cineone.png';
import yt from '../../assets/yt.png';
import ig from '../../assets/ig.png';
import fb from '../../assets/fb.png';
import twit from '../../assets/twit.png';

function MovieDetail(props) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const handleOrder = () => {
    props.navigation.navigate('Order');
  };
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View
            style={{
              marginHorizontal: 52,
              marginTop: 20,
              backgroundColor: 'white',
            }}>
            <Image style={{margin: 32}} source={spiderman} />
          </View>
          <Text
            style={{
              marginTop: 32,
              fontSize: 20,
              color: '#000000',
              textAlign: 'center',
            }}>
            Spiderman: Homecoming
          </Text>
          <Text
            style={{
              marginTop: 8,
              fontSize: 16,
              color: '#4E4B66',
              textAlign: 'center',
            }}>
            Action, Adventure, Comedy
          </Text>
          <View style={{flexDirection: 'row', marginTop: 32}}>
            <Text style={{flex: 6, fontSize: 13, color: '#8692A6'}}>
              Released Date
            </Text>
            <Text style={{flex: 6, fontSize: 13, color: '#8692A6'}}>
              Directed By
            </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 6, fontSize: 16, color: '#121212'}}>
              June 28 2021
            </Text>
            <Text style={{flex: 6, fontSize: 16, color: '#121212'}}>
              Mr. hanayama
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 22}}>
            <Text style={{flex: 6, fontSize: 13, color: '#8692A6'}}>
              Duration
            </Text>
            <Text style={{flex: 6, fontSize: 13, color: '#8692A6'}}>Cast </Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{flex: 6, fontSize: 16, color: '#121212'}}>
              2 Hours 12 Minutes
            </Text>
            <Text style={{flex: 6, fontSize: 16, color: '#121212'}}>
              Aoi, Yabimi, sora, santana, Maman, Dudung
            </Text>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderColor: '#D6D8E7',
              marginLeft: 0,
              marginRight: 25,
              marginTop: 40,
            }}
          />
          <Text
            style={{
              marginTop: 24,
              fontSize: 16,
              color: '#14142B',
              marginBottom: 16,
            }}>
            Synopsis
          </Text>
          <Text style={{fontSize: 13, color: '#4E4B66'}}>
            Thrilled by his experience with the Avengers, {'\n'}Peter returns
            home, where he lives with his Aunt{'\n'} May, under the watchful eye
            of his new mentor {'\n'}Tony Stark, Peter tries to fall back into
            his
            {'\n'}normal daily routine - distracted by thoughts of {'\n'}proving
            himself to be more than just your {'\n'}friendly neighborhood
            Spider-Man - but when{'\n'} the Vulture emerges as a new villain,
            everything {'\n'}that Peter holds most important will be threatened.
          </Text>
          <Text
            style={{
              marginTop: 96,
              fontSize: 18,
              color: '#000000',
              textAlign: 'center',
            }}>
            Show Time and Tickets
          </Text>
          <View>
            <TouchableOpacity
              style={styles.buttonPrimary}
              onPress={() => setOpen(true)}>
              <Image style={{marginLeft: 12}} source={datetime} />
              <Text style={{flex: 3, marginLeft: 20}}>Set a date</Text>
            </TouchableOpacity>
            <DatePicker
              modal
              open={open}
              date={date}
              onConfirm={date => {
                setOpen(false);
                setDate(date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <TouchableOpacity
              style={styles.buttonPrimary}
              onPress={() => setOpen(true)}>
              <Image style={{marginLeft: 12}} source={location} />
              <Text style={{flex: 3, marginLeft: 20}}>Set a City</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 48,
              shadowColor: '#111111',
              shadowOpacity: 0.08,
              borderWidth: 0.01,
              shadowOffset: 'rgba(17, 17, 17, 0.08)',
              borderRadius: 16,
              height: 353,
              paddingHorizontal: 30,
            }}>
            <Image style={{marginLeft: 90, marginTop: 30}} source={ebu} />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 13,
                color: '#AAAAAA',
                marginTop: 12,
              }}>
              Whatever street No.12, South {'\n'} Purwokerto
            </Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#D6D8E7',
                marginHorizontal: 0,
                marginTop: 23,
              }}
            />
            <View style={{flexDirection: 'row', marginTop: 16}}>
              <Text style={{flex: 3, fontSize: 12, color: '#A0A3BD'}}>
                08:00
              </Text>
              <Text style={{flex: 3, fontSize: 12, color: '#A0A3BD'}}>
                08:00
              </Text>
              <Text style={{flex: 3, fontSize: 12, color: '#A0A3BD'}}>
                08:00
              </Text>
              <Text style={{flex: 3, fontSize: 12, color: '#A0A3BD'}}>
                08:00
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <Text style={{flex: 3, fontSize: 12, color: '#A0A3BD'}}>
                08:00
              </Text>
              <Text style={{flex: 3, fontSize: 12, color: '#A0A3BD'}}>
                08:00
              </Text>
              <Text style={{flex: 3, fontSize: 12, color: '#A0A3BD'}}>
                08:00
              </Text>
              <Text style={{flex: 3, fontSize: 12, color: '#A0A3BD'}}>
                08:00
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 24}}>
              <Text style={{flex: 8, fontSize: 14, color: '#6B6B6B'}}>
                Price
              </Text>
              <Text style={{flex: 4, fontSize: 14, color: '#000000'}}>
                $10.00/Seat
              </Text>
            </View>
            <TouchableOpacity style={styles.buttonBook} onPress={handleOrder}>
              <Text
                style={{textAlign: 'center', fontSize: 14, color: '#F7F7FC'}}
                onPress={handleOrder}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              marginTop: 32,
              shadowColor: '#111111',
              shadowOpacity: 0.08,
              borderWidth: 0.01,
              shadowOffset: 'rgba(17, 17, 17, 0.08)',
              borderRadius: 16,
              height: 353,
              paddingHorizontal: 30,
            }}>
            <Image style={{marginLeft: 90, marginTop: 30}} source={ebu} />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 13,
                color: '#AAAAAA',
                marginTop: 12,
              }}>
              Whatever street No.12, South {'\n'} Purwokerto
            </Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#D6D8E7',
                marginHorizontal: 0,
                marginTop: 23,
              }}
            />
            <View style={{flexDirection: 'row', marginTop: 16}}>
              <Text style={{flex: 3, fontSize: 12, color: '#A0A3BD'}}>
                08:00
              </Text>
              <Text style={{flex: 3, fontSize: 12, color: '#A0A3BD'}}>
                08:00
              </Text>
              <Text style={{flex: 3, fontSize: 12, color: '#A0A3BD'}}>
                08:00
              </Text>
              <Text style={{flex: 3, fontSize: 12, color: '#A0A3BD'}}>
                08:00
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 8}}>
              <Text style={{flex: 3, fontSize: 12, color: '#A0A3BD'}}>
                08:00
              </Text>
              <Text style={{flex: 3, fontSize: 12, color: '#A0A3BD'}}>
                08:00
              </Text>
              <Text style={{flex: 3, fontSize: 12, color: '#A0A3BD'}}>
                08:00
              </Text>
              <Text style={{flex: 3, fontSize: 12, color: '#A0A3BD'}}>
                08:00
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 24}}>
              <Text style={{flex: 8, fontSize: 14, color: '#6B6B6B'}}>
                Price
              </Text>
              <Text style={{flex: 4, fontSize: 14, color: '#000000'}}>
                $10.00/Seat
              </Text>
            </View>
            <TouchableOpacity style={styles.buttonBook}>
              <Text
                style={{textAlign: 'center', fontSize: 14, color: '#F7F7FC'}}>
                Book Now
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', marginTop: 48}}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                backgroundColor: '#5F2EEA',
                borderRadius: 8,
                marginLeft: 65,
                marginRight: 8,
                paddingTop: 6,
              }}>
              <Text style={{textAlign: 'center', fontSize: 18, color: 'white'}}>
                1
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'white',
                borderRadius: 8,
                paddingTop: 6,
                marginRight: 8,
                borderColor: '#DEDEDE',
                borderWidth: 1,
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 18, color: '#4E4B66'}}>
                2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'white',
                borderRadius: 8,
                paddingTop: 6,
                marginRight: 8,
                borderColor: '#DEDEDE',
                borderWidth: 1,
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 18, color: '#4E4B66'}}>
                3
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                backgroundColor: 'white',
                borderRadius: 8,
                paddingTop: 6,
                marginRight: 8,
                borderColor: '#DEDEDE',
                borderWidth: 1,
              }}>
              <Text
                style={{textAlign: 'center', fontSize: 18, color: '#4E4B66'}}>
                4
              </Text>
            </TouchableOpacity>
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
  scrollView: {
    marginHorizontal: 0,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#FFFFFF',
  },
  buttonPrimary: {
    marginTop: 24,
    width: 250,
    height: 48,
    padding: 11,
    backgroundColor: '#EFF0F6',
    borderRadius: 16,
    marginLeft: 34,
    flexDirection: 'row',
  },
  buttonBook: {
    marginTop: 24,
    width: 271,
    height: 40,
    padding: 11,
    backgroundColor: '#5F2EEA',
    borderRadius: 4,
  },
});
export default MovieDetail;
