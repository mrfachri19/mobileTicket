import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  SafeAreaView,
  TextInput,
} from 'react-native';
import tiket from '../../assets/Vector.png';

function ForgotPassword(props) {
  const handleLogin = () => {
    // props.navigation.navigate('AppScreen', {
    //   screen: 'Home',
    //   params: {
    //     nama: 'Bagus TH',
    //   },
    // });
  };

  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <Image source={tiket} />
      <Text style={styles.font}>Forgot Password</Text>
      <Text style={styles.fontdescription}>
        we'll send a link to your email shortly
      </Text>
      <SafeAreaView>
        <Text style={styles.email}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter your Email"
          keyboardType="text"
        />
        <View style={styles.btn}>
          <Button title="Active Now" color="#5F2EEA" onPress={handleLogin} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 54,
    paddingLeft: 24,
    backgroundColor: 'white',
  },
  font: {
    fontSize: 26,
    marginTop: 46,
    color: '#121212',
  },
  fontdescription: {
    marginTop: 10,
    fontSize: 15,
    color: '#8692A6',
  },
  email: {
    fontSize: 16,
    color: '#4E4B66',
    marginTop: 41,
  },
  password: {
    fontSize: 16,
    color: '#4E4B66',
    marginTop: 25,
  },
  input: {
    height: 40,
    marginTop: 12,
    marginRight: 24,
    borderWidth: 1,
    padding: 10,
  },
  btn: {
    marginTop: 40,
    width: 320,
    height: 64,
  },
});

export default ForgotPassword;
