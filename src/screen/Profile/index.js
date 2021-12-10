import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import titik from '../../assets/titik.png';
import elips from '../../assets/profilepic.png';
import tikit from '../../assets/tiket.png';
import ebu from '../../assets/ebu.png';
import hiflix from '../../assets/hiflix.png';
import cinema from '../../assets/cineone.png';
import yt from '../../assets/yt.png';
import ig from '../../assets/ig.png';
import fb from '../../assets/fb.png';
import twit from '../../assets/twit.png';
import {getUserById} from '../../stores/actions/user';
import axios from '../../utils/axios';
import {connect} from 'react-redux';

function Profile(props) {
  const inputFile = useRef(null);
  const [dataUser, setDataUser] = useState({
    firstName: props.user.user.firstName,
    lastName: props.user.user.lastName,
    noTelp: props.user.user.noTelp,
    email: props.user.user.email,
    password: props.user.user.password,
  });
  console.log(dataUser);
  const [image, setImage] = useState({image: ''});
  const [isSuccess, setIsSuccess] = useState({
    status: false,
    msg: '',
  });

  const [isError, setIsError] = useState({
    status: false,
    msg: '',
  });

  const onButtonPress = () => {
    inputFile.current.press();
  };

  const handleUpdateImage = () => {
    if (image === null || !image.image) {
    } else {
      const formData = new FormData();
      for (const data in image) {
        formData.append(data, image[data]);
      }
      axios
        .patch(`/user/${props.user.user.id}`, formData)
        .then(res => {
          setIsSuccess({
            status: true,
            msg: res.data.msg,
          });

          setTimeout(() => {
            setIsSuccess({
              status: false,
              msg: '',
            });
          }, 3000);
        })
        .catch(err => {
          setIsError({
            status: true,
            msg: err.response.data.msg,
          });

          setTimeout(() => {
            setIsError({
              status: false,
              msg: '',
            });
          }, 3000);
        });
    }
  };

  const handleDelete = () => {
    axios
      .delete(`/user/${props.user.user.id}`)
      .then(res => {
        setIsSuccess({
          status: true,
          msg: res.data.msg,
        });

        setTimeout(() => {
          setIsSuccess({
            status: false,
            msg: '',
          });
        }, 3000);
      })
      .catch(err => {
        setIsError({
          status: true,
          msg: err.response.data.msg,
        });

        setTimeout(() => {
          setIsError({
            status: false,
            msg: '',
          });
        }, 3000);
      });
  };

  const changeText = e => {
    const {name, value} = e.target;

    setDataUser({
      ...dataUser,
      [name]: value,
    });
  };

  const saveChanges = () => {
    axios
      .patch(`/user/${props.user.user.id}`, dataUser)
      .then(res => {
        setIsSuccess({
          status: true,
          msg: res.data.msg,
        });

        setTimeout(() => {
          setIsSuccess({
            status: false,
            msg: '',
          });
        }, 3000);
      })
      .catch(err => {
        setIsError({
          status: true,
          msg: err.response.data.msg,
        });

        setTimeout(() => {
          setIsError({
            status: false,
            msg: '',
          });
        }, 3000);
      });
  };

  useEffect(() => {
    handleUpdateImage();
  });

  const [password, setPassword] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const changePassword = e => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const updatePassword = () => {
    axios
      .patch(`/user/update-password/${props.user.user.id}`, password)
      .then(res => {
        setIsSuccess({
          status: true,
          msg: res.data.msg,
        });

        setTimeout(() => {
          setIsSuccess({
            status: false,
            msg: '',
          });
        }, 3000);
      })
      .catch(err => {
        setIsError({
          status: true,
          msg: err.response.data.msg,
        });

        setTimeout(() => {
          setIsError({
            status: false,
            msg: '',
          });
        }, 3000);
      });
  };

  const [text, onChangeText] = React.useState('Jon Don Bosco');
  const [email, onChangeEmail] = React.useState(
    'jondonpablopatricio@gmail.com',
  );
  const [number, onChangeNumber] = React.useState(null);

  const handleOrderHistory = () => {
    props.navigation.navigate('OrderHistory');
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
        <TouchableOpacity
          style={{flex: 6}}
          onPress={() => props.getUserById(props.auth.idUser)}>
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
              <Image source={titik} />
            </View>
            <View style={{alignItems: 'center'}}>
              <Image style={{width: 136, height: 136}} source={elips} />
            </View>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 24,
                fontFamily: 'mulish',
                color: '#14142B',
              }}>
              {props.user.user.firstName}
            </Text>
            <Text style={{textAlign: 'center', fontSize: 18, color: '#4E4B66'}}>
              Moviegoers
            </Text>
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
              Full Name
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={props.user.user.firstName}
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
              onChangeText={onChangeEmail}
              value={props.user.user.email}
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
              onChangeText={onChangeNumber}
              value={props.user.user.noTelp}
              placeholder="+62"
              keyboardType="numeric"
            />
          </View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              width: 310,
              height: 400,
              borderRadius: 24,
              paddingLeft: 24,
              marginTop: 24,
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
              onChangeText={onChangeNumber}
              value={number}
              placeholder="password"
              keyboardType="numeric"
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
              onChangeText={onChangeNumber}
              value={number}
              placeholder="password"
              keyboardType="numeric"
            />
          </View>
          <TouchableOpacity style={styles.buttonCheckout}>
            <Text style={{textAlign: 'center', fontSize: 14, color: '#F7F7FC'}}>
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
});
const mapStateToProps = state => ({
  user: state.user,
  auth: state.auth,
});
const mapDispatchToProps = {getUserById};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
