import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import tiket from '../../assets/Vector.png';

function Register(props) {
  const handleLogin = () => {
    // props.navigation.navigate('AppScreen', {
    //   screen: 'Home',
    //   params: {
    //     nama: 'Bagus TH',
    //   },
    // });
  };
  const handleLoginnow = () => {
    props.navigation.navigate('Login');
  };
  const [text, onChangeText] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={tiket} />
        <Text style={styles.font}>Sign Up</Text>
        <SafeAreaView>
          <Text style={styles.email}>First Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Enter First Name"
            keyboardType="text"
          />
          <Text style={styles.password}>Last Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Enter Last Name"
            keyboardType="text"
          />
          <Text style={styles.password}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Email"
            keyboardType="text"
          />
          <Text style={styles.password}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangePassword}
            value={password}
            placeholder="Enter Password"
            keyboardType="password"
          />
          <View style={styles.btn}>
            <Button title="Sign Up" color="#5F2EEA" onPress={handleLogin} />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              flexWrap: 'wrap',
              margin: 10,
            }}>
            <Text>Do you already have an account ? </Text>
            <TouchableOpacity>
              <Text style={{color: 'blue'}} onPress={handleLoginnow}>
                Login Now
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
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

export default Register;
