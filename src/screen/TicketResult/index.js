import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import qrcode from '../../assets/qrcode.png';
import tikit from '../../assets/tiket.png';
import ebu from '../../assets/ebu.png';
import hiflix from '../../assets/hiflix.png';
import cinema from '../../assets/cineone.png';
import yt from '../../assets/yt.png';
import ig from '../../assets/ig.png';
import fb from '../../assets/fb.png';
import twit from '../../assets/twit.png';

function TicketResult() {
  const [text, onChangeText] = React.useState('Jon Don Bosco');
  const [email, onChangeEmail] = React.useState(
    'jondonpablopatricio@gmail.com',
  );
  const [number, onChangeNumber] = React.useState(null);
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: 'white',
              height: 600,
              borderRadius: 16,
              marginVertical: 20,
            }}>
            <Image
              style={{marginTop: 32, marginHorizontal: 54}}
              source={qrcode}
            />
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#DEDEDE',
                marginLeft: 24,
                marginRight: 24,
                width: 260,
                marginTop: 36,
              }}
            />
            <View
              style={{flexDirection: 'row', marginTop: 65, paddingLeft: 24}}>
              <Text style={{flex: 6, fontSize: 13, color: '#AAAAAA'}}>
                Movie
              </Text>
              <Text style={{flex: 6, fontSize: 13, color: '#AAAAAA'}}>
                Category
              </Text>
            </View>
            <View style={{flexDirection: 'row', paddingLeft: 24}}>
              <Text style={{flex: 6, fontSize: 14, color: '#14142B'}}>
                Spiderman
              </Text>
              <Text style={{flex: 6, fontSize: 14, color: '#14142B'}}>
                PG-13
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', marginTop: 24, paddingLeft: 24}}>
              <Text style={{flex: 6, fontSize: 13, color: '#AAAAAA'}}>
                Date
              </Text>
              <Text style={{flex: 6, fontSize: 13, color: '#AAAAAA'}}>
                Time
              </Text>
            </View>
            <View style={{flexDirection: 'row', paddingLeft: 24}}>
              <Text style={{flex: 6, fontSize: 14, color: '#14142B'}}>
                2 April 2021
              </Text>
              <Text style={{flex: 6, fontSize: 14, color: '#14142B'}}>
                02 PM
              </Text>
            </View>
            <View
              style={{flexDirection: 'row', marginTop: 24, paddingLeft: 24}}>
              <Text style={{flex: 6, fontSize: 13, color: '#AAAAAA'}}>
                Count
              </Text>
              <Text style={{flex: 6, fontSize: 13, color: '#AAAAAA'}}>
                Seat
              </Text>
            </View>
            <View style={{flexDirection: 'row', paddingLeft: 24}}>
              <Text style={{flex: 6, fontSize: 14, color: '#14142B'}}>
                3 Pcs
              </Text>
              <Text style={{flex: 6, fontSize: 14, color: '#14142B'}}>
                C1, C2, C4
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 24,
                marginTop: 40,
                borderColor: '#DEDEDE',
                width: 235,
                height: 48,
                borderWidth: 1,
                marginLeft: 24,
                paddingVertical: 10,
              }}>
              <Text style={{flex: 6}}>Total</Text>
              <Text style={{flex: 6}}>$30.00</Text>
            </View>
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
    paddingHorizontal: 24,
    backgroundColor: '#f5f6f8',
  },
  buttondetail: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#DEDEDE',
    width: 80,
    height: 32,
    marginTop: 24,
    marginLeft: 16,
    paddingTop: 8,
    alignItems: 'center',
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
    marginTop: 56,
    height: 40,
    padding: 11,
    backgroundColor: '#5F2EEA',
    borderRadius: 16,
  },
});
export default TicketResult;
