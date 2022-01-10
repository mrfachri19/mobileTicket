import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Pressable,
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
import {getUser} from '../../stores/actions/user';
import {useSelector, useDispatch} from 'react-redux';
import axios from '../../utils/axios';

function Payment({navigation, route}) {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const profileUser = user.users[0];
  const [fullname, setFullName] = useState(
    `${profileUser.firstName} ${profileUser.lastName}`,
  );
  const [email, setEmail] = useState(profileUser.email);
  const [noTelp, setPhoneNumber] = useState(profileUser.noTelp);
  const [modalVisibile, setModalVisible] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedMidtrans, setSelectedMidtrans] = useState('');
  const detailOrder = route.params;

  console.log(detailOrder);

  const [userAlreadyBooking, setUserAlreadyBooking] = useState('');
  console.log(userAlreadyBooking);

  const PopUpTransferPayment = paymentMethod => {
    setPaymentMethod(paymentMethod);
    setModalVisible(true);
  };

  const selectedPaymentMidtrans = midtransText => {
    setSelectedMidtrans(midtransText);
  };

  const cancelSelectedPaymentMidtrans = () => {
    setSelectedMidtrans('');
  };

  const createBooking = async () => {
    try {
      const {userId, movieId, scheduleId, seat, timeBooking, dateBooking} =
        detailOrder;
      const setDataBooking = {
        userId,
        movieId,
        scheduleId,
        seat,
        timeBooking,
        dateBooking,
        paymentMethod: 'midtrans',
      };

      const response = await axios.post('seat/', setDataBooking);
      setUserAlreadyBooking('ready');

      return navigation.navigate('Midtrans', {
        redirectUrl: response.data.data.urlRedirect,
      });
    } catch (error) {
      new Error(error.resposne);
      console.log(error.response);
    }
  };

  useEffect(() => {
    if (userAlreadyBooking === 'ready') {
      return navigation.navigate('Profile');
    }
    dispatch(getUser());
  }, []);

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
        <Text style={{fontSize: 20, color: '#14142B'}}>
          {' '}
          Rp{detailOrder.totalPayment}
        </Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={{marginTop: 40, fontSize: 18, color: '#14142B'}}>
            Payment Method
          </Text>
          <View style={styles.methodpayment}>
            {selectedMidtrans !== 'midtrans' ? (
              <>
                <View style={styles.methodpayment_body}>
                  <Pressable onPress={() => PopUpTransferPayment('Gopay')}>
                    <View
                      style={
                        paymentMethod === 'Gopay'
                          ? styles.methodpayment_body_border_active
                          : styles.methodpayment_body_border
                      }>
                      <Image source={gopay} />
                    </View>
                  </Pressable>
                  <Pressable onPress={() => PopUpTransferPayment('Ovo')}>
                    <View
                      style={
                        paymentMethod === 'Ovo'
                          ? styles.methodpayment_body_border_active
                          : styles.methodpayment_body_border
                      }>
                      <Image source={ovo} />
                    </View>
                  </Pressable>
                  <Pressable onPress={() => PopUpTransferPayment('Paypal')}>
                    <View
                      style={
                        paymentMethod === 'Paypal'
                          ? styles.methodpayment_body_border_active
                          : styles.methodpayment_body_border
                      }>
                      <Image source={paypal} />
                    </View>
                  </Pressable>
                  <Pressable onPress={() => PopUpTransferPayment('GooglePay')}>
                    <View
                      style={
                        paymentMethod === 'GooglePay'
                          ? styles.methodpayment_body_border_active
                          : styles.methodpayment_body_border
                      }>
                      <Image source={gpay} />
                    </View>
                  </Pressable>
                  <Pressable onPress={() => PopUpTransferPayment('BCA')}>
                    <View
                      style={
                        paymentMethod === 'BCA'
                          ? styles.methodpayment_body_border_active
                          : styles.methodpayment_body_border
                      }>
                      <Image source={visa} />
                    </View>
                  </Pressable>
                  <Pressable onPress={() => PopUpTransferPayment('BRI')}>
                    <View
                      style={
                        paymentMethod === 'BRI'
                          ? styles.methodpayment_body_border_active
                          : styles.methodpayment_body_border
                      }>
                      <Image source={dana} />
                    </View>
                  </Pressable>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: 36,
                  }}>
                  <View style={styles.methodpayment_question_line}></View>
                  <View>
                    <Text style={styles.methodpayment_question_title}>or</Text>
                  </View>
                  <View style={styles.methodpayment_question_line}></View>
                </View>
              </>
            ) : null}

            <View
              style={
                selectedMidtrans === 'midtrans'
                  ? styles.methodpayment_midtrans_selected
                  : styles.methodpayment_midtrans
              }>
              <Text
                style={
                  selectedMidtrans === 'midtrans'
                    ? styles.methodpayment_title_midtrans_active_selected
                    : styles.methodpayment_title_midtrans
                }
                onPress={() => selectedPaymentMidtrans('midtrans')}>
                Pay By Midtrans
              </Text>
            </View>
            {selectedMidtrans === 'midtrans' ? (
              <Text
                style={styles.methodpayment_title_midtrans_cancel}
                onPress={cancelSelectedPaymentMidtrans}>
                Cancel
              </Text>
            ) : null}

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 36,
              }}>
              <Text style={styles.methodpayment_title_viaCash}>
                Pay via cash.
              </Text>
              <Text style={styles.methodpayment_title_viaCash_active}>
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
              keyboardType="default"
              onChangeText={fullnameText => setFullName(fullnameText)}
              value={fullname}
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
              keyboardType="email-address"
              onChangeText={emailText => setEmail(emailText)}
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
              onChangeText={phoneText => setPhoneNumber(phoneText)}
              value={noTelp}
              placeholder="+62"
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity style={styles.buttonCheckout}>
            <Text
              style={{textAlign: 'center', fontSize: 14, color: '#F7F7FC'}}
              onPress={createBooking}>
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
    marginBottom: 40,
    height: 40,
    padding: 11,
    backgroundColor: '#5F2EEA',
    borderRadius: 16,
  },
  paymentMain: {
    flexGrow: 1,
    backgroundColor: '#EFF0F6',
  },
  paymentborder: {
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paymentborder_title: {
    marginHorizontal: 24,
    color: '#AAAAAA',
    fontSize: 16,
    marginTop: 18,
    marginBottom: 18,
  },
  payment_method_container: {
    marginTop: 40,
  },
  paymentborder_title_price: {
    marginHorizontal: 24,
    marginTop: 18,
    marginBottom: 18,
    color: '#14142B',
    fontWeight: '600',
    fontSize: 20,
  },
  payment_title_method: {
    color: '#14142B',
    fontWeight: '600',
    fontSize: 18,
  },
  methodpayment: {
    marginTop: 16,
    paddingVertical: 32,
    paddingHorizontal: 18,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
  },
  methodpayment_body: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  methodpayment_image: {
    width: 50,
    height: 16,
    resizeMode: 'contain',
  },
  methodpayment_body_border: {
    borderWidth: 0.5,
    borderStyle: 'solid',
    marginTop: 16,
    borderColor: '#DEDEDE',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 9,
    marginHorizontal: 5,
  },
  methodpayment_body_border_active: {
    borderWidth: 1,
    borderStyle: 'solid',
    marginTop: 16,
    borderColor: '#5F2EEA',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 9,
    marginHorizontal: 5,
  },

  methodpayment_question_title: {
    color: '#A0A3BD',
    fontSize: 14,
    marginHorizontal: 41,
  },
  methodpayment_question_line: {
    backgroundColor: '#DEDEDE',
    height: 1,
    marginTop: 10,
    width: '30%',
  },
  methodpayment_title_viaCash: {
    color: '#6E7191',
    fontSize: 14,
  },
  methodpayment_title_viaCash_active: {
    color: '#5F2EEA',
    fontSize: 14,
    marginHorizontal: 5,
  },
  methodpayment_title_midtrans_active_selected: {
    color: '#FFFFFF',
    fontSize: 14,
    marginHorizontal: 5,
  },
  methodpayment_midtrans_selected: {
    padding: 4,
    backgroundColor: '#5F2EEA',
    borderRadius: 4,
    width: '50%',
    marginHorizontal: 70,
  },
  methodpayment_title_midtrans: {
    color: '#5F2EEA',
    fontSize: 14,
    marginTop: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  methodpayment_title_midtrans_cancel: {
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 10,
    textAlign: 'center',
  },
});
export default Payment;
