import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import elips from '../../assets/ebu.png';
import tikit from '../../assets/tiket.png';
import ebu from '../../assets/ebu.png';
import hiflix from '../../assets/hiflix.png';
import cinema from '../../assets/cineone.png';
import yt from '../../assets/yt.png';
import ig from '../../assets/ig.png';
import fb from '../../assets/fb.png';
import twit from '../../assets/twit.png';

function Profile() {
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
            <View>
              <Image source={elips} />
            </View>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'mulish',
                color: '#AAAAAA',
                marginTop: 17,
              }}>
              Monday, 14 June 2020 - 02:00pm
            </Text>
            <Text style={{marginTop: 18, fontSize: 18, color: '#000000'}}>
              Spiderman Homecoming
            </Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#DEDEDE',
                marginTop: 32,
                marginBottom: 24,
              }}
            />
            <TouchableOpacity style={styles.buttonCheckout}>
              <Text
                style={{textAlign: 'center', fontSize: 14, color: '#F7F7FC'}}>
                Tickitz in Active
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.borderinfo}>
            <View>
              <Image source={elips} />
            </View>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'mulish',
                color: '#AAAAAA',
                marginTop: 17,
              }}>
              Monday, 14 June 2020 - 02:00pm
            </Text>
            <Text style={{marginTop: 18, fontSize: 18, color: '#000000'}}>
              Spiderman Homecoming
            </Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#DEDEDE',
                marginTop: 32,
                marginBottom: 24,
              }}
            />
            <TouchableOpacity style={styles.buttonCheckouts}>
              <Text
                style={{textAlign: 'center', fontSize: 14, color: '#F7F7FC'}}>
                Tickitz in Used
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
});

export default Profile;
