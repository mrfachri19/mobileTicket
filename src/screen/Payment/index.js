import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import ovo from '../../assets/ovo.png';
import gopay from '../../assets/gopay.png';
import gpay from '../../assets/gpay.png';
import visa from '../../assets/visa.png';
import dana from '../../assets/dana.png';
import paypal from '../../assets/paypal.png';
import tikit from '../../assets/tiket.png';
import ebu from '../../assets/ebu.png';
import hiflix from '../../assets/hiflix.png';
import cinema from '../../assets/cineone.png';
import yt from '../../assets/yt.png';
import ig from '../../assets/ig.png';
import fb from '../../assets/fb.png';
import twit from '../../assets/twit.png';

function Payment(props) {
  const [text, onChangeText] = React.useState('Jon Don Bosco');
  const [email, onChangeEmail] = React.useState(
    'jondonpablopatricio@gmail.com',
  );
  const [number, onChangeNumber] = React.useState(null);
  const handleTicketResult = () => {
    props.navigation.navigate('TicketResult');
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
        }}>
        <Text style={{flex: 6, fontSize: 16, color: '#AAAAAA'}}>
          Total payment
        </Text>
        <Text style={{fontSize: 20, color: '#14142B'}}>$30.00</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={{marginTop: 40, fontSize: 18, color: '#14142B'}}>
            Payment Method
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: 242,
              borderRadius: 16,
              marginTop: 16,
            }}>
            <View style={{flexDirection: 'row', marginTop: 2}}>
              <TouchableOpacity style={styles.buttondetail}>
                <Image source={ovo} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttondetail}>
                <Image source={gopay} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttondetail}>
                <Image source={gpay} />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity style={styles.buttondetail}>
                <Image source={paypal} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttondetail}>
                <Image source={dana} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttondetail}>
                <Image source={visa} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: 'black',
                marginLeft: 24,
                marginRight: 24,
                width: 260,
                marginTop: 36,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                marginTop: 24,
                marginLeft: 56,
              }}>
              <Text style={{fontSize: 14, color: '#AAAAAA'}}>
                Pay via cash.
              </Text>
              <Text style={{fontSize: 14, color: '#5F2EEA'}}>
                See how it work
              </Text>
            </View>
          </View>
          <Text style={{marginTop: 40, fontSize: 18, color: '#14142B'}}>
            Personal Info
          </Text>
          <View
            style={{
              backgroundColor: 'white',
              height: 400,
              borderRadius: 16,
              marginTop: 16,
              paddingLeft: 28,
            }}>
            <Text
              style={{
                color: '#696F79',
                fontSize: 14,
                marginBottom: 12,
                marginTop: 40,
              }}>
              Full Name
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Jhon Don Bosco"
              keyboardType="text"
            />
            <Text
              style={{
                color: '#696F79',
                fontSize: 14,
                marginBottom: 12,
                marginTop: 24,
              }}>
              Email
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={email}
              placeholder="jonexample@gmail.com"
              keyboardType="text"
            />
            <Text
              style={{
                color: '#696F79',
                fontSize: 14,
                marginBottom: 12,
                marginTop: 24,
              }}>
              Phone Number
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="+62"
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity style={styles.buttonCheckout}>
            <Text
              style={{textAlign: 'center', fontSize: 14, color: '#F7F7FC'}}
              onPress={handleTicketResult}>
              Pay Your Order
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
export default Payment;
