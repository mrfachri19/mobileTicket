import React, {useState} from 'react';
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
import {connect} from 'react-redux';
import {register} from '../../stores/actions/auth';
import axios from '../../utils/axios';

function Register(props) {
  const [formRegister, setFormRegister] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    noTelp: '',
  });

  const handleSubmit = async () => {
    try {
      // const result = await axios.post('/auth/login', form);
      const result = await props.register(formRegister);
      props.navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };
  const handleInput = (text, name) => {
    setFormRegister({...formRegister, [name]: text});
  };

  const handleLoginnow = () => {
    props.navigation.navigate('Login');
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={tiket} />
        <Text style={styles.font}>Sign Up</Text>
        <SafeAreaView>
          <Text style={styles.email}>First Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleInput(text, 'firstName')}
            placeholder="Enter First Name"
          />
          <Text style={styles.password}>Last Name</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleInput(text, 'lastName')}
            placeholder="Enter Last Name"
          />
          <Text style={styles.password}>Phone Number</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleInput(text, 'noTelp')}
            placeholder="Enter Phone Number"
          />
          <Text style={styles.password}>Email</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleInput(text, 'email')}
            placeholder="Email"
          />
          <Text style={styles.password}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={text => handleInput(text, 'password')}
            placeholder="Enter Password"
          />
          <View style={styles.btn}>
            <Button title="Sign Up" color="#5F2EEA" onPress={handleSubmit} />
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

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
