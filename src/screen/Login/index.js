import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import tiket from '../../assets/Vector.png';

function Login(props) {
  const handleLogin = () => {
    props.navigation.navigate('AppScreen', {
      screen: 'Home',
      params: {
        nama: 'Bagus TH',
      },
    });
  };
  const handleForgotPassword = () => {
    props.navigation.navigate('ForgotPassword');
  };
  const handleRegister = () => {
    props.navigation.navigate('Register');
  };

  const [text, onChangeText] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  return (
    <View style={styles.container}>
      <Image source={tiket} />
      <Text style={styles.font}>Sign In</Text>
      <SafeAreaView>
        <Text style={styles.email}>Email</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Enter Email"
          keyboardType="text"
        />
        <Text style={styles.password}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Enter Password"
          keyboardType="text"
        />
        <View style={styles.btn}>
          <Button title="Sign In" color="#5F2EEA" onPress={handleLogin} />
        </View>
      </SafeAreaView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 1,
          flexWrap: 'wrap',
          margin: 10,
        }}>
        <Text>Forgot Your Password </Text>
        <TouchableOpacity>
          <Text style={{color: 'blue'}} onPress={handleForgotPassword}>
            Reset Now
          </Text>
        </TouchableOpacity>
        <Text style={{marginTop: 10}}>Dont have any account </Text>
        <TouchableOpacity>
          <Text style={{color: 'blue', marginTop: 10}} onPress={handleRegister}>
            Please Register
          </Text>
        </TouchableOpacity>
      </View>
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

export default Login;
