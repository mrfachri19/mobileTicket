import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import tikit from '../../assets/tiket.png';
import ebu from '../../assets/ebu.png';
import hiflix from '../../assets/hiflix.png';
import cinema from '../../assets/cineone.png';
import yt from '../../assets/yt.png';
import ig from '../../assets/ig.png';
import fb from '../../assets/fb.png';
import twit from '../../assets/twit.png';
import {useState} from 'react/cjs/react.development';
import axios from '../../utils/axios';
import {getUser} from '../../stores/actions/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function Profile({navigation}) {
  const [formImage, setFormImage] = useState({
    image: '',
  });
  const [loading, setLoading] = useState(false);
  const [popUpSettings, setPopUpSettings] = useState(false);
  const [popUpModalQuestion, setPopUpModalQuestion] = useState(false);
  const user = useSelector(state => state.user);
  const userInformation = user.users[0];
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState(userInformation.firstName);
  console.log(firstName);
  const [lastName, setLastName] = useState(userInformation.lastName);
  const [email, setEmail] = useState(userInformation.email);
  const [noTelp, setNotelp] = useState(userInformation.noTelp);

  const updateDetailInformation = async () => {
    try {
      const setDataUpdateDetailInformation = {
        firstName,
        lastName,
        email,
        noTelp,
      };
      const response = await axios.patch(
        'user/update-profile',
        setDataUpdateDetailInformation,
      );
      getDataUser();
    } catch (error) {
      console.log(error.response);
    }
  };

  // pass
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState(false);
  const [messagePassword, setMessagePassword] = useState('');
  const updatePassword = async () => {
    try {
      const setDataUpdatePassword = {
        newPassword,
        confirmPassword,
      };
      const response = await axios.patch(
        'user/update-password',
        setDataUpdatePassword,
      );
      setNewPassword('');
      setConfirmPassword('');
      setSelectOptionUpdate('');
    } catch (error) {
      setErrorPassword(true);
      setMessagePassword(error.response.data.message);
      console.log(error.response);
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
    getDataUser();
    dispatch(getUser());
  }, []);

  const showPopUpSettings = () => {
    setPopUpSettings(true);
  };

  const showPopUpImageQuestion = () => {
    setPopUpModalQuestion(true);
  };

  const showCameraPicker = async () => {
    const result = await launchCamera({
      maxHeight: 10000,
      maxWidth: 10000,
      quality: 0.5,
    });
    const setDataImage = {
      uri: result.assets[0].uri,
      type: result.assets[0].type,
      name: result.assets[0].fileName,
    };
    setFormImage({image: setDataImage});
  };
  const showGalleryPicker = async () => {
    const result = await launchImageLibrary();
    const setDataImage = {
      uri: result.assets[0].uri,
      type: result.assets[0].type,
      name: result.assets[0].fileName,
    };
    setFormImage({image: setDataImage});
  };

  const UpdateImage = async () => {
    try {
      const formData = new FormData();
      for (const data in formImage) {
        formData.append(data, formImage[data]);
      }
      setLoading(true);
      const response = await axios.patch(`user/update-image`, formData);

      setTimeout(() => {
        setLoading(false);
        setPopUpModalQuestion(false);
        setPopUpSettings(false);
      }, 2000);
      setFormImage({image: ''});
      getDataUser();
    } catch (error) {
      console.log('error image =>', error.response);
      setLoading(false);
    }
  };

  const handleSelectOptionUpdate = text => {
    setSelectOptionUpdate(text);
  };

  const handleOrderHistory = () => {
    navigation.navigate('OrderHistory');
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
          <Text style={{fontSize: 14, color: '#14142B'}}>Detail Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 6}}>
          <Text
            style={{fontSize: 14, color: '#AAAAAA'}}
            onPress={handleOrderHistory}>
            Order History
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.containerprofile}>
          <View style={styles.borderinfo}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{flex: 1}}>INFO</Text>
              <Icon
                name="ellipsis-h"
                size={28}
                color="#5F2EEA"
                onPress={showPopUpSettings}
              />
            </View>
            <View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={popUpSettings}
                onRequestClose={() => {
                  setPopUpSettings(!popUpSettings);
                }}>
                <View style={styles.modalSettings}>
                  <View style={styles.modalView}>
                    <Pressable onPress={showPopUpImageQuestion}>
                      <View
                        style={{
                          backgroundColor: '#DEDEDE',
                          width: 100,
                          height: 100,
                          flexDirection: 'column',
                          alignContent: 'center',
                          alignItems: 'center',
                          borderRadius: 100,
                          marginBottom: 10,
                        }}>
                        <Image
                          source={require('../../assets/camera.png')}
                          style={styles.modalImage}
                        />
                      </View>
                    </Pressable>
                    <Modal
                      animationType="fade"
                      transparent={false}
                      visible={popUpModalQuestion}
                      onRequestClose={() => {
                        setPopUpModalQuestion(!popUpModalQuestion);
                      }}>
                      <View style={styles.modalViewQuestion}>
                        <Text
                          style={{
                            color: '#000000',
                            fontSize: 24,
                            fontWeight: 'bold',
                          }}>
                          Please choose upload image
                        </Text>
                        {formImage.image === '' ? null : (
                          <Image
                            source={{
                              uri: 'https://inspektorat.kotawaringinbaratkab.go.id/public/uploads/user/default-user-imge.jpeg',
                            }}
                            style={{width: 100, height: 100}}
                          />
                        )}
                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                          }}>
                          <Pressable onPress={showCameraPicker}>
                            <View style={{marginHorizontal: 20, marginTop: 30}}>
                              <Icon
                                name="camera"
                                size={35}
                                style={{marginLeft: 4}}
                                color="#A0A3BD"
                              />
                              <Text
                                style={{
                                  marginTop: 10,
                                  fontWeight: '600',
                                  color: '#000000',
                                }}>
                                Camera
                              </Text>
                            </View>
                          </Pressable>
                          <Pressable onPress={showGalleryPicker}>
                            <View style={{marginHorizontal: 20, marginTop: 30}}>
                              <Icon
                                name="images"
                                size={35}
                                style={{marginLeft: 4}}
                                color="#A0A3BD"
                              />
                              <Text
                                style={{
                                  marginTop: 10,
                                  fontWeight: '600',
                                  color: '#000000',
                                }}>
                                Gallery
                              </Text>
                            </View>
                          </Pressable>
                        </View>
                        {formImage.image === '' ? null : (
                          <TouchableHighlight
                            style={{
                              backgroundColor: '#5F2EEA',
                              borderRadius: 8,
                              marginTop: 30,
                              padding: 8,
                            }}
                            onPress={UpdateImage}>
                            <Text
                              style={{color: '#FFFFFF', fontWeight: 'bold'}}>
                              {loading ? (
                                <ActivityIndicator size="large" />
                              ) : (
                                'Upload'
                              )}
                            </Text>
                          </TouchableHighlight>
                        )}
                      </View>
                    </Modal>
                    <Text
                      style={{
                        color: '#14142B',
                        fontWeight: 'bold',
                        fontSize: 18,
                      }}>
                      Choose your image
                    </Text>
                    <View>
                      <Pressable
                        style={styles.modalButton_close}
                        onPress={() => setPopUpSettings(!popUpSettings)}>
                        <Text style={styles.textStyle}>Cancel</Text>
                      </Pressable>
                    </View>
                  </View>
                </View>
              </Modal>
            </View>
            <View style={styles.profile_card_body_information}>
              <Image
                source={{
                  uri: users.image
                    ? `https://backend-fachri.fwebdev2.xyz/uploads/user/${users.image}`
                    : 'https://inspektorat.kotawaringinbaratkab.go.id/public/uploads/user/default-user-imge.jpeg',
                }}
                style={styles.profile_card_body_information_image}
              />
              <Text style={styles.profile_card_body_information_title}>
                {users.firstName} {users.lastName}
              </Text>
              <Text style={styles.profile_card_body_information_title_job}>
                {users.email}
              </Text>
              <Text style={styles.profile_card_body_information_title_job}>
                {users.noTelp}
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: '#14142B',
              fontSize: 18,
              marginTop: 48,
              marginBottom: 38,
            }}>
            Account Settings
          </Text>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              width: 310,
              height: 479,
              borderRadius: 24,
              paddingLeft: 24,
            }}>
            <Text
              style={{
                marginTop: 40,
                fontSize: 16,
                color: '#14142B',
              }}>
              Detail Information
            </Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#DEDEDE',
                marginLeft: 0,
                marginRight: 25,
                marginTop: 20,
                marginBottom: 49,
              }}
            />
            <Text style={{color: '#4E4B66', fontSize: 16, marginBottom: 12}}>
              First Name
            </Text>
            <TextInput
              style={styles.input}
              placeHolder="Jonas El"
              type="default"
              onChangeText={text => setFirstName(text, 'firstName')}
              value={firstName}
            />
            <Text
              style={{
                color: '#4E4B66',
                fontSize: 16,
                marginBottom: 12,
                marginTop: 25,
              }}>
              Last Name
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={text => setLastName(text, 'lastName')}
              type="default"
              value={lastName}
              placeholder="Input your last name ..."
            />
            <Text
              style={{
                color: '#4E4B66',
                fontSize: 16,
                marginBottom: 12,
                marginTop: 25,
              }}>
              Email
            </Text>
            <TextInput
              style={styles.input}
              childrenPlaceHolder="your email.."
              type="email-address"
              onChangeText={text => setEmail(text, 'email')}
              value={email}
            />
            <Text
              style={{
                color: '#4E4B66',
                fontSize: 16,
                marginBottom: 12,
                marginTop: 25,
              }}>
              Phone Number
            </Text>
            <TextInput
              style={styles.input}
              placeHolder="81445687121"
              type="numeric"
              onChangeText={text => setNotelp(text, 'noTelp')}
              value={noTelp}
            />
          </View>
          <TouchableOpacity style={styles.buttonCheckout}>
            <Text
              style={{textAlign: 'center', fontSize: 14, color: '#F7F7FC'}}
              onPress={updateDetailInformation}>
              Update Changes
            </Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              width: 310,
              height: 400,
              borderRadius: 24,
              paddingLeft: 24,
              marginTop: 30,
            }}>
            <Text
              style={{
                marginTop: 40,
                fontSize: 16,
                color: '#14142B',
              }}>
              Account and Privacy
            </Text>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#DEDEDE',
                marginLeft: 0,
                marginRight: 25,
                marginTop: 20,
                marginBottom: 49,
              }}
            />
            <Text
              style={{
                color: '#4E4B66',
                fontSize: 16,
                marginBottom: 12,
                marginTop: 0,
              }}>
              New Password
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={text => handleInputPassword(text, 'newPassword')}
              secureTextEntry={true}
              placeholder="Enter New Password"
            />
            <Text
              style={{
                color: '#4E4B66',
                fontSize: 16,
                marginBottom: 12,
                marginTop: 25,
              }}>
              Confirm Password
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={text =>
                handleInputPassword(text, 'confirmPassword')
              }
              secureTextEntry={true}
              placeholder="Enter Confirm Password"
            />
          </View>
          <TouchableOpacity style={styles.buttonCheckout}>
            <Text
              style={{textAlign: 'center', fontSize: 14, color: '#F7F7FC'}}
              onPress={updatePassword}>
              Update Changes
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
    marginTop: 90,
    height: 40,
    padding: 11,
    backgroundColor: '#5F2EEA',
    borderRadius: 16,
  },
  //===============
  profile_card_body_information: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile_card_body_information_image: {
    marginTop: 45,
    width: 136,
    height: 136,
    borderRadius: 100,
  },
  profile_card_body_information_title: {
    fontWeight: '600',
    fontSize: 20,
    color: '#14142B',
    marginTop: 32,
    marginBottom: 4,
  },
  profile_card_body_information_title_job: {
    fontSize: 14,
    fontWeight: '400',
    color: '#4E4B66',
  },
  profile_settings_title: {
    color: '#14142B',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 48,
  },
  profile_card_settings: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginTop: 39,
  },
  profile_card_settings_selected: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    borderColor: '#5F2EEA',
    borderStyle: 'solid',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderRadius: 24,
    marginTop: 39,
  },
  profile_card_settings_title: {
    fontSize: 16,
    fontWeight: '400',
    color: '#14142B',
    marginBottom: 8,
  },
  profile_card_privacy: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    marginTop: 39,
  },
  profile_card_privacy_selected: {
    borderColor: '#5F2EEA',
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 40,
    borderRadius: 24,
    marginTop: 39,
  },
  profile_button: {
    width: '100%',
    backgroundColor: '#5F2EEA',
    borderRadius: 8,
    elevation: 2,
    marginTop: 48,
    paddingVertical: 12,
  },
  profile_button_title: {
    textAlign: 'center',
    color: '#F7F7FC',
    fontWeight: 'bold',
    fontSize: 14,
  },
  modalSettings: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 55,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalButton_close: {
    padding: 6,
    borderColor: '#5F2EEA',
    borderWidth: 2,
    borderStyle: 'solid',
    borderRadius: 4,
    marginTop: 30,
  },
  textStyle: {
    color: '#5F2EEA',
    fontWeight: '700',
    fontSize: 16,
  },
  modalImage: {
    width: 50,
    height: 45,
    resizeMode: 'contain',
    marginTop: 30,
  },
  modalViewQuestion: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
});

export default Profile;
