import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
} from 'react-native';
import titik from '../../assets/titik.png';
import elips from '../../assets/profilepic.png';

function Profile() {
  const [text, onChangeText] = React.useState('Jon Don Bosco');
  const [email, onChangeEmail] = React.useState(
    'jondonpablopatricio@gmail.com',
  );
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.containerprofile}>
      <ScrollView style={styles.scrollView}>
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
            Jon Don Bosco
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
              borderColor: 'black',
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
            value={text}
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
            onChangeText={onChangeNumber}
            value={number}
            placeholder="+62"
            keyboardType="numeric"
          />
        </View>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            width: 310,
            height: 479,
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
              borderColor: 'black',
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
      </ScrollView>
    </View>
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
    backgroundColor: '#F5F6F8',
    shadowColor: '#BABABA',
    padding: 40,
  },
  input: {
    height: 40,
    marginHorizontal: 0,
    borderWidth: 1,
    padding: 10,
    width: 263,
  },
});

export default Profile;
